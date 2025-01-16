<script setup>

</script>
<template>
    <div id="search" dir="rtl" class="mt-20 mb-20 relative" >
        <div class="circles absolute right-32 max-w-xs"><img src="../../../assets/images/home/cirlces.svg" alt=""></div>
        <div class="container mx-auto bg-[#222] text-white p-20 relative rounded-2xl flex justify-between items-center">
            <div class="right-side">
                    <div class="text">
                    <h3 class=" my-6 text-3xl">هل تبحث عن موظف ينجز المهمة؟</h3>
                    <p class="text-gray-300 font-thin">احصل على أفضل عمالة لأفضل نتيجة وأعلى كفاءة.</p>
                </div>
                <button type="button" class="bg-white text-black mt-10 rounded-full py-1.5 px-2 ml-4"> <img src="../../../assets/icons/home/google.svg" class="inline w-6 bg-[#94D401] rounded-full p-1" alt=""> Google App</button>
                <button type="button" class="bg-white text-black mt-10 rounded-full py-1.5 px-2"> <img src="../../../assets/icons/home/google.svg" class="inline w-6 bg-[#94D401] rounded-full p-1" alt=""> App Store</button>
            </div>
            <div class="left-side">
                <img src="../../../assets/images/home/phone.svg" class="absolute bottom-0 left-[-85px]" width="600" alt="">
            </div>
        </div>
    </div>

</template>

<style scoped>
    .circles {
        top: -4rem;
        z-index: 9;
    }
</style>