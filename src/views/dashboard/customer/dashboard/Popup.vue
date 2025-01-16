<template>
    <div class="overlay fixed inset-0 bg-black bg-opacity-50 z-10"></div>
    <div class="popup rounded-[20px] bg-white w-[90%] lg:w-[50%] mx-auto absolute top-[10%] left-[5%] right-[5%] lg:top-[25%] z-20">
         <div class="bg-[#E2ECC3] rounded-t-[20px] text-center p-2">
             <p>الوظيفة التي أنشأتها</p>
         </div>
         <div class="grid lg:grid-cols-[2fr_1fr] p-4">
             <div class="space-y-4">
                 <div class="flex items-center gap-2">
                     <img src="../../../../assets/icons/general/check.svg" alt="">
                     <p class="font-bold">أحتاج إلى صفحة هبوط</p>
                 </div>
                 <p class="text-sm">نبحث عن مصمم واجهات مستخدم مبدع وذو خبرة لتصميم واجهات احترافية لتطبيقات الويب والموبايل. تشمل المهام تصميم شاشات سهلة الاستخدام وجذابة بصريًا، مع مراعاة تجربة المستخدم (UX) وأحدث اتجاهات التصميم.</p>
                 <p>أقل من اسبوع</p>
                 <div class="flex items-center gap-2 text-sm">
                     <img src="../../../../assets/icons/general/check.svg" alt="">
                     <div class="grid lg:grid-cols-4 grid-cols-2 gap-2">
                         <div class="bg-[#F4FBE6] items-center rounded-[20px] flex gap-1 px-2">
                             <img src="../../../../assets/icons/general/close-circle.svg" alt="">
                             <p class="text-primary">Figma</p>
                         </div>
                         <div class="bg-[#F4FBE6] items-center rounded-[20px] flex gap-1 px-2">
                             <img src="../../../../assets/icons/general/close-circle.svg" alt="">
                             <p class="text-primary">Figma</p>
                         </div>
                         <div class="bg-[#F4FBE6] items-center rounded-[20px] flex gap-1 px-2">
                             <img src="../../../../assets/icons/general/close-circle.svg" alt="">
                             <p class="text-primary">Figma</p>
                         </div>
                     </div>
                 </div>
             </div>
             <div class="bg-[#E2ECC3] space-y-2 whitespace-nowrap p-2 rounded-[20px]">
                 <p class="text-center">
                     تصميم واجهات مستخدم
                 </p>
                 <div class="flex gap-2 border-dashed py-2">
                     <p>السعر :</p>
                     <p>ثابت - 5000 جنية</p>
                 </div>
                 <div class="flex gap-2 border-dashed py-2">
                     <p>الإشراف: </p>
                     <p>جودة التصميم - 2000 جنية</p>
                 </div>
                 <div class="flex gap-2">
                     <p>الاجمالى :</p>
                     <p>7000 جنيه</p>
                 </div>
             </div>
         </div>
         <div class="flex justify-end mt-4 gap-6 px-4 pb-4">
             <button
                 type="submit"
                 class="bg-black text-white rounded-[20px] focus:outline-none py-1 pe-1 ps-2">
                 تأكيد النشر
                 <img src="../../../../assets/icons/general/arrow-left.svg" alt="" class="inline w-6"/>
             </button>
         </div>
    </div>
 </template>
 
 <script setup>
   import { useI18n } from "vue-i18n";
   const { t, locale } = useI18n();
 </script>
 
 <style scoped>
.border-dashed {
    border-bottom: 1px dashed black;
}

@media (max-width: 768px) {
    .w-[50%] {
        width: 90%;
    }
    .lg\:grid-cols-[2fr_1fr] {
        grid-template-columns: 1fr;
    }
    .lg\:top-[25%] {
        top: 10%;
    }
    .text-sm {
        font-size: 0.875rem; 
    }
    .text-center {
        text-align: center;
    }
    .grid-cols-4 {
        grid-template-columns: repeat(2, 1fr); 
    }
}

@media (max-width: 768px) {
    .flex {
        flex-direction: column;
    }
    .px-4 {
        padding-left: 1rem;
        padding-right: 1rem;
    }
}
 </style>
 