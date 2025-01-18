<script setup>
import { onMounted } from "vue";
import { Chart, registerables } from "chart.js";
import { useI18n } from "vue-i18n";

Chart.register(...registerables);

const { t } = useI18n();

// Calculate the percentage values for the three parts
const totalAmount = 44;
const activeRequestAmount = 4;
const completedRequestAmount = 36;
const pendingRequestAmount = 4;

const activeRequestPercent = (activeRequestAmount / totalAmount) * 100;
const completedRequestPercent = (completedRequestAmount / totalAmount) * 100;
const pendingRequestPercent = (pendingRequestAmount / totalAmount) * 100;

const centerTextPlugin = {
  id: "centerText",
  beforeDraw(chart) {
    const { width } = chart;
    const { top, bottom } = chart.chartArea;
    const ctx = chart.ctx;

    ctx.save();

    const text1 = t("chart.total_budget");
    const text2 = `$${totalAmount}.00`; // Display the total budget
    const x = width / 2;
    const y = (top + bottom) / 2;

    ctx.font = "13px Tajawal";
    ctx.fillStyle = "#464545";
    ctx.textAlign = "center";
    ctx.fillText(text1, x, y - 10); 

    ctx.font = "bold 20px Tajawal";
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
      labels: [t("chart.activeRequest"), t("chart.completedRequest"), t("chart.pendingRequest")],
      datasets: [
        {
          data: [activeRequestPercent, completedRequestPercent, pendingRequestPercent], 
          backgroundColor: ["#94D401", "#000000", "#FFFF04"], 
          hoverBackgroundColor: ["#94D401", "#000000", "#FFFF04"], 
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
    <div class="bg-white rounded-xl p-4 flex justify-center gap-10">
      <div class="flex justify-center">
        <canvas id="projectsChart" class="w-full h-30"></canvas>
      </div>
      <div class="mt-4 flex justify-between items-center gap-4 text-sm">
        <div class="flex items-center space-x-2 rtl:space-x-reverse">
          <span class="w-2 h-2 rounded-full bg-[#94D401]"></span>
          <div>
            <p class="text-gray-800">{{ t('chart.labels.commissionAmount') }}</p>
            <p class="text-black text-center text-xl font-semibold">$4.00</p> 
          </div>
        </div>
        <div class="flex items-center space-x-2 rtl:space-x-reverse">
          <span class="w-2 h-2 rounded-full bg-[#FFFF04]"></span>
          <div>
            <p class="text-gray-800">{{ t('chart.labels.earnedBalance') }}</p> 
            <p class="text-black text-center text-xl font-semibold">$36.00</p> 
          </div>
        </div>
        <div class="flex items-center space-x-2 rtl:space-x-reverse">
          <span class="w-2 h-2 rounded-full bg-[#000000]"></span> 
          <div>
            <p class="text-gray-800">{{ t('chart.labels.pendingBalance') }}</p>
            <p class="text-black text-center text-xl font-semibold">$4.00</p> 
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
