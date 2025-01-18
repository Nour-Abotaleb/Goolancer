<script setup>
import Header from '@/components/Header.vue';
import Duties from '@/components/dashboard/Duties.vue';
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
import router from '@/router';
import { ref } from 'vue';
const navigateTo = () => {
  router.push('/customer/offer-details');
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
            <div class="grid grid-cols-1">
            <div class="grid grid-cols-1 gap-2 relative mt-2">
              <div class="bg-white rounded-3xl p-4">
              <div class="flex justify-between">
                <div class="flex gap-1">
                  <img src="../../../../assets/icons/general/freelancer-1.svg" alt="" class="w-14">
                  <div>
                   <div class="flex gap-2">
                    <div class="flex gap-1">
                      <img src="../../../../assets/icons/general/check.svg" alt="" class="w-4">
                      <p class="text-primary">{{ t('offers.freelancer') }}</p>
                    </div>
                    <div>
                        <span class="text-primary bg-[#F4FBE6] rounded-[20px] px-2 py-1">{{ t('offers.accepted') }}</span>
                    </div>
                   </div>
                   <div class="flex justify-between gap-2">
                    <div class="flex items-center gap-2">
                        <p class="font-bold">سعاد علي</p>
                        <p class="text-primary text-sm">{{ t('offers.active') }}</p>
                    </div>
                    <div>
                        <span class="text-primary bg-[#F4FBE6] rounded-[20px] px-2 py-1">{{ t('offers.customView') }}</span>
                    </div>
                    </div>
                  </div>
                </div>
                <div class="flex items-start gap-1 whitespace-nowrap">
                  <img src="../../../../assets/icons/general/history-colored.svg" alt="">
                  <span class="text-primary text-sm">{{ t('offers.days_ago') }}</span>
                </div>
              </div>
              <div class="flex items-center flex-wrap gap-4 text-sm border-b py-4 border-[#F4F4F4]">
              <div class="flex items-center gap-1">
                <p class="font-bold">#</p>
                <p>( #000625 )</p>
             </div>
              <div class="flex items-center gap-1">
                <img src="../../../../assets/icons/general/coin.svg" alt="">
                <p>{{ t('offers.price') }}</p>
                <p class="font-bold">{{ t('offers.amount_placeholder') }}</p>
                </div>
                <div class="flex items-center gap-1">
                  <img src="../../../../assets/icons/general/stickynote.svg" alt="">
                  <p>{{ t('offers.delivery_time') }}</p>
                  <p>{{ t('offers.delivery_placeholder') }}</p>
                </div>
                <div class="flex items-center gap-1">
                  <img src="../../../../assets/icons/general/check-black.svg" alt="">
                  <p>{{ t('offers.creationDate') }}</p>
                  <p>({{ t('offers.specificDate') }})</p>
                </div>
              </div>
            
              <button @click="navigateTo" class="flex items-center gap-1 text-[#787474] text-sm rounded-[54px] bg-[#303030] bg-opacity-5 p-2 mt-2">
                <img src="../../../../assets/icons/general/eye-gray.svg" alt="">
                {{ t('offers.viewOffer') }}
              </button>
          
              </div>
            </div>
        </div>
        </div>
        <!-- Right Duties -->
        <div class="w-[28%] hidden lg:block overflow-y-scroll" style="scrollbar-width: none; -ms-overflow-style: none;">
            <Duties /> 
        </div>
   </div>
</template>

