<script setup>
import scrollMixin from '../assets/scrollMixin.js';
import { setMetaInfo } from '../assets/metaHelper.js';
import { safeHtml } from 'vue-safe-html';
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const pageTitle = ref(t('bio.meta.title'));
  const pageDescription = ref(t('bio.meta-description'));

const route = useRoute();
const fragment = route.params.section || 'topPage';

onMounted(() => {
  scrollMixin.methods.scrollToSection(fragment);
  setMetaInfo(pageTitle.value, pageDescription.value);

  // document.title = pageTitle.value;
  // const metaDescription = document.querySelector('meta[name="description"]');
  // if (metaDescription) {
  //   metaDescription.setAttribute('content', pageDescription.value);
  // }
});
</script>


<template>
    <div class="border bg-gray-100">
      <section id="topPage"></section>
    <div class="container">  

        <h1>
          {{ t('bio.h1') }}
        </h1>
        {{ t('bio.p_1') }}
        <p v-safe-html="t('bio.p_2')"></p>
        <p>{{ t('bio.p_3') }}</p>
        <p>{{ t('bio.p_4') }}</p>
        <p>{{ t('bio.p_5') }}</p>
        <p v-safe-html="t('bio.p_6')"></p>
        <p>{{ t('bio.p_7') }}</p>      
        <p v-safe-html="t('bio.p_8')"></p>
        <p v-safe-html="t('bio.p_9')"></p>
        <p v-safe-html="t('bio.p_10')"></p>
        <p>
          {{ t('bio.p_11') }}
          <ul>
            <li>
              <a href="https://corsidigrafica.info/corso-illustrator-facile/" target="blank">
                Illustrator
              </a>
            </li>
            <li>
            <a href="https://corsidigrafica.info/corso-sviluppatore-front-end/" target="blank">
                Front End 
              </a>
            </li>
            <li>
            <a href="https://corsidigrafica.info/corso-animazione-web/" target="blank">
                Animation with GreenSock
              </a>
            </li>
          </ul>
        </p>
        <p>          
          {{ t('bio.p_12') }}
        </p>
        <p>
          <p v-safe-html="t('bio.p_13')"></p>
        </p>
        <p>
          {{ t('bio.p_14') }}
        </p>
        <p>
          {{ t('bio.p_15') }}
        </p>
        <p v-safe-html="t('bio.p_16')"></p>
        <p>
          {{ t('bio.p_17') }}
        </p>
        <p>
          {{ t('bio.p_18') }}
        </p>

        <h3>
          {{ t('bio.h3_video') }}
        </h3>

        <div class="relative ">
          <iframe class="w-full aspect-video rounded-lg shadow-lg h-80"
          src="https://www.youtube.com/embed/v1Nh3bj5MZI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" data-ruffle-polyfilled=""></iframe>
        </div>

        <div class="relative mt-6">
          <iframe class="w-full aspect-video rounded-lg shadow-lg h-80"
          src="https://www.youtube.com/embed/LO0v_g8C_2I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" data-ruffle-polyfilled=""></iframe>
        </div>

        <div class="relative mt-6">
          <iframe class="w-full aspect-video rounded-lg shadow-lg h-80"
          src="https://www.youtube.com/embed/xNfo34HDNjM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" data-ruffle-polyfilled=""></iframe>
        </div>

        <h3>
          {{ t('bio.h3_past') }}
        </h3>

        <p>
          {{ t('bio.p_19') }}
        </p>

        <h3>
          {{ t('bio.h3_travel') }}
        </h3>

        <p>
          {{ t('bio.p_20') }}
        </p>
    </div>
  </div>
</template>
