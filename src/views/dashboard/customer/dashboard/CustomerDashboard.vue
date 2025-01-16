<script setup>
import Header from '@/components/Header.vue';
import Background from './Background.vue';
import CircularChart from './CircularChart.vue';
import CurvedChart from './CurvedChart.vue';
import Search from './Search.vue';
import Duties from '@/components/dashboard/Duties.vue';
import Table from './Table.vue';

</script>

<template>
     <!-- Header -->
    <div class="py-2">
         <Header header-title="sidebar.dashboard"/>
    </div>
    <!-- Centered Content -->
   <div class="flex justify-between mt-2">
        <div class="lg:w-[70%] w-[95%] mx-auto lg:mx-0 overflow-auto" >
            <Background />
            <div class="overflow-hidden grid md:grid-cols-[1.5fr_2fr] lg:grid-cols-[1fr_2fr] grid-cols-1 gap-2 my-4">
               <CircularChart class=""/>
               <CurvedChart class=""/>
            </div>
            <Search />
            <Table />
        </div>
     <!-- Right Duties -->
      <div class="w-[28%] hidden lg:block overflow-y-scroll" style="scrollbar-width: none; -ms-overflow-style: none;">
          <Duties /> 
      </div>

   </div>
</template>

