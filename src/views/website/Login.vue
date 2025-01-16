<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const form = reactive({
  username: "",
  password: "",
});

const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value; 
};

const navigateTo = () => {
  router.push("/customer");
};
</script>

<template>
  <div class="mt-12 mb-12">
    <div class="w-[80%] mx-auto gap-10 flex flex-wrap lg:flex-nowrap justify-between items-center">

      <!-- Right Section -->
      <div class="w-full lg:w-1/2 text-right max-w-md">
        <h1 class="text-3xl font-bold text-gray-800 mb-4 text-center relative">
           <span>مرحباً بعودتك  <img src="../../assets/images/login/waving.png" class="inline" width="35" alt=""/>   
           </span>
        </h1>
        <p dir="rtl" class="text-sm text-gray-600 mb-8 text-center">
            ادخل بياناتك لمتابعة اخر تطورات وظائفك واجد الفرص المميزة.
        </p>
      
        <form @submit.prevent="" class="space-y-6 mx-auto">
          <div class="flex flex-col text-right">
            <label for="username" class="mb-1 text-gray-600"> اسم المستخدم أو البريد الإلكتروني</label>
            <input
              id="username"
              type="text"
              v-model="form.username"
              class="border-b focus:border-[#94D401] border-gray-300 focus:outline-none py-2">
          </div>

          <div class="flex flex-col text-right relative">
            <label for="password" class="mb-1 text-gray-600">كلمة المرور</label>
            <!-- Eye icon with dynamic classes -->
            <i
              :class="['pi', showPassword ? 'pi-eye-slash' : 'pi-eye', 'text-left', 'absolute', 'bottom-4', 'cursor-pointer']"
              @click="togglePasswordVisibility"
            ></i>
            <input
              id="password"
              :type="showPassword ? 'text' : 'password'"
              v-model="form.password"
              class="border-b focus:border-[#94D401] border-gray-300 focus:outline-none py-2">
          </div>
          <!-- Remember Me -->
          <div class="flex justify-between items-center space-x-2 space-x-reverse text-right" dir="rtl">
              <div>
                <input
                  id="agreeToTerms"
                  type="checkbox"
                  v-model="form.agreeToTerms"
                  class="h-4 w-4 border-gray-300 rounded"/> 
                <span> تذكرني؟</span>
              </div>
              <span class="forget-password">نسيت كلمة المرور؟</span>
          </div>

          <button
            type="submit"
            @click="navigateTo"
            class="w-full text-white py-3 rounded-full"
          >
            تسجيل الدخول
          </button>
        </form>

        <p class="mt-4 text-center text-gray-600">
          ليس لديك حساب؟ 
          <router-link to="/register" class="link underline">إنشاء حساب جديد</router-link>
        </p>
      </div>

      <!-- Left Section -->
      <div class="hidden lg:block w-full lg:w-1/2">
        <img src="../../assets/images/login/login.svg" alt="Login" class="w-[95%]">
      </div>
    </div>
  </div>
</template>

<style scoped>
label {
    color: #D0D0DC;
}
button {
    background-color: #222222;
}
.link, .forget-password {
    color: #94D401;
}
</style>