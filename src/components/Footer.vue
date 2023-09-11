<script setup>
import { defineProps } from 'vue';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
</script>

<template>
	<footer class="bg-black">
	      <div class="max-w-screen-md mx-auto py-8 text-white container">
	        <p>
			{{ t('Custom.brand') }}
	      </p>
	      </div>
	    </footer>
</template>
