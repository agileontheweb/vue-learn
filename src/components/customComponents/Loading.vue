<template>
  <div v-if="isLoading" class="loading">
    <span class="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
      {{ message }}
    </span>
  </div>

</template>

<script setup>
    import { ref, defineProps } from 'vue';
    const { message, isLoading } = defineProps(['message', 'isLoading']);


</script>