<!-- FontAwesomeConfig.vue -->
<template>
    <div>
    </div>
  </template>
  
  <script setup>
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { fas } from '@fortawesome/free-solid-svg-icons';
  import { faGithub, faVuejs } from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  library.add(fas, faGithub, faVuejs);
  </script>
  