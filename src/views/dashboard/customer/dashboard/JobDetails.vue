<script setup>
import Header from '@/components/Header.vue';
import Duties from '@/components/dashboard/Duties.vue';
import MyJobs from './MyJobs.vue';
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
import router from '@/router';
import { ref } from 'vue';
import Offers from './Offers.vue';

const showPopup = ref(false);
const openPopup = () => {
    showPopup.value = true;
};
const closePopup = () => {
    showPopup.value = false;
}

const navigateTo = () => {
    router.push('/customer/job-details');
}
defineProps({
    isView: {
        type: Boolean,
        default: false,
    }
})
</script>

<template>
     <!-- Header -->
    <div class="py-2">
         <Header header-title="sidebar.myJobs"/>
    </div>
    <!-- Centered Content -->
   <div class="flex justify-between mt-2">
        <div class="lg:w-[70%] w-[95%] mx-auto lg:mx-0" >         
            <div class="grid grid-cols-1 gap-4 mt-4">
                <div class="pt-2 px-6 bg-white form rounded-[20px] w-full">
                <div>
                    <div class="bg-white flex justify-between">
                        <div class="flex gap-2">
                            <p>{{ t('jobs.open') }}</p>
                            <div class="flex gap-1 items-center">
                                <img src="../../../../assets/icons/general/history-colored.svg" alt="">
                                <p class="text-primary text-sm">{{ t('jobs.posted_since') }}</p>
                            </div>
                        </div>
                        <div>
                            <p class="font-bold">$6000 /{{ t('jobs.monthly') }}</p>
                        </div>
                    </div>
                    <div>
                        <p class="font-bold">
                            {{ t('jobs.job_title') }} 
                        </p>
                        <p class="text-[14px] my-2">{{ t('jobs.job_description') }}</p>
                        <div class="flex gap-6 border-b border-b-[#F4F4F4] p-2 whitespace-nowrap">
                            <div class="flex items-center gap-1">
                                <img src="../../../../assets/icons/general/level.svg" alt="">
                                <p class="text-sm">{{ t('jobs.level') }}</p>
                            </div>
                            <div class="flex items-center gap-1">
                                <span class="bg-[#B7E255] w-2 h-2 rounded-full"></span>
                                <div class="flex gap-1">
                                    <img src="../../../../assets/icons/general/clock.svg" alt="">
                                    <p class="text-sm">{{ t('jobs.full_time') }}</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-1">
                                <span class="bg-[#B7E255] w-2 h-2 rounded-full"></span>
                                <div class="flex gap-1">
                                    <img src="../../../../assets/icons/general/policy.svg" alt="">
                                <p class="text-sm">{{ t('jobs.submissions') }}</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-1">
                                <span class="bg-[#B7E255] w-2 h-2 rounded-full"></span>
                                <div class="flex gap-1">
                                    <img src="../../../../assets/icons/general/experience.svg" alt="">
                                    <p class="text-sm">{{ t('jobs.experience_years') }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between mt-4 pb-2">
                            <div class="flex gap-2">
                                <button @click="navigateTo" class="flex gap-1 bg-[#303030] bg-opacity-5 rounded-[54px] p-2 text-sm text-[#787474]">
                                    <img src="../../../../assets/icons/general/edit-gray.svg" alt="">
                                    {{ t('jobs.edit_job') }}
                                </button>
                            </div>
                            <div class="flex items-center gap-1 bg-[#FFF6F6] rounded-[54px] cursor-pointer px-4" @click="openPopup">
                                <img src="../../../../assets/icons/general/colored-delete.svg" alt="">
                                <div class="">
                                     <button class="text-[#E72020] text-sm lg:text-md py-1">{{ t('jobs.delete_job') }}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div class="flex flex-wrap lg:flex-row gap-2 items-center">
                <div class="bg-black text-sm flex items-center py-2 justify-center text-center rounded-[54px] text-white col-span-1">
                    <button class="whitespace-nowrap px-2">{{ t('proposals_submitted') }}</button>
                </div>          
                <div class="bg-white text-sm flex items-center py-2 justify-center text-center rounded-[54px] text-black col-span-1">
                    <button class="whitespace-nowrap px-2">{{ t('hired') }}</button>
                </div>          
                <div class="bg-white text-sm flex items-center py-2 justify-center text-center rounded-[54px] text-black col-span-1">
                    <button class="whitespace-nowrap px-2">{{ t('shortlisted') }}</button>
                </div>                  
                <div class="bg-white text-sm flex items-center py-2 justify-center text-center rounded-[54px] text-black col-span-1">
                    <button class="whitespace-nowrap px-2">{{ t('interviews') }}</button>
                </div>  
                </div>
                <Offers />
            </div>
            <!-- Confirm Delete Popup -->
             <div v-if="showPopup" class="overlay fixed inset-0 bg-black bg-opacity-80 z-50"></div>
            <div v-if="showPopup" class="popup fixed top-1/2 left-1/2 transform space-y-4 -translate-x-1/2 -translate-y-1/2 z-50 mx-auto bg-white rounded-[20px] w-[30%]">
                <div class="bg-[#E2ECC3] rounded-t-[20px] p-2">
                    <p class="font-bold text-center">{{ t('delete_popup.confirm_close_job') }}</p>
                </div>
                <div class="pb-6">
                    <p class="text-center text-sm">{{ t('delete_popup.close_job_warning') }}</p>
                    <div class="mt-4 flex justify-center items-center gap-4 text-sm">
                        <div class="bg-black text-white rounded-[100px]">
                            <button @click="closePopup" class="w-full px-6 py-1.5">{{ t('delete_popup.yes_close_it') }}</button>
                        </div>
                        <div class="border border-black rounded-[100px]">
                            <button @click="closePopup" class="w-full px-10 py-1.5">{{ t('delete_popup.cancel') }}</button>
                        </div>
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

