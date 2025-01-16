<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
    <div class="bg-[#E2ECC3] rounded-t-3xl flex items-center justify-between rounded-b-lg py-1.5 px-4">
        <p class="font-bold">{{ t('calendar.task') }}</p>
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
            <div class="bg-black rounded-[60px] text-white p-1 px-4">
                <button>{{ t('viewAll') }}</button>
            </div>
    </div>
</template>

<style scoped>

</style>
