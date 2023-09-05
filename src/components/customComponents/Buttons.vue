<template>
    <div>
        <div class="mt-3">
        <button @click="state.count++" class="px-3 py-1 border border-gray-500 rounded-md">
          +
        </button>

        <button @click="state.count--" class="px-3 py-1 border border-gray-500 mx-2 rounded-md" :class="{ 'hidden': state.count < 0 }">
          -
        </button>
          <p class="mt-3 bg-white text-center inline-block p-2">  {{ state.count < 0 ? 'Errore: A meno di ZERO non puoi andare' : state.count }}</p>
        </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue'
  const state = reactive({ count: 0 })
</script>
