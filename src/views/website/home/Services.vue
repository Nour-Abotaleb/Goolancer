<script setup>
import { ref } from "vue";
import icon1 from '@/assets/icons/home/customize.svg'
import icon2 from '@/assets/icons/home/elements.svg'
import icon3 from '@/assets/icons/home/megaphone-01.svg'
import icon4 from '@/assets/icons/home/globe-02.svg'
import icon5 from '@/assets/icons/home/license-draft.svg'
import icon6 from '@/assets/icons/home/analytics-up.svg'

const items = ref([
  { id: 1, icon: icon1, title: "حلول البرمجيات المخصصة", content: "برمجيات تفوق التوقعات. نطور أنظمة ذكية وحلول مخصصة لتلبية احتياجات الأعمال، من أنظمة إدارة العملاء (CRM) إلى أنظمة تخطيط الموارد (ERP)." },
  { id: 2, icon: icon2 , title: "تطوير التطبيقات الذكية", content: "تصميم وتطوير تطبيقات مخصصة لأنظمة iOS وAndroid بأحدث التقنيات لضمان أداء فائق وتجربة مستخدم استثنائية." },
  { id: 3, icon: icon3, title: "التسويق الرقمي", content: "خطط تسويقية متكاملة تتضمن تحسين محركات البحث (SEO)، حملات وسائل التواصل الاجتماعي، والإعلانات المدفوعة لتحقيق نتائج ملموسة." },
  { id: 4, icon: icon4, title: "تطوير المواقع الإلكترونية", content: "نحو تجربة ويب متميزة. نقدم حلول تصميم وتطوير مواقع إلكترونية مبتكرة ومتجاوبة تعكس هوية علامتك التجارية وتلبي احتياجات عملائك." },
  { id: 5, icon: icon5, title: " إدارة المحتوى الرقمي", content: "أصنع التأثير بالكلمات والصور. إعداد وإدارة محتوى مبتكر يعبر عن هوية علامتك، يجذب الجمهور، ويحقق التفاعل المطلوب." },
  { id: 6, icon: icon6, title: "تحليل البيانات وتقارير الأداء", content: "تحليل يدفع باتجاه قرارات أفضل. نوفر تقارير دقيقة ورؤى قابلة للتنفيذ لتحسين الأداء وقياس نجاح استراتيجياتك الرقمية." },
]);
</script>

<template>
    <div id="services" dir="rtl">
      <div class="services m-auto mt-40">
        <div class="title">
          <h2 class="text-3xl">
            <span class="oblique-btn bg-[#94D401] ml-2 p-2 service-bg">خدماتنا الرقمية... </span>
            <span>حلول مبتكرة لكل احتياجاتك</span>
          </h2>
        </div>
        <section class="mx-auto py-8" dir="rtl">
          <div class="grid grid-cols-4 gap-4">
            <div
              v-for="(item, index) in items"
              :key="item.id"
              class="p-4 box mt-6 bg-white shadow-md rounded text-right"
              :class="{ 'row-span-2': index === 0, 'col-span-2 flex flex-row items-center': index === 5 }"
            >
              <!-- Icons -->
              <div class="mb-4 p-2 rounded-lg w-10 bg-[#F5F8FF]">
                <img
                :src="item.icon"
                :alt="`${item.title} Icon`"
                class="w-6 h-6"
              />
              </div>
  
              <div v-if="index === 0" class="text-content">
                <h2 class="text-lg py-3 font-semibold mb-2 text-[#252432]">{{ item.title }}</h2>
                <p class="text-[#8987A1] text-sm mb-4">{{ item.content }}</p>
                <img
                  src="../../../assets/images/home/service-1.svg"
                  alt="First Column Image"
                  class="w-full h-auto rounded mt-4"
                />
              </div>
  
              <div v-else-if="index === 5" class="flex flex-col items-start space-y-4">
  <!-- Icon Above -->
  <div class="mb-4 p-2 rounded-lg w-10 bg-[#F5F8FF]">
    <img
      :src="item.icon"
      :alt="`${item.title} Icon`"
      class="w-6 h-6"
    />
  </div>

  <!-- Image and Text in Flex -->
  <div class="flex items-center space-x-4 w-full">
    <div class="flex-1 text-content">
      <h2 class="text-lg py-3 font-semibold mb-2 text-[#252432]">{{ item.title }}</h2>
      <p class="text-gray-500 text-sm">{{ item.content }}</p>
    </div>
    <img
      src="../../../assets/images/home/service-2.svg"
      alt="Second Column Image"
      class="w-1/3 h-auto rounded"
    />
  </div>
</div>
    <div v-else>
    <h2 class="text-lg py-3 font-semibold mb-2 text-[#252432]">{{ item.title }}</h2>
    <p class="text-[#8987A1] text-sm">{{ item.content }}</p>
    </div>
</div>
</div>
</section>
</div>
</div>
  </template>
  

  <style scoped>
  .services {
    width: 90%;
  }
  .service-bg {
    border-radius: 13px;
  }
  img.w-8 {
    display: inline-block;
    margin-bottom: 1rem;
  }
  .oblique-btn {
      transform: skew(-10deg);
    }
  .box {
    box-shadow: 0px 0px 38.7px 0px rgba(211, 211, 211, 0.25);
    border-radius: 10px;
  }
  </style>
  