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
  const canvas = document.getElementById("growthChart");
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, "#94D401");
  gradient.addColorStop(1, "#FFFFFF");

  const highlightPlugin = {
    id: "highlightMax",
    afterDraw(chart) {
      const dataset = chart.data.datasets[0];
      const data = dataset.data;
      const maxIndex = data.indexOf(Math.max(...data));
      const meta = chart.getDatasetMeta(0);
      const point = meta.data[maxIndex]; 
      const { x, y } = point.getCenterPoint(); 

      const xAxis = chart.scales.x;
      const yAxis = chart.scales.y;

      // Dashed line
      ctx.save();
      ctx.beginPath();
      ctx.setLineDash([5, 5]);
      ctx.moveTo(x, y);
      ctx.lineTo(x, yAxis.bottom); 
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, 2 * Math.PI);
      ctx.fillStyle = "#000000";
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#FFFFFF"; 
      ctx.stroke();
      ctx.restore();
    },
  };

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Sep 1", "Sep 2", "Sep 3", "Sep 4", "Sep 5", "Sep 6", "Sep 7"],
      datasets: [
        {
          label: t("chart.balance"),
          data: [2000, 2500, 2200, 3000, 2800, 2700, 2900],
          borderColor: "#94D401",
          backgroundColor: gradient,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: "#000",
          pointHoverRadius: 6,
          pointRadius: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: "#6B7280",
          },
        },
        y: {
          grid: {
            color: "#E5E7EB",
            drawBorder: false,
          },
          ticks: {
            color: "#6B7280",
          },
        },
      },
    },
    plugins: [highlightPlugin],
  });
});

</script>

<template>
    <div class="bg-white rounded-xl p-2">
      <div class="">
        <p class="text-gray-500 text-lg">{{ t('chart.walletBalance') }}</p>
        <p class="text-gray-800 text-2xl font-bold">$4,502.00</p>
      </div>
      <div class="mt-4">
        <canvas id="growthChart" class="w-full h-40"></canvas>
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
