<template>
    <div class="py-2">
      <Header header-title="profile.change_password" />
    </div>
    <div class="flex justify-between">
      <div class="pt-4 px-6 bg-white form rounded-[20px] lg:w-[70%] w-full">
        <form @submit.prevent="submitForm">
          <div class="mt-2 space-y-8">
            <div>
              <label class="block text-gray-700 font-medium mb-2" for="jobTitle"> 
                {{ t('profile.current_password') }}
              </label>
              <div class="relative">
                <img
                  @click="togglePassword('current')"
                  :src="showPassword.current ? eyeSlashIcon : eyeIcon"
                  alt="eye icon"
                  class="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                />
                <input
                  v-model="form.current_password"
                  :type="showPassword.current ? 'text' : 'password'"
                  :placeholder="t('profile.enter_current_password')"
                  class="w-full pl-12 p-2 border rounded-[20px] text-[#787474] focus:outline-none bg-[#F6F6F6] border-none"
                />
              </div>
            </div>
            
            <div>
              <label class="block text-gray-700 font-medium mb-2" for="jobTitle"> 
                {{ t('profile.new_password') }} 
              </label>
              <div class="relative">
                <img
                  @click="togglePassword('new')"
                  :src="showPassword.new ? eyeSlashIcon : eyeIcon"
                  alt="eye icon"
                  class="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                />
                <input
                  v-model="form.new_password"
                  :type="showPassword.new ? 'text' : 'password'"
                  :placeholder="t('profile.enter_new_password')"
                  class="w-full pl-12 p-2 border rounded-[20px] text-[#787474] focus:outline-none bg-[#F6F6F6] border-none"
                />
              </div>
            </div>
  
            <div>
              <label class="block text-gray-700 font-medium mb-2" for="jobTitle"> 
                {{ t('profile.confirm_new_password') }} 
              </label>
              <div class="relative">
                <img
                  @click="togglePassword('confirm')"
                  :src="showPassword.confirm ? eyeSlashIcon : eyeIcon"
                  alt="eye icon"
                  class="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                />
                <input
                  v-model="form.confirmPassword"
                  :type="showPassword.confirm ? 'text' : 'password'"
                  :placeholder="t('profile.enter_confirm_new_password')"
                  class="w-full pl-12 p-2 border rounded-[20px] text-[#787474] focus:outline-none bg-[#F6F6F6] border-none"
                />
              </div>
            </div>
          </div>
  
          <div class="flex justify-end mt-4">
            <button
              type="submit"
              @click="nextStep"
              class="bg-black text-white rounded-[20px] focus:outline-none py-1 pe-1 ps-2"
            >
              {{ t('profile.change_password') }}
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
    current_password: '',
    new_password: '',
    confirmPassword: '',
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
    max-height: 65vh; 
    overflow-y: auto; 
  }
  
  input {
    padding-left: 2.5rem; 
  }
  </style>
  