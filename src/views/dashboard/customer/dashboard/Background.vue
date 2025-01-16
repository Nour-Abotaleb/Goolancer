<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
</script>

<template>
  <div :dir="locale === 'ar' ? 'rtl' : 'ltr'" class="relative">
    <img src="../../../../assets/images/customer_dashboard/background.svg" alt="">
    <div class="absolute top-0 p-4" :class="locale === 'ar' ? 'right-0 text-right' : 'left-0 text-left'" p-4 lg:space-y-4>
      <div>
          <div>
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
            class="inline rounded-full bg-[#94D401] me-2 lg:w-8 w-7"
            :class="{'rotate-90': locale === 'en'}"
            alt=""
          />
        </a>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
