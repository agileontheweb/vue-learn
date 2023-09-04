<template>
    <div class="mb-6">
        <h2 class="text-2xl mt-6">Quote API with Alert Style</h2>
        <p>Consume Message "Quotes" from https://jsonplaceholder.typicode.com. Use Axios.</p>
    </div>
<div>
    <button class="border rounded-md p-3 bg-white hover:bg-gray-100" v-if="!isOpen" @click="isOpen = !isOpen">Show Alert</button>
</div>
<div v-if="isOpen" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
    <span v-if="isComplete" class="block sm:inline"> {{ loading }}</span>
    <strong class="font-bold">{{ author }}: </strong>
    <span class="block"> {{ message }}.</span>
    <span class="absolute top-0 bottom-0 right-0 px-4 py-3"
        @click="isOpen = !isOpen">
        <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
    </span>
</div>

<div class="mt-6" v-if="isOpen">
<button class="border p-3" @click="loadQuote">
    Load Another Quote
  </button>
</div>
</template>

<script setup>
    import { ref } from 'vue';
    import axios from 'axios'
    let isOpen = ref(true);
    let message = ref('');
    let author= ref('');
    const category = 'happiness';
    let loading = ref("Loading...");
    let isComplete = ref(true);
    
    loadQuote();
    function loadQuote() {
        message.value = '';
        author.value = '';
        isComplete = ref(true);
        axios
        .get('https://api.api-ninjas.com/v1/quotes', {
            params: {
            category: category,
            },
            headers: {
            'X-Api-Key': 'B3c3dxfR39RYSoRrudMB3w==TAV6QtCyg9hU9gyi',
            },
        })
        .then((response) => {
            message.value = response.data[0].quote;
            author.value = response.data[0].author;
            isComplete = ref(false);
        })
        .catch((error) => {
            console.error('Error:', error.response.data);
        });

    };
    
</script>


