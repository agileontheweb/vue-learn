<template>
    
    <div class="p-6 bg-white mt-6">
        <h2 class="text-2xl">{{ productName }}</h2>
        <p>{{ productDescription }}</p>
    </div>
    
    <div class="grid grid-cols-2 gap-2 p-3 bg-white shadow-md">
        <SquareItem :images="images"/>
        <Form />
    </div>
</template>

<script setup>
import SquareItem from './SquareItem.vue';
import Form from './Form.vue';

import { defineEmits } from 'vue';
import { ref } from 'vue';

const { emit } = defineEmits(['review-submitted']);
let isSend = ref(false);
const name = ref('');
const review = ref('');
const rating = ref(null);

const onSubmit = () => {
const productReview = {
name: name.value,
review: review.value,
rating: rating.value,
};
console.log(productReview);
isSend.value = true;
};

import { defineProps } from 'vue';


const props = defineProps({
productName: String,
productDescription: String,
images: Array,
});

</script>

