<template>
    <div class="py-2">
      <Header header-title="profile.change_password" />
    </div>
    <div class="flex justify-between">
      <div class="pt-4 px-6 bg-white form rounded-[20px] lg:w-[70%] w-full">
        <div class="flex gap-2">
            <div class="relative">
                <img src="../../../../assets/images/customer_dashboard/customer.svg" alt="" class="w-16">
                <div class="absolute top-0 bg-[#F9F9F9] rounded-full border border-[#E3E0E7] w-6 h-6 flex items-center justify-center">
                    <img src="../../../../assets/icons/general/edit-profile.svg" alt="" class="w-4">
                </div>
            </div>
            <div>
                <p>{{ t('user_name') }}</p>
                <p class="text-[#787474]">tclient@gmail.com</p>
            </div>
        </div>
        <div class="flex justify-end">
        <img src="../../../../assets/icons/general/edit-profile.svg" alt="">
       </div>
        <form @submit.prevent="submitForm">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div>
              <label class="block text-[#615E5E] font-medium mb-2" for="jobTitle"> {{ t('profile.first_name') }}</label>
              <input
                id="jobTitle"
                v-model="form.first_name"
                type="text"
                class="w-full p-2 border rounded-[20px] text-[#787474] focus:outline-none bg-[#F6F6F6] border-none"
              />
          </div>
            <div>
              <label class="block text-[#615E5E]  font-medium mb-2" for="jobTitle"> {{ t('profile.last_name') }}</label>
              <input
                id="jobTitle"
                v-model="form.last_name"
                type="text"
                class="w-full p-2 border rounded-[20px] text-[#787474] focus:outline-none bg-[#F6F6F6] border-none"
              />
          </div>
        </div>
            <div>
              <label class="block text-[#615E5E]  font-medium mb-2" for="jobTitle"> {{ t('profile.email') }}</label>
              <input
                id="jobTitle"
                v-model="form.email"
                type="text"
                class="w-full p-2 border rounded-[20px] text-[#787474] focus:outline-none bg-[#F6F6F6] border-none"
              />
            </div>
            <div>
              <label class="block text-[#615E5E]  font-medium mb-2" for="country">{{ t('profile.country') }}</label>
              <select
                id="country"
                v-model="form.country"
                class="w-full p-2 border rounded-[20px] text-[#787474] focus:outline-none bg-[#F6F6F6] border-none"
              >
                <option disabled value="">{{ t('profile.country') }}</option>
                <option>مبتدئ</option>
                <option>متوسط</option>
                <option>خبير</option>
              </select>
            </div>
  
            <div>
              <label class="block text-[#615E5E]  font-medium mb-2" for="state">{{ t('profile.state') }}</label>
              <select
                id="state"
                v-model="form.state"
                class="w-full p-2 border outline-none text-[#787474] rounded-[20px] bg-[#F6F6F6] border-none"
              >
                <option disabled value="">{{ t('profile.state') }}</option>
                <option>يوم</option>
                <option>أسبوع</option>
                <option>شهر</option>
              </select>
            </div>
            <div>
              <label class="block text-[#615E5E] font-medium mb-2" for="state">{{ t('profile.state') }}</label>
              <select
                id="state"
                v-model="form.state"
                class="w-full p-2 border outline-none text-[#787474] rounded-[20px] bg-[#F6F6F6] border-none"
              >
                <option disabled value="">{{ t('profile.state') }}</option>
                <option>يوم</option>
                <option>أسبوع</option>
                <option>شهر</option>
              </select>
            </div>
  
          <div class="flex justify-end mt-4">
            <button
              type="submit"
              @click="nextStep"
              class="bg-black text-white rounded-[20px] focus:outline-none py-1 pe-1 ps-2"
            >
              {{ t('profile.save_changes') }}
              <img src="../../../../assets/icons/general/arrow-left.svg" alt="" class="inline w-6" :class="{'rotate-180': locale === 'en'}"/>
            </button>
          </div>
        </form>
      </div>
  
      <div class="w-[28%] hidden lg:block overflow-y-scroll" style="scrollbar-width: none; -ms-overflow-style: none;">
        <Duties />
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue';
  import Duties from '@/components/dashboard/Duties.vue';
  import Header from '@/components/Header.vue';
  import { useI18n } from "vue-i18n";
  import router from '@/router';
  import eyeIcon from '../../../../assets/icons/general/eye-black.svg';
  import eyeSlashIcon from '../../../../assets/icons/general/eye-slash.svg';
  
  const { t, locale } = useI18n();
  
  const form = reactive({
    first_name: '',
    last_name: '',
    email: '',
    country: '',
    state: '',
    city: '',
  });
  
  const showPassword = reactive({
    current: false,
    new: false,
    confirm: false,
  });
  
  const togglePassword = (field) => {
    showPassword[field] = !showPassword[field];
  };
  
  const submitForm = () => {
    console.log('Form Data:', form);
  };
  </script>
  
  <style scoped>
  * {
    box-sizing: border-box;
  }
  
  .form {
    flex-shrink: 0; 
    height: auto; 
    max-height: 100vh; 
    overflow-y: auto; 
  }
  
  input {
    padding-left: 2.5rem; 
  }
  </style>
  