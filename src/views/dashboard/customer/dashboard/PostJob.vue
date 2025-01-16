<template>
    <div class="py-2">
      <Header header-title="sidebar.postJob" />
    </div>
    <div class="flex justify-between">
      <div class="pt-4 px-6 bg-white form rounded-[20px] lg:w-[70%] w-full">
        <Steps :steps="steps" :currentStep="currentStep" />
        <form @submit.prevent="submitForm">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div>
              <label class="block text-gray-700 font-medium mb-2" for="jobTitle"> {{ t('form.jobTitle') }}<span class="text-[#EA4545]">*</span></label>
              <input
                id="jobTitle"
                v-model="form.jobTitle"
                type="text"
                :placeholder="t('form.jobTitlePlaceholder')"
                class="w-full p-2 border rounded-[20px] text-[#787474] focus:outline-none bg-[#F6F6F6] border-none"
              />
            </div>

            <div>
              <label class="block text-gray-700 font-medium mb-2" for="category">{{ t('form.category') }}<span class="text-[#EA4545]">*</span></label>
              <select
                id="category"
                v-model="form.category"
                class="w-full p-2 border rounded-[20px] text-[#787474] focus:outline-none bg-[#F6F6F6] border-none"
              >
                <option disabled value="">{{ t('form.category') }}</option>
                <option>تصميم جرافيكي</option>
                <option>تطوير مواقع</option>
                <option>كتابة المحتوى</option>
              </select>
            </div>
  
            <div>
              <label class="block text-gray-700 font-medium mb-2" for="subcategory">{{ t('form.subcategory') }}<span class="text-[#EA4545]">*</span></label>
              <select
                id="subcategory"
                v-model="form.subcategory"
                class="w-full p-2 border rounded-[20px] text-[#787474] focus:outline-none bg-[#F6F6F6] border-none"
              >
                <option disabled value="">{{ t('form.subcategory') }}</option>
                <option>تصميم واجهات المستخدم</option>
                <option>رسومات ثنائية الأبعاد</option>
                <option>تحرير الفيديو</option>
              </select>
            </div>
            <div>
              <label class="block text-gray-700 font-medium mb-2" for="subcategory">{{ t('form.service') }}<span class="text-[#EA4545]">*</span></label>
              <select
                id="subcategory"
                v-model="form.subcategory"
                class="w-full p-2 border rounded-[20px] text-[#787474] focus:outline-none bg-[#F6F6F6] border-none"
              >
                <option disabled value="">{{ t('form.service') }}</option>
                <option>تصميم واجهات المستخدم</option>
                <option>رسومات ثنائية الأبعاد</option>
                <option>تحرير الفيديو</option>
              </select>
            </div>
  
            <div>
              <label class="block text-gray-700 font-medium mb-2" for="experienceLevel">{{ t('form.experienceLevel') }}<span class="text-[#EA4545]">*</span></label>
              <select
                id="experienceLevel"
                v-model="form.experienceLevel"
                class="w-full p-2 border rounded-[20px] text-[#787474] focus:outline-none bg-[#F6F6F6] border-none"
              >
                <option disabled value="">{{ t('form.experienceLevel') }}</option>
                <option>مبتدئ</option>
                <option>متوسط</option>
                <option>خبير</option>
              </select>
            </div>
  
            <div>
              <label class="block text-gray-700 font-medium mb-2" for="jobDuration">{{ t('form.jobDuration') }}<span class="text-[#EA4545]">*</span></label>
              <select
                id="jobDuration"
                v-model="form.jobDuration"
                class="w-full p-2 border outline-none text-[#787474] rounded-[20px] bg-[#F6F6F6] border-none"
              >
                <option disabled value="">{{ t('form.chooseJobDuration') }}</option>
                <option>يوم</option>
                <option>أسبوع</option>
                <option>شهر</option>
              </select>
            </div>
          </div>
  
          <div class="mt-4">
            <label class="block text-gray-700 font-medium mb-2" for="jobDescription">{{ t('form.jobDescription') }}</label>
            <textarea
              id="jobDescription"
              v-model="form.jobDescription"
              rows="3"
              placeholder=""
              class="w-full p-2 border rounded-[20px] border-[#94D401] focus:outline-none"
            ></textarea>
          </div>
  
          <div class="flex justify-end mt-4">
            <button
              type="submit"
              @click="nextStep"
              class="bg-black text-white rounded-[20px] focus:outline-none py-1 pe-1 ps-2">
              {{ t('form.next') }}
              <img src="../../../../assets/icons/general/arrow-left.svg" alt="" class="inline w-6" :class="{'rotate-90': locale === 'en'}"/>
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
  import Steps from '@/views/components/Steps.vue';

  const { t, locale } = useI18n();
  const currentStep = ref(0);

  const steps = reactive([
  { title: 'steps.step1', completed: false },
  { title: 'steps.step2', completed: false },
  { title: 'steps.step3', completed: false },
]);


  const form = reactive({
    jobTitle: '',
    category: '',
    subcategory: '',
    experienceLevel: '',
    jobDuration: '',
    jobDescription: '',
  });
  
  const submitForm = () => {
    console.log('Form Data:', form);
  };

  const validateForm = () => {
    return form.jobTitle !== '' && form.category !== '' && form.subcategory !== '' && form.service !== '' && form.experienceLevel !== '' && form.jobDuration !== '';
  }

  const nextStep = () => {
    if(!validateForm()) {
      alert('Please fill required fields');
      return;
    }
    steps[currentStep.value].completed = true;
    if(currentStep.value < steps.length - 1) {
      currentStep.value++;
    } 
    navigateTo();
    
  }
  const navigateTo = () => {
    // steps[0].completed = true;  
    router.push('/customer/add-skills');
  }
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
  </style>
  