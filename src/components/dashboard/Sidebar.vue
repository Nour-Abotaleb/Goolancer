<script setup>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import LogoIcon from "../../assets/icons/general/logo.svg";
import SettingsIcon from "../../assets/icons/general/settings.svg";
import DashboardIcon from "../../assets/icons/general/dashboard.svg";
import DashboardColored from "../../assets/icons/general/colored-dashboard.svg";
import PostJob from "../../assets/icons/general/post-job.svg";
import ColoredPostJob from "../../assets/icons/general/colored-post-job.svg";
import Jobs from "../../assets/icons/general/jobs.svg";
import ColoredJobs from "../../assets/icons/general/colored-jobs.svg";
import offers from "../../assets/icons/general/offers.svg";
import Orders from "../../assets/icons/general/orders.svg";
import ColoredOrders from "../../assets/icons/general/colored-orders.svg";
import ColoredOffers from "../../assets/icons/general/colored-offers.svg";
import SupportTickets from "../../assets/icons/general/headphone.svg";
import ColoredTickets from "../../assets/icons/general/colored-tickets.svg";
import Wallet from "../../assets/icons/general/wallet.svg";
import ColoredWallet from "../../assets/icons/general/colored-wallet.svg";
import Reports from "../../assets/icons/general/reports.svg";
import ColoredReports from "../../assets/icons/general/colored-reports.svg";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const { t, locale } = useI18n();
const isToggled = ref(false);

const selectedMenu = ref(localStorage.getItem("selectedMenu") || "dashboard");

watch(() => route.name, (newRouteName) => {
  selectedMenu.value = newRouteName || "dashboard";
  localStorage.setItem("selectedMenu", selectedMenu.value);
});

const updateMenuSelection = (menuName) => {
  selectedMenu.value = menuName;
  localStorage.setItem("selectedMenu", menuName)
}
const toggle = () => {
  isToggled.value = !isToggled.value;
};

const menus = [
  {
    name: "CustomerDashboard",
    route: "/customer/",
    routeName: "CustomerDashboard",
    icon: DashboardIcon,
    iconActive: DashboardColored,
    translation: "sidebar.dashboard",
    alt: "Dashboard Icon",
  },
  {
    name: "PostJob",
    route: "/customer/post-job",
    routeName: "PostJob",
    icon: PostJob,
    iconActive: ColoredPostJob,
    translation: "sidebar.postJob",
    alt: "Ads Icon",
  },
  {
    name: "MyJobs",
    route: "/customer/my-jobs",
    routeName: "MyJobs",
    icon: Jobs,
    iconActive: ColoredJobs,
    translation: "sidebar.myJobs",
    alt: "Create Project Icon",
  },
  {
    name: "Orders",
    route: "/customer/orders",
    routeName: "Orders",
    icon: Orders,
    iconActive: ColoredOrders,
    translation: "sidebar.my_orders",
    alt: "Orders Icon",
  },
  {
    name: "offers",
    route: "/customer/offers",
    routeName: "offers",
    icon: offers,
    iconActive: ColoredOffers,
    translation: "sidebar.my_offers",
    alt: "Offers Icon",
  },
  {
    name: "supportTickets",
    route: "/customer/support-tickets",
    routeName: "supportTickets",
    icon: SupportTickets,
    iconActive: ColoredTickets,
    translation: "sidebar.support_tickets",
    alt: "Support Tickets Icon",
  },
  {
    name: "wallet",
    route: "/customer/wallet",
    routeName: "wallet",
    icon: Wallet,
    iconActive: ColoredWallet,
    translation: "sidebar.wallet",
    alt: "Wallet Icon",
  },
  {
    name: "withdrawHistory",
    route: "/customer/withdraw-history",
    routeName: "withdrawHistory",
    icon: Reports,
    iconActive: ColoredReports,
    translation: "sidebar.reports",
    alt: "Withdraw History Icon",
  },
];

</script>

<template>
  <aside class="bg-black text-white mt-1 fixed hidden space-y-7 lg:block rounded-3xl p-3 whitespace-nowrap">
    <div class="flex justify-between">
      <img :src="LogoIcon" alt="Logo" />
      <img :src="SettingsIcon" alt="Settings" />
    </div>
    <div class="text-white mt-4 text-[15px]">
      <div class="flex justify-between bg-[#20201F] rounded-3xl p-1.5 mt-2">
        <div class="flex gap-1 items-center">
          <img src="../../assets/icons/general/checkmark-badge.svg" alt="" class="w-4" />
          <span class="truncate">{{ t('sidebar.identity_verification') }}</span>
        </div>
        <div class="border border-white rounded-3xl px-3">
          <button>{{ t('sidebar.verify') }}</button>
        </div>
      </div>
      <div class="flex justify-between bg-[#20201F] rounded-3xl p-1.5 mt-2">
        <div class="flex gap-1 items-center">
          <img src="../../assets/icons/general/security-validation.svg" alt="" />
          <span class="truncate">{{ t('sidebar.two_factor_authentication') }}</span>
        </div>
        <div :class="['toggle-switch', { 'toggled': isToggled }]" @click="toggle">
          <div :class="['toggle-circle', { 'toggled': isToggled }]"></div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 mt-3 gap-2 text-center text-[15px]">
      <router-link
        v-for="menu in menus"
        :key="menu.name"
        :to="menu.route"
        class="p-4 flex flex-col items-center justify-center rounded-3xl"
        :class="{
          'bg-[#20201F] text-primary border border-primary': selectedMenu === menu.name,
          'bg-[#20201F]': selectedMenu !== menu.name
        }"
        :exact-active-class="'bg-[#20201F] text-primary border border-primary'"
        @click.native="updateMenuSelection(menu.name)"
      >
        <img :src="selectedMenu === menu.name ? menu.iconActive : menu.icon" :alt="menu.alt" class="mb-2" />
        <p>{{ t(menu.translation) }}</p>
        <!-- {{ menu.name }} <br>
        {{ selectedMenu }} -->
      </router-link>
    </div>
    <div class="flex justify-between mt-2">
      <button>
        <img src="../../assets/icons/general/message.svg" alt="Messages" />
      </button>
      <button>
        <img src="../../assets/icons/general/logout.svg" alt="Logout" :class="{'rotate-180': locale === 'en'}" />
      </button>
    </div>
  </aside>
  
</template>

<style>
aside {
  width: 20%;
}

.toggle-switch {
  width: 35px;
  height: 18px;
  border-radius: 24px;
  background-color: #000;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding: 2px;
  transition: background-color 0.3s;
}

.toggle-switch:hover {
  background-color: #666;
}

.toggle-switch.toggled {
  background-color: #666;
}

.toggle-circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: absolute;
  background-color: #94D401;
  left: 2px;
  transition: transform 0.3s;
}

.toggle-circle.toggled {
  transform: translateX(18px);
}

.truncate {
  display: block;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis; 
}
</style>
