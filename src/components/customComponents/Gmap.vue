<template>
    <div>
        Mappa di Google
        <GoogleMap api-key="AIzaSyBGpO28XQNGdfXuBYnrNqYVcVHhQZ1mFng" style="width: 100%; height: 500px" :center="center" :zoom="15">
    <Marker :options="{ position: center }" />
  </GoogleMap>
    </div>
</template>

<script setup>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
import { GOOGLE_MAPS_API_KEY } from '../../apikey';
const center = { lat: 40.689247, lng: -74.044502 };
// const API = ref(GOOGLE_MAPS_API_KEY);
</script>