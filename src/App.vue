<script setup>
import { RouterView, useRoute } from "vue-router";
import { computed, ref, watch, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const userType = ref("admin");
const route = useRoute();
const { locale } = useI18n();

const directionClass = computed(() => {
  return locale.value === "ar" ? "rtl" : "ltr";
});

onMounted(() => {
  document.documentElement.setAttribute("dir", locale.value === "ar" ? "rtl" : "ltr");
});

watch(locale, (newLocale) => {
  document.documentElement.setAttribute("dir", newLocale === "ar" ? "rtl" : "ltr");
});

</script>

<template>
  <div
    v-if="
      route.path.split('/')[1] === 'customer' ||
      route.path.split('/')[1] === 'admin' ||
      route.path.split('/')[1] === 'provider'
    "
  >
    <div :class="directionClass">
      <RouterView class="md:w-[100%] h-screen" />
    </div>
  </div>

  <div v-else>
    <RouterView />
  </div>
</template>

<style scoped>
.sidebar {
  height: 95vh;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

@media (min-width: 440px) {
  .sm {
    display: none;
  }
}

@media (max-width: 768px) {
  .md {
    display: none;
  }
}

@media (min-width: 1000px) {
  .lg {
    display: block;
  }
}

@media (min-width: 768px) {
  .sidebar {
    display: none;
  }
}

@media (min-width: 1024px) {
  .sidebar {
    display: block;
  }
}
</style>
