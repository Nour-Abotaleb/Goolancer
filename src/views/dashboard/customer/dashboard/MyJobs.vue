<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <div class="relative hidden lg:block">
    <img src="../../../../assets/icons/general/grid.svg" class="" alt="">
    <div class="absolute flex items-start top-0 right-0 p-4 lg:space-y-4 text-white text-right">
       <div class="space-y-2">
            <h2 class="text-sm font-bold lg:text-xl">
                أنشئ وظيفة
            </h2>
        <h2 class="lg:mb-4 lg:text-md">
            ابدأ الآن وأنشئ وظيفتك لتكتشف وتوظف أفضل الكفاءات لمشاريعك المستقبلية!
        </h2>
       </div>
      <a
        href="#"
        class="bg-white whitespace-nowrap mt-1 text-black lg:text-sm text-xs rounded-full py-1 lg:ps-3 ps-2 inline-flex items-center"
      >
        <span class="me-1 font-bold lg:text-sm">أنشئ وظيفة
        </span>
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
