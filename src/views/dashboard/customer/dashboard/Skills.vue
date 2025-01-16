<template>
    <div class="py-2">
      <Header header-title="sidebar.postJob" />
    </div>
    <div class="flex justify-between">
      <div class="pt-4 px-6 bg-white form rounded-[20px] lg:w-[70%] w-full">
        <Steps :steps="steps" :currentStep="currentStep" />
        <form @submit.prevent="submitForm">
        <p class="block text-gray-700 font-medium mt-6" for="price"> {{ t('form.price') }}<span class="text-[#EA4545]">*</span></p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div>
              <label class="text-gray-700 font-medium mb-2 flex gap-1" for="price">
                <img src="../../../../assets/icons/general/colored-circle.svg"/>
                <span>{{ t('form.fixed') }}</span>
              </label>
              <input
                id="price"
                v-model="form.fixed"
                type="text"
                :placeholder="t('form.priceExample')"
                class="w-full p-2 border rounded-[20px] text-[#787474] focus:outline-none bg-[#F6F6F6] border-none"
              />
              <p>{{ t('form.minimumPrice') }}</p>
            </div>
            <div>
              <label class="text-gray-700 font-medium mb-2 flex gap-1" for="priceHour">
                <img src="../../../../assets/icons/general/circle.svg"/>
                <span>{{ t('form.priceHour') }}</span>
             </label>
              <input
                id="priceHour"
                v-model="form.hourly"
                :placeholder="t('form.priceHourPlaceholder')"
                class="w-full p-2 border outline-none text-[#787474] rounded-[20px] bg-[#F6F6F6] border-none"
              />
            </div>
          </div>
          <div class="mt-4">
                <label class="block text-gray-700 font-medium mb-2" for="requiredSkills">{{ t('form.requiredSkills') }}</label>
                <div class="border border-[#94D401] rounded-[20px] h-24 p-4 bg-white">
                  <div class="flex flex-wrap gap-2 text-sm">
                    <span 
                      v-for="(skill, index) in selectedSkills" 
                      :key="index" 
                      class="bg-[#F4FBE6] rounded-[20px] text-[#94D401] p-1 flex items-center gap-1">
                      <img
                        src="../../../../assets/icons/general/close-circle.svg"
                        alt="Remove"
                        class="cursor-pointer"
                        @click="removeSkill(index)"
                      />
                      <span>{{ skill }}</span>
                    </span>
                  </div>

                  <textarea
                    id="requiredSkills"
                    v-model="form.requiredSkills"
                    rows="3"
                    class="hidden"
                    readonly
                  ></textarea>
                </div>

            <!-- Skill Choices (Outside Border) -->
            <div class="mt-4 grid lg:grid-cols-7 grid-cols-4 gap-2">
              <p
                v-for="skill in ['فيجما', 'Photoshop', 'Illustrator', 'JAVA', 'Laravel', 'PHP', 'CSS', 'HTML']"
                :key="skill"
                class="flex items-center justify-center gap-1 rounded-[20px] cursor-pointer"
                @click="addSkill(skill)"
                :class="{
                  'bg-[#F4FBE6] text-[#94D401]': selectedSkills.includes(skill),
                  'bg-[#DFDDDD] text-[#525151]': !selectedSkills.includes(skill),
                }"
              >
                <img :src="selectedSkills.includes(skill) ? plusColored : plus" alt="Add Skill" />
                <span>{{ skill }}</span>
              </p>
            </div>
          </div>
          <div class="flex justify-end mt-4 gap-6">
            <button
              type="submit"
              @click="navigateToPrev"
              class="bg-black text-white rounded-[20px] focus:outline-none py-1 ps-1 pe-2">
              <img src="../../../../assets/icons/general/arrow-right.svg" alt="" class="inline w-6" :class="{'rotate-180': locale === 'en'}"/>
              {{ t('form.previous') }}
            </button>
            <button
              type="submit"
              @click="nextStep"
              class="bg-black text-white rounded-[20px] focus:outline-none py-1 pe-1 ps-2">
              {{ t('form.next') }}
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
  import plus from '../../../../assets/icons/general/plus.svg';
  import plusColored from '../../../../assets/icons/general/plus-colored.svg';
  import Steps from '@/views/components/Steps.vue';

  const { t, locale } = useI18n();

  const form = reactive({
  
    fixed: '',
    hourly: '',
    requiredSkills: '',
  });

  const steps = reactive([
    { title: 'steps.step1', completed: true },
    { title: 'steps.step2', completed: false },
    { title: 'steps.step3', completed: false },
    ]);

  const currentStep = ref(1);

  const submitForm = () => {
    console.log('Form Data:', form);
  };
  
  const validateForm = () => {
    return form.fixed !== '' || form.hourly !== '' && form.requiredSkills !== '';
  }

  const navigateToPrev = () => {
    router.push('/customer/post-job')
  }
//   const navigateToNext = () => {
//     steps[1].completed = true;
//     router.push('/customer/supervision')
//   }

const nextStep = () => {
    if(!validateForm()) {
      alert('Please fill required fields');
      return;
    }
    steps[currentStep.value - 1].completed = true;
    if(currentStep.value < steps.length) {
      currentStep.value++;
    } 
    navigateToNext();
    
  }
  const navigateToNext = () => {
    router.push('/customer/supervision');
  }
  const selectedSkills = ref([]);

  function addSkill(skill) {
    if(!selectedSkills.value.includes(skill)) {
        selectedSkills.value.push(skill);
        updateRequiredSkills();
    }
  }
  function removeSkill(index) {
    selectedSkills.value.splice(index, 1);
    updateRequiredSkills();
  }

  function updateRequiredSkills() {
    form.requiredSkills = selectedSkills.value.join(', ');
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
    textarea {
        resize: none;
    }
  </style>
  