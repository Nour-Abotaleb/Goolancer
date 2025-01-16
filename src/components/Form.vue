<template>
    <div class="py-4 px-6 max-w-4xl mx-auto">
      <div class="mb-6">
        <!-- Progress Bar -->
        <div class="flex items-center justify-between">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="flex items-center gap-2"
          >
            <div
              :class="[
                'w-8 h-8 flex items-center justify-center rounded-full border-2',
                currentStep > index ? 'bg-green-500 text-white border-green-500' : 'border-gray-400 text-gray-500',
                currentStep === index ? 'border-blue-500 text-blue-500' : ''
              ]"
            >
              <span v-if="currentStep > index">✓</span>
              <span v-else>{{ index + 1 }}</span>
            </div>
            <div v-if="index < steps.length - 1" class="w-24 h-1 bg-gray-400">
              <div
                :style="{ width: currentStep > index ? '100%' : '0%' }"
                class="h-full bg-green-500 transition-all duration-300"
              ></div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4 text-lg font-semibold">
          {{ steps[currentStep].title }}
        </div>
      </div>
  
      <!-- Form Content -->
      <div class="border p-6 rounded-lg shadow-md">
        <div v-if="currentStep === 0">
          <h3 class="text-xl font-bold mb-4">Step 1: Basic Information</h3>
          <form>
            <div class="mb-4">
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                class="w-full mt-1 p-2 border rounded"
              />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                class="w-full mt-1 p-2 border rounded"
              />
            </div>
          </form>
        </div>
        <div v-if="currentStep === 1">
          <h3 class="text-xl font-bold mb-4">Step 2: Additional Details</h3>
          <form>
            <div class="mb-4">
              <label for="age" class="block text-sm font-medium text-gray-700">Age</label>
              <input
                type="number"
                id="age"
                v-model="formData.age"
                class="w-full mt-1 p-2 border rounded"
              />
            </div>
            <div class="mb-4">
              <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
              <input
                type="text"
                id="country"
                v-model="formData.country"
                class="w-full mt-1 p-2 border rounded"
              />
            </div>
          </form>
        </div>
        <div v-if="currentStep === 2">
          <h3 class="text-xl font-bold mb-4">Step 3: Review & Submit</h3>
          <div>
            <p><strong>Name:</strong> {{ formData.name }}</p>
            <p><strong>Email:</strong> {{ formData.email }}</p>
            <p><strong>Age:</strong> {{ formData.age }}</p>
            <p><strong>Country:</strong> {{ formData.country }}</p>
          </div>
        </div>
      </div>
  
      <!-- Navigation Buttons -->
      <div class="flex justify-between mt-6">
        <button
          @click="prevStep"
          :disabled="currentStep === 0"
          class="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          v-if="currentStep < steps.length - 1"
          @click="nextStep"
          class="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
        <button
          v-else
          @click="submitForm"
          class="bg-green-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  </template>
  <script setup>
  import { ref } from "vue";
  
  const steps = [
    { title: "Step 1: Basic Information" },
    { title: "Step 2: Additional Details" },
    { title: "Step 3: Review & Submit" },
  ];
  
  const currentStep = ref(0);
  
  const formData = ref({
    name: "",
    email: "",
    age: "",
    country: "",
  });
  
  const nextStep = () => {
    if (currentStep.value < steps.length - 1) {
      currentStep.value++;
    }
  };
  
  const prevStep = () => {
    if (currentStep.value > 0) {
      currentStep.value--;
    }
  };
  
  const submitForm = () => {
    console.log("Form Submitted:", formData.value);
    alert("Form Submitted Successfully!");
  };
  </script>
  <style scoped>
  button {
    transition: opacity 0.3s, background-color 0.3s;
  }
  button:disabled {
    cursor: not-allowed;
  }
  </style>
  