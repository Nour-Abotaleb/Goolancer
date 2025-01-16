<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <div class="relative">
    <img src="../../../../assets/images/customer_dashboard/background.svg" alt="">
    <div class="absolute top-0 right-0 p-4 lg:space-y-4 text-right">
      <h2 class="text-white lg:mb-4 lg:text-xl">
        {{ t('startJourneyPart1') }}<br />{{ t('startJourneyPart2') }}
      </h2>
      <a
        href="#"
        class="bg-white mt-1 text-black lg:text-sm text-xs rounded-full py-1 lg:ps-3 ps-2 inline-flex items-center"
      >
        <span class="me-1">{{ t('discoverJobs') }}</span>
        <img
          src="../../../../assets/icons/general/arrow-up-left.svg"
          class="inline rounded-full bg-[#94D401] ml-2 lg:w-8 w-7"
          alt=""
        />
      </a>
    </div>
  </div>
</template>

<style scoped>
</style>
