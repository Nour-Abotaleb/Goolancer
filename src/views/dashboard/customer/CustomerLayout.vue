<script setup>
import Sidebar from "@/components/dashboard/Sidebar.vue";
import { RouterView } from "vue-router";
import Duties from '@/components/dashboard/Duties.vue';
</script>

<template>
  <div class="w-full">
    <div class="flex h-screen w-[98%] mx-auto gap-6">
      <!-- Sidebar -->
      <div class="w-1/5 hidden lg:block flex-shrink-0">
        <Sidebar />
      </div>

      <!-- RouterView -->
      <div class="w-3/5 flex-grow">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
