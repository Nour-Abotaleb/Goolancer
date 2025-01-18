<script setup>
import Header from '@/components/Header.vue';
import Background from './Background.vue';
import CircularChart from './CircularChart.vue';
import CurvedChart from './CurvedChart.vue';
import Search from './Search.vue';
import Duties from '@/components/dashboard/Duties.vue';
import Table from './Table.vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const tableData = [
  { column1: 'Row 1, Col 1', column2: 'Row 1, Col 2', column3: 'Row 1, Col 3', column4: 'Row 1, Col 4', status: 'status_resolved'  },
  { column1: 'Row 2, Col 1', column2: 'Row 2, Col 2', column3: 'Row 2, Col 3', column4: 'Row 2, Col 4', status: 'status_under_review' },
  { column1: 'Row 3, Col 1', column2: 'Row 3, Col 2', column3: 'Row 3, Col 3', column4: 'Row 3, Col 4', status: 'status_resolved'  },
  { column1: 'Row 3, Col 1', column2: 'Row 3, Col 2', column3: 'Row 3, Col 3', column4: 'Row 3, Col 4', status: 'status_in_progress' },
  { column1: 'Row 3, Col 1', column2: 'Row 3, Col 2', column3: 'Row 3, Col 3', column4: 'Row 3, Col 4', status: 'status_resolved'  },
  { column1: 'Row 3, Col 1', column2: 'Row 3, Col 2', column3: 'Row 3, Col 3', column4: 'Row 3, Col 4', status: 'status_resolved'  },
  { column1: 'Row 3, Col 1', column2: 'Row 3, Col 2', column3: 'Row 3, Col 3', column4: 'Row 3, Col 4', status: 'status_closed' },
];

const showSheduleInterviewPopup = ref(false);
const openSchedulePopup = () => {
    showSheduleInterviewPopup.value = true;
};
const closeSchedulePopup = () => {
    showSheduleInterviewPopup.value = false;
}
</script>

<template>
     <!-- Header -->
    <div class="py-2">
         <Header header-title="sidebar.reports"/>
    </div>
    <!-- Centered Content -->
   <div class="flex justify-between mt-2">
        <div class="lg:w-[70%] w-[95%] mx-auto lg:mx-0 overflow-auto" >
        <div class="bg-[#E2ECC3] rounded-t-3xl flex items-center gap-8 rounded-b-lg py-1.5 px-4">
        <p class="font-bold">{{ t('sidebar.reports') }}</p>
                <!-- Search Input -->
                <div class="relative flex items-center lg:w-[300px] w-[60%] me-2">
                <img
                    src="../../../../assets/icons/general/search.svg"
                    alt="search"
                    class="absolute left-4"
                    width="20"
                />
                <input
                    type="text"
                    :placeholder="t('search')"
                    class="search-input text-sm outline-none p-2.5 w-full border border-[#E7E7E7] bg-white rounded-full"
                />
            </div>
         </div>
         <div class="overflow-x-auto rounded-xl mt-4 bg-white">
        <table class="min-w-full table-auto border-collapse whitespace-nowrap">
        <thead>
            <tr>
            <th class="font-medium px-4 py-2 text-right border-b items-center gap-1">
                <div class="flex gap-1">
                    <img src="../../../../assets/icons/general/circle.svg" alt="">
                    <span>{{ t('wallet.code') }}</span>
                </div>
            </th>
            <th class="font-medium px-4 py-2 text-right border-b">{{ t('supportTickets.ticket_title') }}<br/><span></span></th>
            <th class="font-medium px-4 py-2 text-right border-b">{{ t('supportTickets.ticket_status') }}<br/><span class="text-sm">({{ t('reports.status_updated_by_admin') }})</span></th>
            <th class="font-medium px-4 py-2 text-right border-b">{{ t('reports.report_created_date') }}</th>
            <th class="font-medium px-4 py-2 text-right border-b">{{ t('table.actions') }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, index) in tableData" :key="index" class="text-[#787474]">
            <td class="px-4 py-2 text-right border-b flex items-center gap-1"><img src="../../../../assets/icons/general/circle.svg" alt=""><span>{{ index + 1 }}</span></td>
            <td class="px-4 py-2 border-b">تقرير حول أداء الموقع</td>
            <td
            class="px-4 py-2 border-b"
            :class="{
              'text-[#94D401]': row.status === 'status_resolved',
              'text-[#FFC107]': row.status === 'status_under_review',
              'text-[#007BFF]': row.status === 'status_in_progress',
              'text-[#DC3545]': row.status === 'status_closed'
            }"
          >
            {{
              row.status === 'status_resolved' ? t('reports.status_resolved') :
              row.status === 'status_under_review' ? t('reports.status_under_review') :
              row.status === 'status_in_progress' ? t('reports.status_in_progress') :
              t('supportTickets.status_close')
            }}
          </td>
            <td class="px-4 text-[#787474] py-2 border-b">
                Nov 27, 2024
            </td>
            <td class="px-4 py-2 border-b">
                <div class="flex">
                    <button
                        class="w-6 h-6 flex items-center justify-center cursor-pointer me-2 bg-[#1B1F27] bg-opacity-10 rounded-full"
                    >
                        <img src="../../../../assets/icons/general/edit.svg" alt="" class="w-3">
                    </button>
                    
                    <button
                        class="w-6 h-6 flex items-center justify-center cursor-pointer me-2 bg-[#6096DA] bg-opacity-10 rounded-full"
                    >
                        <img src="../../../../assets/icons/general/eye.svg" alt="" class="w-4">
                    </button>
                    <button
                        class="w-6 h-6 flex items-center justify-center  cursor-pointer me-2 bg-[#D5222F] bg-opacity-10 rounded-full"
                    >
                        <img src="../../../../assets/icons/general/delete.svg" alt="" class="w-3">
                    </button>
                </div>
            </td>
            </tr>
        </tbody>
        </table>
        </div>
    </div>
     <!-- Right Duties -->
      <div class="w-[28%] hidden lg:block overflow-y-scroll" style="scrollbar-width: none; -ms-overflow-style: none;">
          <Duties /> 
      </div>
         <!-- Schedule Interview Popup -->
         <div v-if="showSheduleInterviewPopup" class="overlay fixed inset-0 bg-black bg-opacity-80 z-50"></div>
        <div v-if="showSheduleInterviewPopup" class="popup fixed top-1/2 left-1/2 transform space-y-4 -translate-x-1/2 -translate-y-1/2 z-50 mx-auto bg-white rounded-[20px] w-[30%]">
            <div class="bg-[#E2ECC3] rounded-t-[20px] p-2 text-sm">
                <p class="font-bold text-center">{{ t('supportTickets.button') }}</p>
            </div>
            <div class="pb-6 px-4">
                <div class="mt-4">
                    <div>
                        <label>{{ t('supportTickets.ticket_title') }}</label>
                        <input type="text" class="bg-[#F6F6F6] text-[#787474] outline-none rounded-[20px] w-full py-2 mt-2" 
                        :placeholder="t('')">
                    </div>
                    <div>
                        <label>{{ t('supportTickets.ticket_section') }}</label>
                        <select type="text" class="bg-[#F6F6F6] text-[#787474] outline-none rounded-[20px] w-full py-2 mt-2">
                            <option value="">{{ t('supportTickets.select_section') }}</option>
                        </select>
                    </div>
                    <div>
                        <label>{{ t('supportTickets.ticket_priority') }}</label>
                        <select type="text" class="bg-[#F6F6F6] text-[#787474] rounded-[20px] w-full py-2 mt-2">
                        <option value="">{{ t('supportTickets.select_priority') }}</option>
                        </select>
                    </div>
                    <div>
                        <label>{{ t('supportTickets.description') }}</label>
                        <div class="border border-primary rounded-[20px] h-24 my-2"></div>
                    </div>
                </div>
                <div class="mt-4 flex justify-center items-center gap-4 text-sm">
                    <div class="bg-black text-white rounded-[100px]">
                        <button @click="closeSchedulePopup" class="w-full px-6 py-1.5">{{ t('supportTickets.create_ticket') }}</button>
                    </div>
                    <div class="border border-black rounded-[100px]">
                        <button @click="closeSchedulePopup" class="w-full px-6 py-1.5">{{ t('delete_popup.cancel') }}</button>
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>

