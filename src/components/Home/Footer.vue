<template>
    <footer class="footer mb-0  w-full text-white py-10">
      <div class="footer-container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
        <div>
          <div class="border-t-8 socialmedia-border w-full mb-4"></div>
          <div class="flex justify-center md:justify-start gap-4">
            <a href="#" class="" aria-label="Facebook">
              <i class="pi pi-facebook"></i>
            </a>
            <a href="#" class="" aria-label="YouTube">
              <i class="pi pi-youtube"></i>
            </a>
            <a href="#" class="" aria-label="Instagram">
              <i class="pi pi-instagram"></i>
            </a>
            <a href="#" class="" aria-label="LinkedIn">
              <i class="pi pi-linkedin"></i>
            </a>
            <a href="#" class="" aria-label="Twitter">
              <i class="pi pi-twitter"></i>
            </a>
          </div>
        </div>
  
        <div>
          <ul class="space-y-4">
            <li>
              <span class="text-xs font-extralight mb-4 inline-block">تواصل معنا</span> <span class="bullet bullet-gray"></span>
              <p>+20 1000000000</p>
              <p>info@goolancer.com</p>
            </li>
            <li>
              <strong class="text-xs font-extralight mb-4 inline-block">زور مقرنا</strong> <span class="bullet bullet-gray"></span>
              <p dir="rtl">456 اسم الشارع، اسم الحي، المدينة</p>
              <p dir="rtl">10 ص - 6 م</p>
              <p>يومياً /</p>
            </li>
          </ul>
        </div>
  
        <div>
          <ul class="space-y-4">
            <li>
              <span class="text-xs font-extralight mb-4 inline-block">وظائفنا</span> <span class="bullet"></span>
              <ul>
                <li>تصميم جرافيك</li>
                <li>صناعة محتوى</li>
                <li>محتوى مرئي</li>
                <li>تسويق رقمي</li>
              </ul>
            </li>
            <li>
              <span class="text-xs font-extralight mb-4 inline-block">عن منصتنا</span> <span class="bullet bullet-gray"></span>
              <ul>
                <li>من نحن</li>
                <li>تواصل معنا</li>
                <li>انضم إلينا</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
  
      <!-- Footer Bottom -->
      <div dir="rtl" class="footer-container mx-auto pb-2 pt-24 text-right">
        <img src="../../assets/icons/general/logo.svg" alt="">
      </div>
      <div dir="rtl" class="footer-bottom mx-auto flex justify-between text-center text-gray-400">
        <div>
          <p class="text-xs text-[#D0D0C8]">جميع الحقوق محفوظة جوولانسر © 2025</p>
        </div>
        <div class="privacy">
          <a href="#" class="hover:text-white text-xs text-[#D0D0C8]">سياسة الخصوصية</a>
        </div>
        <p>
          <a href="#" class="hover:text-white ml-2 active text-sm text-[#D0D0C8]">العربية</a>
          <a href="#" class="hover:text-white text-xs text-[#D0D0C8]">Eng</a>
        </p>
      </div>
    </footer>
  </template>
  
    <style scoped>
      .footer {
          background-color: #222222;
          color: #D0D0C8;
      }
      .footer-bottom, .footer-container {
        width: 90%;
      }
      .socialmedia-border {
          border-top: 8px solid #D0D0C8;
      }
      .bullet {
          background-color: #94D401;
          border-radius: 50%;
          width: 10px;
          height: 10px;
          display: inline-block
      } 
      .bullet-gray {
          background-color: #D0D0C8;
          width: 8px;
          height: 8px;
      }
      .active {
        color: white;
      }
    </style>
    