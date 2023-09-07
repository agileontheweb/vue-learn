<template>
    <div>
        <div class="mt-3">

        <button @click="decrement" class="px-3 py-1 border border-gray-500 mx-2 rounded-md" >
          -
        </button>
        <button @click="increment" class="px-3 py-1 border border-gray-500 rounded-md">
          +
        </button>
          <p class="mt-3 bg-white text-center inline-block p-2">
            {{quantity}}
             <!-- {{ count< 0 ? 'Errore: A meno di ZERO non puoi andare' : count }} -->
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
    
    const props = defineProps({
      quantity: Number,
      showButtons: Boolean,
    });

    const quantity = ref(props.quantity);
    const emits = defineEmits();

    const increment = () => {
      console.log("incrementa")
      quantity.value += 1;
      console.log(quantity)
      emits('quantity-updated', quantity.value); // Emit the updated quantity to the parent

    };

    const decrement = () => {
      if (quantity.value > 0) {
        console.log("decrementa")
        quantity.value -= 1;
        console.log(quantity)
        emits('quantity-updated', quantity.value); // Emit the updated quantity to the parent

      }
    };

</script>
