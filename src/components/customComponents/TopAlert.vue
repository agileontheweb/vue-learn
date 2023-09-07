<template>
    
    <div v-if="totalItemCart" class="fixed top-0 left-0 right-0 z-10 bg-gray-600">
        <div class="container py-3">            
            <div class="flex justify-end text-white">
                <font-awesome-icon class="mt-1" :icon="['fas', 'cart-shopping']" />
                <span class="px-3">{{ totalItemCart }}</span>
            </div> 
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, onMounted, watch } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
    totalItemCart: Number
})
</script>

