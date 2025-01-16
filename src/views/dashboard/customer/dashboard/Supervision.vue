<template>
    <div class="py-2">
      <Header header-title="sidebar.postJob" />
    </div>
    <div class="flex justify-between">
      <div class="pt-4 px-6 bg-white form rounded-[20px] lg:w-[70%] w-full">
        <Steps :steps="steps" :currentStep="currentStep" />
        <form @submit.prevent="submitForm">
          <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mt-6 whitespace-nowrap">
            <div
              v-for="(choice, index) in choices"
              :key="index"
              class="p-4 rounded-[20px] cursor-pointer"
              :class="{
                'border border-primary bg-white': selectedChoices.includes(index),
                'bg-[#F6F6F6]': !selectedChoices.includes(index),
              }"
              @click="toggleChoice(index)"
            >
              <div class="flex justify-between items-center">
                <div class="flex gap-2">
                  <img
                    :src="selectedChoices.includes(index) ? choice.imgActive : choice.imgInactive"
                    alt=""
                  />
                  <p>{{ t(`choices.${choice.key}.title`) }}</p>
                </div>
                <div class="bg-black text-sm text-white rounded-[22px] px-2 py-0.5">
                  <p>{{ t(`choices.${choice.key}.price`) }}</p>
                </div>
              </div>
              <p class="text-sm mt-4 whitespace-pre-wrap">{{ t(`choices.${choice.key}.description`) }}</p>
            </div>
          </div>
          <div class="flex justify-end mt-4 gap-6">
            <button
              type="submit"
              class="bg-black text-white rounded-[20px] focus:outline-none py-1 pe-1 ps-2"
            >
              {{ t('form.post') }}
              <img src="../../../../assets/icons/general/arrow-left.svg" alt="" class="inline w-6" :class="{'rotate-180': locale === 'en'}" />
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
  import { reactive, ref } from "vue";
  import Duties from "@/components/dashboard/Duties.vue";
  import Header from "@/components/Header.vue";
  import { useI18n } from "vue-i18n";
  import circle from "../../../../assets/icons/general/circle.svg";
  import circleColored from "../../../../assets/icons/general/colored-circle.svg";
  import Steps from "@/views/components/Steps.vue";
  
  const { t, locale } = useI18n();

  const form = reactive({
    price: "",
    priceHour: "",
    requiredSkills: "",
  });

  const steps = reactive([
    { title: 'steps.step1', completed: true },
    { title: 'steps.step2', completed: false },
    { title: 'steps.step3', completed: false },
    ]);

  const currentStep = ref(2);

  const choices = [
  {
    key: "designQuality",
    imgActive: circleColored,
    imgInactive: circle,
  },
  {
    key: "customerService",
    imgActive: circleColored,
    imgInactive: circle,
  },
  {
    key: "digitalMarketing",
    imgActive: circleColored,
    imgInactive: circle,
  },
  {
    key: "digitalMarketing",
    imgActive: circleColored,
    imgInactive: circle,
  },
  {
    key: "digitalMarketing",
    imgActive: circleColored,
    imgInactive: circle,
  },
  {
    key: "digitalMarketing",
    imgActive: circleColored,
    imgInactive: circle,
  },
  {
    key: "digitalMarketing",
    imgActive: circleColored,
    imgInactive: circle,
  },
  {
    key: "digitalMarketing",
    imgActive: circleColored,
    imgInactive: circle,
  },
];


  const selectedChoices = ref([]);
  
  const toggleChoice = (index) => {
    if (selectedChoices.value.includes(index)) {
      selectedChoices.value = selectedChoices.value.filter((i) => i !== index);
    } else {
      selectedChoices.value.push(index);
    }
    if (selectedChoices.value.length > 0) {
    steps[2].completed = true; 
    }
  };
  
  const submitForm = () => {
    console.log("Selected Choices:", selectedChoices.value);
  };
  </script>
  
  <style scoped>
  * {
    box-sizing: border-box;
  }
  .form {
    flex-shrink: 0;
    height: auto;
  }
  textarea {
    resize: none;
  }
  </style>
  