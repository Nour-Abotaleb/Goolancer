<script setup>
import { useI18n } from "vue-i18n";
import { ref } from 'vue';
import freelancer1 from "../../../../assets/icons/general/freelancer-1.svg"; 
import freelancer2 from "../../../../assets/icons/general/freelancer-2.svg"; 
const { t, locale } = useI18n();

const activePopup = ref(null);

const togglePopup = (id) => {
  activePopup.value = activePopup.value === id ? null : id;
};

const freelancers = [
  { id: 1, name: "سعاد علي", completedOrders: 24, rating: "4.00", image: freelancer1},
  { id: 2, name: "أحمد علي", completedOrders: 30, rating: "4.50", image: freelancer2},
];
const showRejectPopup = ref(false);
const showSheduleInterviewPopup = ref(false);

const openRejectPopup = () => {
    showRejectPopup.value = true;
};
const closeRejectPopup = () => {
    showRejectPopup.value = false;
}

const openSchedulePopup = () => {
    showSheduleInterviewPopup.value = true;
};
const closeSchedulePopup = () => {
    showSheduleInterviewPopup.value = false;
}
</script>

<template>
    <div class="grid lg:grid-cols-2 gap-4 relative">
      <div
        v-for="(freelancer, index) in freelancers"
        :key="freelancer.id"
        class="bg-white rounded-3xl p-4 relative"
      >
        <div class="flex justify-between items-start">
    
          <button @click="togglePopup(freelancer.id)" class="flex-1">
            <img src="../../../../assets/icons/general/dots.svg" alt="" class="w-[3px]">
          </button>
          <div class="flex flex-col items-center space-y-1">
            <img :src="freelancer.image" alt="" class="w-[50px]">
            <div class="flex gap-1">
              <img src="../../../assets/icons/general/check.svg" alt="" class="w-[14px]">
              <span class="text-primary text-sm">{{ t('offers.freelancer') }}</span>
            </div>
            <div class="flex gap-1 text-sm">
              <span class="font-bold">{{ freelancer.name }}</span>
              <span class="text-primary">{{ t('offers.active') }}</span>
            </div>
            <div class="flex items-center gap-4">
              <div class="flex gap-1 py-2">
                <span>{{ freelancer.completedOrders }}</span>
                <p>{{ t('offers.completed_orders') }}</p>
              </div>
              <div class="flex gap-1">
                <img src="../../../assets/icons/general/star.svg" alt="">
                <span>( {{ freelancer.rating }} ) </span>
              </div>
            </div>
          </div>
       
          <div class="flex flex-1 items-center whitespace-nowrap">
            <img src="../../../assets/icons/general/history-colored.svg" alt="">
            <span class="text-primary text-sm">{{ t('offers.days_ago') }}</span>
          </div>
        </div>
        <div class="flex justify-between text-sm">
          <div class="flex gap-1">
            <img src="../../../assets/icons/general/coin.svg" alt="">
            <p>{{ t('offers.offered_amount') }}</p>
            <!-- <p>{{ t('offers.amount_placeholder') }}</p> -->
          </div>
          <div class="flex gap-1">
            <img src="../../../assets/icons/general/stickynote.svg" alt="">
            <p>{{ t('offers.delivery_time') }}</p>
            <p>{{ t('offers.delivery_placeholder') }}</p>
          </div>
        </div>
  
        <!-- Popup -->
        <div
          v-if="activePopup === freelancer.id"
          class="bg-white shadow-sm absolute top-8 mt-2 rounded-xl space-y-2 w-[60%] px-2 z-50"
        >
          <div class="border-b border-black border-opacity-10 space-y-3 py-4 text-sm">
            <button class="flex items-center gap-1">
              <img src="../../../assets/icons/general/view-offer.svg" alt="">
              <p>{{ t('offers.view_offer') }}</p>
            </button>
            <button class="flex items-center gap-1" @click="openSchedulePopup">
              <img src="../../../assets/icons/general/interview.svg" alt="">
              <p>{{ t('offers.schedule_interview') }}</p>
            </button>
            <button class="flex items-center gap-1">
              <img src="../../../assets/icons/general/add-to-menu.svg" alt="">
              <p>{{ t('offers.add_to_shortlist') }}</p>
            </button>
          </div>
          <div @click="openRejectPopup" class="flex items-center gap-1 cursor-pointer px-4 pb-2">
            <img src="../../../assets/icons/general/colored-delete.svg" alt="">
            <button class="text-[#E72020] text-sm lg:text-md py-1">
              {{ t('offers.reject') }}
            </button>
          </div>
        </div>
      </div>

        <!-- Confirm Rejection Popup -->
        <div v-if="showRejectPopup" class="overlay fixed inset-0 bg-black bg-opacity-80 z-50"></div>
             <div v-if="showRejectPopup" class="popup fixed top-1/2 left-1/2 transform space-y-4 -translate-x-1/2 -translate-y-1/2 z-50 mx-auto bg-white rounded-[20px] w-[30%]">
                <div class="bg-[#E2ECC3] rounded-t-[20px] p-2">
                    <p class="font-bold text-center">{{ t('confirmation.reject_prompt') }}</p>
                </div>
                <div class="pb-6">
                    <p class="text-center text-sm">{{ t('confirmation.reject_warning') }}</p>
                    <div class="mt-4 flex justify-center items-center gap-4 text-sm">
                        <div class="bg-black text-white rounded-[100px]">
                            <button @click="closeRejectPopup" class="w-full px-6 py-1.5">{{ t('confirmation.confirm_reject') }}</button>
                        </div>
                        <div class="border border-black rounded-[100px]">
                            <button @click="closeRejectPopup" class="w-full px-10 py-1.5">{{ t('delete_popup.cancel') }}</button>
                        </div>
                    </div>
                </div>
            </div>
        <!-- Schedule Interview Popup -->
        <div v-if="showSheduleInterviewPopup" class="overlay fixed inset-0 bg-black bg-opacity-80 z-50"></div>
        <div v-if="showSheduleInterviewPopup" class="popup fixed top-1/2 left-1/2 transform space-y-4 -translate-x-1/2 -translate-y-1/2 z-50 mx-auto bg-white rounded-[20px] w-[30%]">
            <div class="bg-[#E2ECC3] rounded-t-[20px] p-2">
                <p class="font-bold text-center">{{ t('offers.schedule_interview') }}</p>
            </div>
            <div class="pb-6 px-4">
                <p>#00059</p>
                <p class="font-bold text-sm">{{ t('jobs.job_title') }}</p>
                <div class="mt-4">
                    <label>{{ t('messages.write_message') }}</label>
                    <div class="border border-primary rounded-[20px] h-24 my-2"></div>
                </div>
                <div class="mt-4 flex justify-center items-center gap-4 text-sm">
                    <div class="bg-black text-white rounded-[100px]">
                        <button @click="closeSchedulePopup" class="w-full px-6 py-1.5">{{ t('messages.send_message') }}</button>
                    </div>
                    <div class="border border-black rounded-[100px]">
                        <button @click="closeSchedulePopup" class="w-full px-10 py-1.5">{{ t('delete_popup.cancel') }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
<style scoped>

</style>