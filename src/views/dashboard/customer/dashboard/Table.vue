<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const tableData = [
  { column1: 'Row 1, Col 1', column2: 'Row 1, Col 2', column3: 'Row 1, Col 3', column4: 'Row 1, Col 4', column5: 'Row 1, Col 5' },
  { column1: 'Row 2, Col 1', column2: 'Row 2, Col 2', column3: 'Row 2, Col 3', column4: 'Row 2, Col 4', column5: 'Row 2, Col 5' },
  { column1: 'Row 3, Col 1', column2: 'Row 3, Col 2', column3: 'Row 3, Col 3', column4: 'Row 3, Col 4', column5: 'Row 3, Col 5' },
];
</script>

<template>
  <div class="overflow-x-auto rounded-xl mt-4 bg-white">
    <table class="min-w-full table-auto border-collapse whitespace-nowrap">
      <thead>
        <tr>
          <th class="font-medium px-4 py-2 text-right border-b flex items-center gap-1"><img src="../../../../assets/icons/general/circle.svg" alt=""><span>{{ t('table.id') }}</span></th>
          <th class="font-medium px-4 py-2 text-right border-b">{{ t('table.budget') }}</th>
          <th class="font-medium px-4 py-2 text-right border-b">{{ t('table.deliveryTime') }}</th>
          <th class="font-medium px-4 py-2 text-right border-b">{{ t('table.paymentStatus') }}</th>
          <th class="font-medium px-4 py-2 text-right border-b">{{ t('table.createdDate') }}</th>
          <th class="font-medium px-4 py-2 text-right border-b">{{ t('table.actions') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in tableData" :key="index" class="text-[#787474]">
          <td class="px-4 py-2 text-right border-b flex items-center gap-1"><img src="../../../../assets/icons/general/colored-circle.svg" alt=""><span>{{ index + 1 }}</span></td>
          <td class="px-4 py-2 border-b">$500.00</td>
          <td class="px-4 py-2 border-b">{{ t('table.oneDay') }}</td> <!-- Use translation here -->
          <td class="px-4 py-2 border-b text-[#87C101]">{{ t('table.completed') }}</td> <!-- Use translation here -->
          <td class="px-4 py-2 border-b">Nov 27, 2024</td>
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
</template>

<style scoped>
</style>
