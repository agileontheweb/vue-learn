<template>
  

  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
    v-if="chartData.datasets[0].data.length > 0"
  />
</template>

<script setup>
import { ref, watch } from 'vue';
import Loading from './Loading.vue';

import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = ref({
  labels: ['', '', ''],
  datasets: [{ data: [] }],
});

const props = defineProps({
  chartData: Object,
});

// Aggiorna chartData quando ricevi nuovi dati dal componente padre
watch(() => props.chartData, (newChartData) => {
  chartData.value = {
    labels: ['CO', 'NO2', 'O3', 'PM10'],
    datasets: [{ data: newChartData }],
  };
});


if (chartData.value) {
  console.log("OK BAR CHART");
}

const chartOptions = {
  responsive: true,
};
</script>

