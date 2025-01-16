<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const isScrolled = ref(false);

// Handle scroll event
const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

// Attach and detach the scroll event listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div dir="rtl" class="header fixed w-full flex justify-center items-center text-white z-50">
    <div
      :class="[
        'mx-auto nav-container flex items-center justify-between border border-white rounded-xl py-4 mt-4 w-full px-4 transition-colors duration-300',
        isScrolled ? 'bg-black bg-opacity-40 backdrop-blur-md' : 'bg-[rgba(255,255,255,0.4)] backdrop-blur-md',
      ]"
    >
      <!-- Logo -->
      <router-link to="/" class="shrink-0">
        <img src="../../assets/icons/general/logo.svg" alt="Logo" class="" />
      </router-link>

      <!-- Navigation Menu -->
      <div class="hidden md:flex items-center gap-6">
        <router-link to="/" class="text-sm hover:text-[#94D401] transition-all">الرئيسية</router-link>
        <router-link to="/about" class="text-sm hover:text-[#94D401] transition-all">عن الموقع</router-link>
        <router-link to="/contact" class="text-sm hover:text-[#94D401] transition-all">اتصل بنا</router-link>
      </div>

      <!-- Buttons -->
      <div class="hidden md:flex gap-4">
        <router-link
          to="/register"
          class="px-6 py-2 text-sm rounded-full hover:bg-[#94D401] text-white transition-all"
        >
          حساب جديد
        </router-link>
        <router-link
          to="/login"
          class="px-6 py-2 text-sm rounded-full text-black bg-[#94D401] hover:bg-[#76C100] transition-all"
        >
          تسجيل الدخول
        </router-link>
      </div>

      <!-- Hamburger Menu (Mobile) -->
      <button
        class="md:hidden flex items-center text-white focus:outline-none"
        @click="isMenuOpen = !isMenuOpen"
      >
        <i class="pi pi-bars text-2xl"></i>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="fixed top-20 right-6 rounded w-full bg-black bg-opacity-90 text-white p-6 flex flex-col gap-4 md:hidden"
    >
      <router-link
        to="/"
        class="text-sm hover:text-[#94D401] transition-all"
        @click="isMenuOpen = false"
      >
        الرئيسية
      </router-link>
      <router-link
        to="/about"
        class="text-sm hover:text-[#94D401] transition-all"
        @click="isMenuOpen = false"
      >
        عن الموقع
      </router-link>
      <router-link
        to="/contact"
        class="text-sm hover:text-[#94D401] transition-all"
        @click="isMenuOpen = false"
      >
        اتصل بنا
      </router-link>
      <router-link
        to="/register"
        class="px-6 py-2 text-sm rounded-full hover:bg-[#94D401] text-white transition-all"
        @click="isMenuOpen = false"
      >
        حساب جديد
      </router-link>
      <router-link
        to="/login"
        class="px-6 py-2 text-sm rounded-full text-black bg-[#94D401] hover:bg-[#76C100] transition-all"
        @click="isMenuOpen = false"
      >
        تسجيل الدخول
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.header > div {
  width: 90%;
}
.nav-container {
  width: 90%;
  transition: background-color 0.3s ease;
}
</style>
