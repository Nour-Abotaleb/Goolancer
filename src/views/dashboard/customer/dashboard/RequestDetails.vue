<script setup>
import Header from '@/components/Header.vue';
import Duties from '@/components/dashboard/Duties.vue';
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
import router from '@/router';
import { ref } from 'vue';
import BudgetChart from './BudgetChart.vue';
const navigateTo = () => {
  router.push('/customer/request-details');
}
const navigateToServices = () => {
  router.push('/customer/services');
}
const navigateToRequirements = () => {
  router.push('/customer/request-details');
}
</script>

<template>
     <!-- Header -->
    <div class="py-2">
         <Header header-title="sidebar.my_orders"/>
    </div>
    <!-- Centered Content -->
   <div class="flex justify-between">
        <div class="lg:w-[70%] w-[95%] mx-auto lg:mx-0" >     
          <BudgetChart />    
            <div class="grid grid-cols-1 mt-4">
            <div class="grid grid-cols-1 gap-2 relative">
              <div class="bg-white rounded-3xl p-4">
              <div class="flex justify-between">
                <div class="flex gap-1">
                    <p class="text-primary">#000625</p>
                </div>
                <div class="flex items-start gap-1 whitespace-nowrap">
                  <img src="../../../../assets/icons/general/history-colored.svg" alt="">
                  <span class="text-primary text-sm">{{ t('offers.days_ago') }}</span>
                </div>
              </div>

              <div class="flex gap-4 items-center">
                <p class="font-extrabold my-4">{{ t('offers.mobile_app_for_service_buyer') }}</p>
                <span class="text-primary bg-[#F4FBE6] rounded-[20px] px-2 py-1">{{ t('offers.completed_order') }}</span>
              </div>
              <div class="flex items-center flex-wrap gap-4 text-sm border-b pb-4 border-[#F4F4F4]">
              <div class="flex items-center gap-1">
                <img src="../../../../assets/icons/general/coin.svg" alt="">
                <p>{{ t('offers.offered_amount') }}</p>
                <p class="font-semibold">{{ t('offers.amount_placeholder') }}</p>
                <span class="text-primary bg-[#F4FBE6] rounded-[20px] px-2 py-1">{{ t('offers.sponsor') }}</span>
                </div>
                <div class="flex items-center gap-1">
                  <img src="../../../../assets/icons/general/stickynote.svg" alt="">
                  <p>{{ t('offers.delivery_time') }}</p>
                  <p class="font-semibold">{{ t('offers.delivery_placeholder') }}</p>
                </div>
                <div class="flex items-center gap-1">
                  <img src="../../../../assets/icons/general/check-black.svg" alt="">
                  <p>{{ t('offers.completed_requests') }}</p>
                  <p class="font-semibold">(25)</p>
                </div>
                <div class="flex items-center gap-1">
                  <img src="../../../../assets/icons/general/bubble.svg" alt="">
                  <p>{{ t('offers.active_requests') }}</p>
                  <p class="font-semibold">(25)</p>
                </div>
              </div>
            
              <button @click="navigateTo" class="flex items-center gap-1 text-[#787474] text-sm rounded-[54px] bg-[#303030] bg-opacity-5 p-2 mt-2">
                <img src="../../../../assets/icons/general/sms-edit.svg" alt="">
                {{ t('messages.send_message') }}
              </button>
          
              </div>
         
            </div>
            <div class="flex flex-wrap lg:flex-row gap-2 items-center mt-4">
                <div @click="navigateToRequirements" class="bg-black text-sm flex items-center py-2 justify-center text-center rounded-[54px] text-white col-span-1 cursor-pointer">
                    <button class="whitespace-nowrap px-2">{{ t('offers.description_requirements') }}</button>
                </div>          
                         
                <div @click="navigateToServices" class="bg-white text-sm flex items-center py-2 justify-center text-center rounded-[54px] text-black col-span-1 cursor-pointer">
                    <button class="whitespace-nowrap px-2">{{ t('offers.services') }}</button>
                </div>  
            </div>
        </div>
        <div class="bg-white rounded-2xl p-4 mt-4">
          مشروع تصميم موقع إلكتروني لبيع المنتجات عبر الإنترنت. الموقع يجب أن يتضمن واجهة مستخدم حديثة، نظام تسجيل دخول للمستخدمين، وخيارات دفع إلكتروني آمنة. المهارات المطلوبة تشمل خبرة في Laravel وVue.js.
        </div>
        </div>
        <!-- Right Duties -->
        <div class="w-[28%] hidden lg:block overflow-y-scroll flex-col" style="scrollbar-width: none; -ms-overflow-style: none;">
            <div class="bg-white rounded-3xl p-4 mb-2">
              <div class="flex justify-between items-center">
                <div class="flex gap-1">
                  <img src="../../../../assets/icons/general/freelancer-1.svg" alt="" class="w-14">
                  <div>
                    <div class="flex gap-1">
                      <img src="../../../../assets/icons/general/check.svg" alt="" class="w-4">
                      <p class="text-primary">{{ t('offers.freelancer') }}</p>
                    </div>
                    <div class="flex items-center gap-2">
                      <p class="font-bold">سعاد علي</p>
                      <p class="text-primary text-sm">{{ t('offers.active') }}</p>
                    </div>
                  </div>
                </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="flex gap-1 py-2">
                  <span>24</span>
                  <p>{{ t('offers.completed_orders') }}</p>
              </div>
              <div class="flex gap-1">
                  <img src="../../../../assets/icons/general/star.svg" alt="">
                  <span>(4.00)</span>
              </div>
            </div>
              </div>
            <Duties /> 
        </div>
   </div>
</template>

