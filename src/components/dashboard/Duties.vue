<script setup>
import { ref, computed } from 'vue';

import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n(); 
const currentDate = new Date();
const currentYear = ref(currentDate.getFullYear());
const currentMonth = ref(currentDate.getMonth());

const daysOfWeek = ['س', 'ح', 'اث', 'ث', 'أر', 'خ', 'ج'];

const arabicMonths = [
  'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
  'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
];

// const arabicMonths = computed(() => t('calendar.months'))
const firstDayOfMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value, 1).getDay();
});

const daysInMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value + 1, 0).getDate();
});

const getDaysInMonth = computed(() => {
  let days = Array.from({ length: daysInMonth.value }, (_, i) => i + 1);
  const emptyDaysBefore = Array(firstDayOfMonth.value).fill(null);
  return [...emptyDaysBefore, ...days];
});

const monthName = computed(() => {
  return arabicMonths[currentMonth.value];
});

const yearName = computed(() => {
  return currentYear.value.toLocaleString('ar-SA');
});
const dayClass = (day) => {
  if (day === 14 || day === 24) {
    return 'bg-[#94D401] text-white'; 
  } else if (day > 14 && day < 24) {
    return 'bg-[#E2EBC3]';
  } else {
    return '';
  }
};
</script>
<template>
    <div class="bg-white p-3 rounded-[20px] hidden lg:block">
    <div class="border rounded-[20px] p-2">
        <div class="flex justify-between items-center">
            <div class="text-xl font-semibold mb-2 flex items-center gap-1">
            <img src="../../assets/icons/general/arrow-down-black.svg" alt="">
            <div>{{ t( `${ monthName } ${ currentYear }`) }}</div>
        </div>
        <div class="flex">
            <img src="../../assets/icons/general/small-arrow-right.svg" alt="">
            <img src="../../assets/icons/general/small-arrow-left.svg" alt="">
        </div>
    </div>

    <div class="grid grid-cols-7 text-center">
      <div v-for="(day, index) in daysOfWeek" :key="index" class="font-medium">
        {{ day }}
      </div>

      <div v-for="day in getDaysInMonth" :key="day" class="text-sm p-1">
        <span v-if="day" :class="dayClass(day)" class="block rounded-full">
            {{ day }}
          </span>
      </div>
    </div>
    </div>
        <h3 class="font-bold text-lg mt-2">{{ t('calendar.task') }}</h3>
        <div>
            <div class="border rounded-[20px] p-2 mt-2">
                <div class="flex justify-between">
                    <p class="font-bold">{{ t('calendar.graphicDesign') }}</p>
                    <div class="flex gap-2">
                    <div>
                        <p class="bg-[#E2EBC3] rounded px-1.5 py-0.5">12</p>
                        <p class="text-center">{{ t('calendar.calendar.day') }}</p>
                    </div>
                    <div>
                        <p class="bg-[#E2EBC3] rounded px-1.5 py-0.5">12</p>
                        <p class="text-center">{{ t('calendar.calendar.hour') }}</p>
                    </div>
                    <div>
                        <p class="bg-[#E2EBC3] rounded px-1.5 py-0.5">12</p>
                        <p class="text-center">{{ t('calendar.calendar.minute') }}</p>
                    </div>
                    </div>
                </div>
                <div class="flex justify-between items-center mt-4">
                    <div class="flex gap-1">
                        <p class="font-bold">7,000</p> 
                        <span class="text-[#787474]">{{ t('calendar.monthly') }}</span>
                    </div>
                    <button class="flex items-center gap-1 bg-black text-white rounded-[100px] px-1 ps-2  py-1">
                        <p class="text-sm">{{ t('calendar.view') }}</p>
                        <img src="../../assets/icons/general/arrow-up-left.svg" alt="" class="w-6" :class="{'rotate-90': locale === 'en'}">
                    </button>
                </div>
            </div>
            <div class="border rounded-[20px] p-2 mt-4">
                <div class="flex justify-between">
                    <p class="font-bold">{{ t('calendar.graphicDesign') }}</p>
                    <div class="flex gap-2">
                    <div>
                        <p class="bg-[#E2EBC3] rounded px-1.5 py-0.5">12</p>
                        <p class="text-center">{{ t('calendar.calendar.day') }}</p>
                    </div>
                    <div>
                        <p class="bg-[#E2EBC3] rounded px-1.5 py-0.5">12</p>
                        <p class="text-center">{{ t('calendar.calendar.hour') }}</p>
                    </div>
                    <div>
                        <p class="bg-[#E2EBC3] rounded px-1.5 py-0.5">12</p>
                        <p class="text-center">{{ t('calendar.calendar.minute') }}</p>
                    </div>
                    </div>
                </div>
                <div class="flex justify-between items-center mt-4">
                    <div class="flex gap-1">
                        <p class="font-bold">7,000</p> 
                        <span class="text-[#787474]">{{ t('calendar.monthly') }}</span>
                    </div>
                    <button class="flex items-center gap-1 bg-black text-white rounded-[100px] px-1 ps-2 py-1">
                        <p class="text-sm">{{ t('calendar.view') }}</p>
                        <img src="../../assets/icons/general/arrow-up-left.svg" alt="" class="w-6" :class="{'rotate-90': locale === 'en'}">
                    </button>
                </div>
            </div>
            <div class="border rounded-[20px] p-2 mt-4">
                <div class="flex justify-between">
                    <p class="font-bold">{{ t('calendar.graphicDesign') }}</p>
                    <div class="flex gap-2">
                    <div>
                        <p class="bg-[#E2EBC3] rounded px-1.5 py-0.5">12</p>
                        <p class="text-center">{{ t('calendar.calendar.day') }}</p>
                    </div>
                    <div>
                        <p class="bg-[#E2EBC3] rounded px-1.5 py-0.5">12</p>
                        <p class="text-center">{{ t('calendar.calendar.hour') }}</p>
                    </div>
                    <div>
                        <p class="bg-[#E2EBC3] rounded px-1.5 py-0.5">12</p>
                        <p class="text-center">{{ t('calendar.calendar.minute') }}</p>
                    </div>
                    </div>
                </div>
                <div class="flex justify-between items-center mt-4">
                    <div class="flex gap-1">
                        <p class="font-bold">7,000</p> 
                        <span class="text-[#787474]">{{ t('calendar.monthly') }}</span>
                    </div>                    
                    <button class="flex items-center gap-1 bg-black text-white rounded-[100px] px-1 ps-2 py-1">
                        <p class="text-sm">{{ t('calendar.view') }}</p>
                        <img src="../../assets/icons/general/arrow-up-left.svg" alt="" class="w-6" :class="{'rotate-90': locale === 'en'}">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>