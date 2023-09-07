<template>
    <div>
        <div class="mt-3">
        <button @click="decrement" class="px-3 py-1 border border-gray-500 mx-2 rounded-md" >
          -
        </button>
        <button @click="increment" class="px-3 py-1 border border-gray-500 rounded-md">
          +
        </button>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
    
    const props = defineProps({
      quantity: Number,
      showButtons: Boolean,
    });
    
    const emits = defineEmits();

    const increment = () => { 
      emits('quantity-updated', props.quantity + 1);
    };

    const decrement = () => {
      if (props.quantity > 0) {
        emits('quantity-updated', props.quantity - 1);
      }
    };

</script>
