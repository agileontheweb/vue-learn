<script setup>
  const totalHours = "55 hours";
  import { RouterLink } from 'vue-router';
  import { ref, defineProps } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { computed } from 'vue';

  const { t } = useI18n();
  
  const currentDate = computed(() => {
    return new Date().toLocaleDateString();
  });

</script>

<template>
      

  <div class="border bg-gray-100">
    <div class="container">
      <h1>
        {{ t('thisProject.h1') }}
         <font-awesome-icon :icon="['fab', 'vuejs']" class="text-green-600" /> 
         Vue 3.
      </h1>
      <p>{{ t('thisProject.startedOn') }} </p>      
        <p v-html="t('thisProject.today', { currentDate: currentDate, totalHours: totalHours })"></p>

          <p>To learn Vue3 i used:
            <ul>
              <li>
                <a href="https://vuejs.org/guide/" target="_blank" rel="noopener">Vuejs</a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=YrxBCBibVo0&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1" target="_blank" rel="noopener">Youtube</a>
              </li>
              <li>
                <a href="http://stackoverflow.com/" target="_blank" rel="noopener">Stackoverflow</a>
              </li>
              <li>
                <a href="https://chat.openai.com//" target="_blank" rel="noopener">ChatGPT </a>
              </li>
            </ul>
          </p>
          
          <p>
            I started to read the documentation to get a global idea as it work.
            After i watch some youtube tutorial to have an global idea on how it work with some example.
            And the end i created a 
            <a href="https://github.com/agileontheweb/vue-learn/" target="_blank" rel="noopener">repository on github</a>

             and develop my personal project.
          </p>
          
          <p>
            During the project i used ChatGPT to check sintax error or help me to understand some question i had.
          </p>
        
        <h2>Tools</h2>
        
        <p>
          To create this project i used this tool.
          
        </p>
        <p>
          <ul>
            <li>Github</li>
            <li>Node</li>
            <li>Tailwind</li>          
            <li>Firebase</li>
          </ul>
        </p>
        <h2>Project Goal</h2>
        <p>In this project i want to learn how to:</p>
        <p>
          <ul>
            <li>
              Install Vue.
            </li>
            <li>
              Add TailWind.
            </li>
            <li>
              Create Navigation Section (Router)
            </li>
            <li>
              API Call.
            </li>
            <li>
              Corousel
            </li>
            <li>
              Form
            </li>
            <li>
              Autocomplete
            </li>
            <li>
              Google Maps
            </li>
            <li>
              Loading
            </li>
            <li>
              GraphChart
            </li>
            <li>
              FontAwesome
            </li>
            <li>
              Buttons: Increment Decrement
            </li>
            <li>
              Cart: Add product and show into section
            </li>
            <li>
              Crud: FireBase
            </li>
            <li>
              vue-i18n
            </li>
            <li>
              Deploy
            </li>
            
        </ul>
        
        </p>
        <p>
          I created a section
          <RouterLink :to="{ name: 'customComponents', params: { section: 'topPage' } }">components page</RouterLink>.
          Check my custom components.
        </p>
    </div>
  </div>
</template>
