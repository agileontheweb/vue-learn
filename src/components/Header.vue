<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="py-12 text-center">
    <h1 class="text-3xl uppercase">{{ msg }}</h1>
    <h2 class="italic">
      #1 Vue Project 2023 - <small>Start 2 Septemeber</small>
    </h2>
    <nav>
      <ul class="flex justify-center gap-4 mt-10">
        <li class="border px-3 text-sm" :class="{ 'border-blue-300 text-blue-300': $route.path === '/' }">
          <RouterLink to="/">This project</RouterLink>
        </li>
        <li class="border px-3 text-sm" :class="{ 'border-blue-300 text-blue-300': $route.path === '/customComponents' }">
          <RouterLink to="/customComponents">Custom Components</RouterLink>
        </li>
        <li class="border px-3 text-sm" :class="{ 'border-blue-300 text-blue-300': $route.path === '/about' }">
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li class="border px-3 text-sm">
          <a href="https://vuejs.org/" target="_blank" rel="noopener">Github</a>
        </li>
    </ul>
    </nav>
    
  </div>
</template>
