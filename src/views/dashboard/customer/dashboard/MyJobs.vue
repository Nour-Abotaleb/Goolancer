<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
</script>

<template>
  <!-- Dynamically set direction -->
  <div class="relative hidden lg:block" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <img src="../../../../assets/icons/general/grid.svg" alt="">
    <div
      class="absolute flex items-start top-0 p-4 lg:space-y-4 text-white"
      :class="locale === 'ar' ? 'right-0 text-right' : 'left-0 text-left'"
    >
      <div class="space-y-2">
        <h2 class="text-sm font-bold lg:text-xl">
          {{ t('create_job') }}
        </h2>
        <h2 class="lg:mb-4 lg:text-md">
          {{ t('start_now_create_job') }}
        </h2>
      </div>
      <a
        href="#"
        class="bg-white whitespace-nowrap mt-1 text-black lg:text-sm text-xs rounded-full p-1 inline-flex items-center"
        :class="locale === 'ar' ? 'lg:ps-3' : 'lg:pe-3'"
      >
        <button class="me-1 font-bold lg:text-sm">
          {{ t('create_job') }}
        </button>
        <img
          src="../../../../assets/icons/general/arrow-up-left.svg"
          class="inline rounded-full bg-[#94D401] me-2 lg:w-8 w-7"
          alt=""
          :class="{'rotate-90': locale === 'en'}"
        />
      </a>
    </div>
  </div>
</template>

<style scoped>
</style>
