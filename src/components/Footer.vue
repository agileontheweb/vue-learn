<script setup>
import { defineProps } from 'vue';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
</script>

<template>
	<footer class="bg-black">
	      <div class="max-w-screen-md mx-auto py-8 text-white container">
	        <p class="text-sm">
			{{ t('Custom.brand') }}
			: <a href="https://alessandrocuoghi.com">alessandrocuoghi.com</a>
			\ Questo progetto: 
			: <a href="https://github.com/agileontheweb/vue-learn/" target="_blank" rel="noopener"> Github</a>
	      </p>
	      </div>
	    </footer>
</template>
