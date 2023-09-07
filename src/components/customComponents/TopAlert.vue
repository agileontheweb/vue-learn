<template>
    
    <div v-if="quantity" class="fixed top-0 left-0 right-0 z-10 bg-gray-600">
        <div class="container py-3">            
            <div class="flex justify-end text-white">
                <font-awesome-icon class="mt-1" :icon="['fas', 'cart-shopping']" />
                <span class="px-3">{{ quantity }}</span>
            </div> 
            
        </div>
    </div>
</template>

<script setup>
import {  defineProps } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
    quantity: Number,
})
</script>

