<script setup>
  import { useI18n } from "vue-i18n";
  import { ref, watch } from 'vue';
  const { t, locale } = useI18n();

  const isLangDropdownOpen = ref(false);
  const isSidebarOpen = ref(false);
  const isToggled = ref(false); 

  const changeLanguage = (lang) => {
    locale.value = lang; 
    isLangDropdownOpen.value = false;
  };

  watch(() => locale.value, (newLocale) => {
    if (newLocale === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }
  }, { immediate: true });

const props = defineProps({
  headerTitle: {
    type: String,
    required: true,
  },
});

</script>

<template>
  <div class="flex items-center justify-between gap-10 lg:justify-start bg-black rounded-lg text-white px-4 py-2 lg:bg-transparent">
    <img src="../assets/icons/general/logo.svg" alt="Logo" class="w-24 lg:mx-0 lg:hidden" />
    <h2 class="lg:block hidden text-black font-bold whitespace-nowrap text-xl">{{ t(headerTitle) }}</h2>

    <div class="lg:flex relative hidden items-center lg:w-[400px] mx-auto lg:ms-2">
      <img src="../assets/icons/general/search.svg" alt="search" class="absolute left-4" width="20" />
      <input
        type="text"
        :placeholder="t('search')"
        class="search-input text-sm outline-none p-2.5 w-full border border-[#E7E7E7] bg-white rounded-full"
      />
    </div>

    <div class="bg-white hidden lg:block rounded-full border border-[#EBEBEB] p-2 relative z-10">
      <img src="../assets/icons/general/notification.svg" alt="" />
      <span class="absolute bg-[#EA4545] top-2 right-2 w-2 h-2 rounded-full"></span>
    </div>

      <div class="relative bg-white hidden rounded-full border lg:flex items-center border-[#EBEBEB] p-2 z-10">
        <button @click="isLangDropdownOpen = !isLangDropdownOpen">
          <img src="../assets/icons/general/translate.svg" alt="language switch" />
        </button>
        <div
          v-if="isLangDropdownOpen"
          class="absolute top-full z-10 text-black right-0 bg-white border border-[#EBEBEB] rounded-lg w-[100px] mt-2"
        >
          <button
            class="w-full text-left px-2 py-1 text-sm"
            @click="changeLanguage('en')"
          >
            English
          </button>
          <button
            class="w-full text-left px-2 py-1 text-sm"
            @click="changeLanguage('ar')"
          >
            العربية
          </button>
        </div>
      </div>
    <div class="lg:hidden flex p-2 relative">
      <img src="../assets/icons/general/notification-white.svg" alt="" />
      <span class="absolute bg-[#EA4545] top-2 right-2 w-2 h-2 rounded-full"></span>
    </div>

      <!-- Language Switcher -->
      <div class="relative lg:hidden flex p-2 z-10">
        <button @click="isLangDropdownOpen = !isLangDropdownOpen">
          <img src="../assets/icons/general/translate-white.svg" alt="language switch" />
        </button>
        <div
          v-if="isLangDropdownOpen"
          class="absolute top-full z-10 text-black right-0 bg-white border border-[#EBEBEB] rounded-lg w-[100px] mt-2"
        >
          <button
            class="w-full text-left px-2 py-1 text-sm"
            @click="changeLanguage('en')"
          >
            English
          </button>
          <button
            class="w-full text-left px-2 py-1 text-sm"
            @click="changeLanguage('ar')"
          >
            العربية
          </button>
        </div>
      </div>
    <button class="lg:hidden" @click="isSidebarOpen = !isSidebarOpen">

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 12h18M3 6h18M3 18h18"/>
    </svg>
  </button>

  <div class="bg-black hidden text-[#D9D9D9] rounded-[20px] lg:flex items-center justify-between w-[150px] p-1">
      <div class="flex items-center gap-1">
        <img src="../assets/images/customer_dashboard/customer.svg" alt="" />
        <span class="lg:text-sm font-normal whitespace-nowrap">{{ t('user_name') }}</span>
      </div>
      <img src="../assets/icons/general/arrow-down.svg" alt="" />
  </div>
  </div>
  <!-- Sidebar (Mobile) -->
  <aside v-if="isSidebarOpen" class="lg:hidden fixed text-sm top-0 left-0 w-full h-full bg-black text-white z-50 p-4">
    <div class="flex justify-between mb-4">
      <img src="../assets/icons/general/logo.svg" alt="Logo" class="w-24" />
      <button @click="isSidebarOpen = false">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
    </div>

    <div class="flex flex-col space-y-4">

      <!-- User Profile -->
      <div class="bg-black text-[#D9D9D9] rounded-[20px] flex items-center justify-between w-[150px] p-1">
        <div class="flex items-center gap-1">
          <img src="../assets/images/customer_dashboard/customer.svg" alt="" />
          <span class="text-sm font-normal">{{ t('user_name') }}</span>
        </div>
        <img src="../assets/icons/general/arrow-down.svg" alt="" />
      </div>
    </div>

    <!-- Sidebar Content Links -->
    <div class="text-white mt-4 text-[15px]">
      <div class="flex justify-between bg-[#20201F] rounded-3xl p-1.5 mt-2">
        <div class="flex gap-1 items-center">
          <img src="../assets/icons/general/checkmark-badge.svg" alt="" class="w-4" />
          <span>{{ t('sidebar.identity_verification') }}</span>
        </div>
        <div class="border border-white rounded-3xl px-3">
          <button>{{ t('sidebar.verify') }}</button>
        </div>
      </div>
      <div class="flex justify-between bg-[#20201F] rounded-3xl p-1.5 mt-2">
        <div class="flex gap-1 items-center">
          <img src="../assets/icons/general/security-validation.svg" alt="" />
          <span>{{ t('sidebar.two_factor_authentication') }}</span>
        </div>
        <div :class="['toggle-switch', { 'toggled': isToggled }]" @click="isToggled = !isToggled">
          <div :class="['toggle-circle', { 'toggled': isToggled }]"></div>
        </div>
      </div>
      <div class="flex justify-between bg-[#20201F] rounded-3xl p-1.5 mt-2">
        <div class="flex gap-1 items-center">
          <img src="../assets/icons/general/crown.svg" alt="" class="w-4" />
          <span>{{ t('sidebar.subscriptions') }}</span>
        </div>
        <div class="border border-white rounded-3xl px-3">
          <button>{{ t('sidebar.verify') }}</button>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 mt-6 space-y-2 gap-2 text-center">
      <a href="#" class="bg-[#20201F] rounded-3xl flex p-2 flex-col items-center justify-center border border-primary">
        <img src="../assets/icons/general/colored-dashboard.svg" alt="" class="mb-2" />
        <p class="text-primary">{{ t('sidebar.dashboard') }}</p>
      </a>
      <a href="#" class="bg-[#20201F] rounded-3xl flex flex-col items-center justify-center">
        <img src="../assets/icons/general/promotion.svg" alt="" class="mb-1" />
        <p>{{ t('sidebar.postJob') }}</p>
      </a>
      <a href="#" class="bg-[#20201F] rounded-3xl p-2 flex flex-col items-center justify-center">
        <img src="../assets/icons/general/license-draft.svg" alt="" class="mb-1" />
        <p>{{ t('sidebar.create_project') }}</p>
      </a>
      <a href="#" class="bg-[#20201F] rounded-3xl p-2 flex flex-col items-center justify-center">
        <img src="../assets/icons/general/orders.svg" alt="" class="mb-1" />
        <p>{{ t('sidebar.my_orders') }}</p>
      </a>
      <a href="#" class="bg-[#20201F] rounded-3xl p-2 flex flex-col items-center justify-center">
        <img src="../assets/icons/general/coupon.svg" alt="" class="mb-1" />
        <p>{{ t('sidebar.my_offers') }}</p>
      </a>
      <a href="#" class="bg-[#20201F] rounded-3xl p-2 flex flex-col items-center justify-center">
        <img src="../assets/icons/general/headphone.svg" alt="" class="mb-1" />
        <p>{{ t('sidebar.support_tickets') }}</p>
      </a>
      <a href="#" class="bg-[#20201F] rounded-3xl p-2 flex flex-col items-center justify-center">
        <img src="../assets/icons/general/wallet.svg" alt="" class="mb-1" />
        <p>{{ t('sidebar.wallet') }}</p>
      </a>
      <a href="#" class="bg-[#20201F] rounded-3xl flex flex-col items-center justify-center">
        <img src="../assets/icons/general/work-history.svg" alt="" class="mb-1" />
        <p>{{ t('sidebar.withdraw_history') }}</p>
      </a>
    </div>
    <div class="flex justify-between mt-2">
      <button>
        <img src="../assets/icons/general/message.svg" alt="" />
      </button>
      <button>
        <img src="../assets/icons/general/logout.svg" alt="" />
      </button>
    </div>
  </aside>
</template>

<style scoped>

  .search-input {
    width: 100%;
    padding-left: 30px; 
  }

  @media (max-width: 768px) {
    .lg\\:hidden {
      display: block !important;
    }

    .lg\\:flex {
      display: none !important;
    }

    .lg\\:bg-transparent {
      background: black !important;
    }

    .search-input {
      width: calc(100% - 40px); 
    }
  }
  @media (min-width: 769px) {
    .lg\\:hidden {
      display: none !important;
    }

    .lg\\:flex {
      display: flex !important;
    }

    .lg\\:bg-transparent {
      background: transparent !important;
    }
  }
</style>
