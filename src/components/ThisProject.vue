<script setup>
  const totalHours = "60";
  import { RouterLink } from 'vue-router';
  import { ref, defineProps, onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { computed } from 'vue';

  const { t } = useI18n();
  
  const pageTitle = ref(t('thisProject.metaTitle'));
  const pageDescription = ref(t('thisProject.metaDescription'));
  
  const currentDate = computed(() => {
    return new Date().toLocaleDateString();
  });
  
  onMounted(() => {
    document.title = pageTitle.value;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageDescription.value);
    }
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
      
      <p>{{ t('thisProject.p_1') }}</p>

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
        
        <p v-safe-html="t('thisProject.p_2')"></p>
        <p>{{ t('thisProject.p_3') }}</p>
        <h2>{{ t('thisProject.h2_tools') }}</h2>
        <p>{{ t('thisProject.p_4') }}</p>
        
        <ul>
          <li>Github</li>
          <li>Node</li>
          <li>Tailwind</li>          
          <li>Firebase</li>
        </ul>

        <h2>{{ t('thisProject.h2_project_goal') }}</h2>
        <p>{{ t('thisProject.p_5') }}</p>
        
        <ul>
          <li>
            {{ t('thisProject.list.li_0') }}
          </li>
          <li>
            {{ t('thisProject.list.li_1') }}
          </li>
          <li>
            {{ t('thisProject.list.li_2') }}
          </li>
          <li>
            {{ t('thisProject.list.li_3') }}
          </li>
          <li>
            {{ t('thisProject.list.li_4') }}
          </li>
          <li>
            {{ t('thisProject.list.li_5') }}
          </li>
          <li>
            {{ t('thisProject.list.li_6') }}
          </li>
          <li class="line-through	">
            {{ t('thisProject.list.li_7') }}
          </li>
          <li>
            {{ t('thisProject.list.li_8') }}
          </li>
          <li>
            {{ t('thisProject.list.li_9') }}
          </li>
          <li>
            {{ t('thisProject.list.li_10') }}
          </li>
          <li>
            {{ t('thisProject.list.li_11') }}
          </li>
          <li>
            {{ t('thisProject.list.li_12') }}
          </li>
          <li>
            {{ t('thisProject.list.li_12a') }}
          </li>
          <li>
            {{ t('thisProject.list.li_13') }}
          </li>
          <li>
            {{ t('thisProject.list.li_14') }}
          </li>
          <li>
            {{ t('thisProject.list.li_15') }}
          </li>
          <li>
            {{ t('thisProject.list.li_16') }}
          </li>
      </ul>  
      <p>
        {{ t('thisProject.p_6') }}
        <RouterLink :to="{ name: 'customComponents', params: { section: 'topPage' } }">
          {{ t('thisProject.router_link') }}
        </RouterLink>.
        {{ t('thisProject.p_7') }}
      </p>
    </div>
  </div>
</template>
