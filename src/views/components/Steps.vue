<template>
    <div class="flex justify-center items-center gap-20 mb relative">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="flex items-center flex-col gap-1 z-10 relative"
      >
        <span
          class="w-6 h-6 flex items-center justify-center rounded-full border"
          :class="[ 
            step.completed ? 'border-[#94D401] bg-[#94D401] text-white' : 'border-[#787474] bg-white text-gray-500',
            currentStep === index ? 'border-primary' : ''
          ]"
        >
          <span v-if="step.completed">✓</span>
          <span v-else>{{ index + 1 }}</span>
        </span>
        <span class="text-sm font-medium">{{ t(step.title) }}</span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue';
  import { useI18n } from 'vue-i18n';

  const { t, locale } = useI18n();
  
  const props = defineProps({
    steps: { type: Array, required: true },
    currentStep: { type: Number, required: true },
  });
  </script>
  
  <style scoped>

  </style>
  