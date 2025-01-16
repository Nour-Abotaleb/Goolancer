<script setup>
import { onMounted } from "vue";
import { Chart, registerables } from "chart.js";
import { useI18n } from "vue-i18n";

Chart.register(...registerables);

const { t } = useI18n();

const centerTextPlugin = {
  id: "centerText",
  beforeDraw(chart) {
    const { width } = chart;
    const { top, bottom } = chart.chartArea;
    const ctx = chart.ctx;

    ctx.save();

    const text1 = t("chart.allProjects");
    const text2 = "48";
    const x = width / 2;
    const y = (top + bottom) / 2;

    ctx.font = "13px Tajawal";
    ctx.fillStyle = "#464545";
    ctx.textAlign = "center";
    ctx.fillText(text1, x, y - 10); 

    ctx.font = "bold 28px Tajawal";
    ctx.fillStyle = "#000";
    ctx.fillText(text2, x, y + 20); 

    ctx.restore();
  },
};

onMounted(() => {
  const ctx = document.getElementById("projectsChart").getContext("2d");

  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: [t("chart.activeRequest"), t("chart.completedRequest")],
      datasets: [
        {
          data: [43.75, 56.25],
          backgroundColor: ["#94D401", "#000000"],
          hoverBackgroundColor: ["#94D401", "#000000"],
          borderWidth: 0,
          borderRadius: 10,
        },
      ],
    },
    options: {
      cutout: "85%",
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    },
    plugins: [centerTextPlugin], 
  });
});
</script>

<template>
    <div class="bg-white rounded-xl p-2">
      <div class="mt-4 flex justify-center">
        <canvas id="projectsChart" class="w-full h-30"></canvas>
      </div>

      <div class="mt-4 flex justify-around text-sm">
        <div class="flex items-center space-x-2 rtl:space-x-reverse">
          <span class="w-2 h-2 rounded-full bg-[#94D401]"></span>
          <div>
            <p class="text-gray-800">{{ t('chart.activeRequest') }}</p>
            <p class="text-gray-500">43.75%</p>
          </div>
        </div>
        <div class="flex items-center space-x-2 rtl:space-x-reverse">
          <span class="w-2 h-2 rounded-full bg-black"></span>
          <div>
            <p class="text-gray-800">{{ t('chart.completedRequest') }}</p> 
            <p class="text-gray-500">56.25%</p>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
canvas {
  height: 120px !important;
}
.overflow-hidden {
  width: 100% !important;
}
</style>
