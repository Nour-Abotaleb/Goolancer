<script setup>
import { reactive, ref } from "vue";

const form = reactive({
  name: "",
  username: "",
  email: "",
  phoneCode: "+20",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  agreeToTerms: false,
});

const isFreelancer = ref(true);
const showPassword = ref(false);
const showConfirmPassword = ref(false);

const selectUserType = (type) => {
  isFreelancer.value = type === "freelancer";
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const toggleConfirmPasswordVisibility = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};
</script>
<template>
  <div class="mt-12 mb-20">
    <div class="w-[80%] mx-auto flex flex-wrap lg:flex-nowrap gap-10">
      <!-- Right Section -->
      <div class="flex-1.5 p-4 text-right">
        <h1 class="text-3xl font-bold text-[#333] text-center mb-2">كن جزءًا من عائلة جوولانسر</h1>
        <p dir="rtl" class="msg text-gray-500 text-center mb-2">
          انضم إلى عائلة جوولانسر واكتشف العديد من الفرص المميزة لعملك وشركتك.
        </p>
        <div class="relative bg-[#222222] rounded-full whitespace-nowrap">
          <!-- Slider -->
          <div
            class="absolute inset-0 bg-[#222222] transition-all duration-300 ease-in-out rounded-full"
            :style="{ transform: isFreelancer ? 'translateX(0%)' : 'translateX(100%)' }"
          ></div>
          <div class="flex justify-between p-1.5 relative z-10">
            <button
              class="py-3 px-20 text-sm text-white rounded-full transition-all"
              :class="{ 'bg-[#94D401]': isFreelancer }"
              @click="selectUserType('freelancer')"
            >
              مستقل
            </button>
            <button
              class="py-3 px-20 text-sm text-white rounded-full transition-all"
              :class="{ 'bg-[#94D401]': !isFreelancer }"
              @click="selectUserType('client')"
            >
              صاحب عمل
            </button>
          </div>
        </div>
        <!-- Registration Form -->
        <form @submit.prevent="" class="space-y-2 max-w-md mx-auto mt-4">
          <div class="flex flex-col text-right">
            <label for="name" class="mb-1 text-[#D0D0C8]">الاسم</label>
            <input
              id="name"
              type="text"
              v-model="form.name"
              class="border-b border-[#D0D0C8] focus:outline-none focus:border-[#94D401]"
            />
          </div>
          <div class="flex flex-col text-right">
            <label for="username" class="mb-1 text-[#D0D0C8]">اسم المستخدم</label>
            <input
              id="username"
              type="text"
              v-model="form.username"
              class="border-b border-[#D0D0C8] focus:outline-none focus:border-[#94D401]"
            />
          </div>
          <div class="flex flex-col text-right">
            <label for="email" class="mb-1 text-[#D0D0C8]">البريد الإلكتروني</label>
            <input
              id="email"
              type="email"
              v-model="form.email"
              class="border-b border-[#D0D0C8] focus:outline-none focus:border-[#94D401]"
            />
          </div>
          <div class="flex flex-col text-right">
            <label for="phone" class="mb-1 text-[#D0D0C8]">رقم الهاتف</label>
            <div class="flex gap-2">
              <select
                id="phoneCode"
                v-model="form.phoneCode"
                class="border-b border-[#D0D0C8] focus:outline-none focus:border-[#94D401]"
              >
                <option value="+20">+20</option>
              </select>
              <input
                id="phoneNumber"
                type="text"
                v-model="form.phoneNumber"
                class="flex-1 border-b border-[#D0D0C8] focus:outline-none focus:border-[#94D401]"
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col text-right relative">
              <label for="confirmPassword" class="mb-1 text-[#D0D0C8]">تأكيد كلمة المرور</label>
              <input
                id="confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                v-model="form.confirmPassword"
                class="border-b border-[#D0D0C8] focus:outline-none focus:border-[#94D401]"
              />
              <i
                :class="['pi', showConfirmPassword ? 'pi-eye-slash' : 'pi-eye', 'text-left', 'absolute', 'bottom-4', 'cursor-pointer']"
                @click="toggleConfirmPasswordVisibility"
              ></i>
            </div>
            <div class="flex flex-col text-right relative">
              <label for="password" class="mb-1 text-[#D0D0C8]">كلمة المرور</label>
              <input
                id="password"
                :type="showPassword ? 'text' : 'password'"
                v-model="form.password"
                class="border-b border-[#D0D0C8] focus:outline-none focus:border-[#94D401]"
              />
              <i
                :class="['pi', showPassword ? 'pi-eye-slash' : 'pi-eye', 'text-left', 'absolute', 'bottom-4', 'cursor-pointer']"
                @click="togglePasswordVisibility"
              ></i>
            </div>
       
          </div>
          <div dir="rtl" class="flex items-center space-x-2 space-x-reverse space-y-2">
            <input
              id="agreeToTerms"
              type="checkbox"
              v-model="form.agreeToTerms"
              class="h-4 w-4 border-gray-300 rounded focus:ring-[#94D401]"
            />
            <label for="agreeToTerms" class="text-sm">
              أقبل كافة <a href="#" class="underline text-black">الشروط والأحكام</a> و
              <a href="#" class="underline text-black">سياسة الخصوصية.</a>
            </label>
          </div>
          <div class="pt-1">
            <button type="submit" class="w-full py-3 text-lg font-semibold text-white bg-[#222222] rounded-full">
              إنشاء حساب
            </button>
          </div>
        </form>
        <p class="text-center mt-6 text-sm">
          لديك حساب بالفعل؟ <router-link to="/login" class="text-[#94D401] underline">تسجيل الدخول</router-link>
        </p>
      </div>
      <!-- left Section -->
      <div class="hidden lg:block w-full lg:w-1/2">
        <img src="../../assets/images/register/register.svg" alt="Register" class="w-[95%]">
      </div>
    </div>
  </div>
</template>

<style scoped>
  .msg {
    font-size: 13px;
  }

  .relative {
    position: relative;
    overflow: hidden;
  }
  
  .absolute {
    position: absolute;
  }
  
  .z-10 {
    z-index: 10;
  }
</style>