<template>
    <div class="mb-6">
        <h2 class="text-2xl mt-6">AutoComplete + API: Air Quality</h2>
        <p>Find city and get air quality</p>
    </div>
    <div class="my-6">
        <input
        class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        v-model="searchQuery"
        placeholder="Inserisci il nome della città"
        @input="searchCities">
        <ul class="p-3 bg-gray-100" v-if="filteredCities.length && searchQuery !== ''">
            <li class="p-2 cursor-pointer hover:text-white hover:bg-blue-500"
            @click="getPosition(city.name)" v-for="city in filteredCities" :key="city.geonameid">{{ city.name }}</li>
        </ul>
        <div v-if="showWeather" class="bg-white p-3 mt-3">
            Quality Air in the city: <strong>{{ city }} </strong>
            <div class="grid  grid-cols-4 gap-3 text-center py-3">
                <div class="border p-3 text-left bg-gray-100">
                    <h3 class="text-2xl my-2"> CO: {{ CO }}</h3>
                    <p><small>Il "CO" è l'abbreviazione per il monossido di carbonio, che è un inquinante atmosferico comune. Il monossido di carbonio (CO) è un gas incolore, inodore e insapore che può essere dannoso per la salute umana se presente in concentrazioni elevate nell'aria.</small></p>
                </div>
                <div class="border p-3 text-left bg-gray-100">
                    <h3 class="text-2xl my-2"> NO2: {{ NO2 }}</h3>
                    <p><small>
                        Il "NO2" è l'abbreviazione per il diossido di azoto, che è un inquinante atmosferico gassoso. Il diossido di azoto (NO2) è uno dei principali ossidi di azoto prodotti durante la combustione di combustibili fossili e può essere dannoso per la salute umana.
                    </small>
                </p>
                </div>
                <div class="border p-3 text-left bg-gray-100">
                    
                    <h3 class="text-2xl my-2 ">O3: {{ O3 }}</h3>
                    <p>
                    <small>
                        L'"O3" è l'abbreviazione per l'ozono troposferico, noto anche come ozono superficiale. L'ozono troposferico è un gas incolore e inodore che si trova nella parte più bassa dell'atmosfera, chiamata troposfera. A differenza dell'ozono stratosferico, che è benefico perché forma lo strato di ozono che protegge la Terra dai raggi UV dannosi, l'ozono troposferico è un inquinante atmosferico.
                    </small>
                </p>
                </div>
                <div class="border p-3 text-left bg-gray-100">
                    <h3 class="text-2xl my-2"> PM10: {{ PM10 }}</h3>
                    <p>
                    <small>
                        Le PM10 sono particelle sospese nell'aria che hanno un diametro aerodinamico inferiore o uguale a 10 micrometri (µm), il che le rende particelle relativamente grosse. Queste particelle sono spesso chiamate "particolato sottile" o "PM10" per abbreviazione. Le PM10 possono essere costituite da una varietà di sostanze, tra cui polvere, polveri sottili, ceneri, polline, spore di muffa e piccole gocce di liquido.
                    </small>
                </p>
                </div>
        </div>
        </div>
    </div>

</template>

<script setup>
import {ref} from 'vue'
import axios from 'axios';
import { computed, onMounted } from 'vue';
let searchTerm = ref('');
let listCity = ref('');

const searchQuery = ref('');
const cities = ref([]);
let searchTimeout;
let showWeather = false;

const filteredCities = computed(() => {
  return cities.value.filter((city) =>
    city.name.toLowerCase().startsWith(searchQuery.value.toLowerCase())
  );
});

const searchCities = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/lmfmaier/cities-json/master/cities500.json"
    );
    if (response.ok) {
      cities.value = await response.json();
    }
  } catch (error) {
    console.error("Errore durante il recupero delle città: ", error);
  }
};

const onInputChange = () => {
  clearTimeout(searchTimeout); // Cancella il timer precedente
  searchTimeout = setTimeout(() => {
    searchCities(); // Esegui la ricerca dopo un ritardo di, ad esempio, 500 ms
  }, 500);
};

const getPosition = (getPosition) => {
    console.log("click:" + getPosition);
    searchQuery.value = '';
    showWeather = true;
    getAirQulity(getPosition);
}
let city = ref('');
let CO = ref('');
let NO2 = ref('');
let O3 = ref('');
let PM10 = ref('');
// let SO2 = ref('');

const getAirQulity = (getPosition) => {
    city = getPosition;
    axios.get('https://api.api-ninjas.com/v1/airquality', {
    params: {
      city: city,
    },
    headers: {
        'X-Api-Key': 'B3c3dxfR39RYSoRrudMB3w==TAV6QtCyg9hU9gyi',
    },
  })
  .then((response) => {
    console.log(response.data);
    console.log("CO: " + response.data.CO.concentration);
    CO.value = response.data.CO.concentration;
    console.log("NO2 : " + response.data.NO2.concentration);
    NO2.value = response.data.NO2.concentration;
    console.log("O3 : " + response.data.O3.concentration);
    O3.value = response.data.O3.concentration;
    console.log("PM10 : " + response.data.PM10.concentration);
    PM10.value = response.data.PM10.concentration;
    
  })
  .catch((error) => {
    console.error('Error:', error.response.data);
  });
}


</script>
