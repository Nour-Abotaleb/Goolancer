<script setup>

</script>
<template>
  <div dir="rtl" class="hero-section text-white relative">
    <div class="m-auto flex flex-col lg:flex-row justify-between items-center space-y-20 lg:space-y-0 relative z-10">
      <div class="hero-title text-center lg:text-right">
        <h1 class="lg:text-4xl text-3xl font-bold lg:leading-loose mt-40 lg:mt-60">
          دعنا نهتم بالتفاصيل <br />
          لأن التفاصيل تصنع الفرق!
        </h1>
        <p class="lg:text-lg my-8 leading-loose">
          في عالم مليء بالتفاصيل الدقيقة، نؤمن أن اللمسات الصغيرة تصنع الفارق الكبير. لهذا السبب، نقدم خدماتنا بعناية
          فائقة ودقة متناهية لضمان حصولك على النتائج التي تتطلع إليها وأكثر.
        </p>
        <a
          href="#"
          class="bg-[#fff] text-black text-sm rounded-full py-3 ps-4 inline"
        >
          اكتشف وظائفنا
          <img
            src="../../../assets/icons/general/arrow-up-left.svg"
            class="inline rounded-full bg-[#94D401] me-1 w-8"
            alt=""
          />
        </a>
      </div>
    </div>

    <!-- Hero Image -->
    <img
      src="../../../assets/images/home/hero.png"
      class="hero-img lg:flex hidden absolute bottom-0 left-0 w-1/2 max-w-[] object-contain z-0"
      alt="Hero Image"
    />
  </div>
</template>

<style scoped>
.hero-section {
  background: url("../../../assets/images/home/hero-background.svg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  position: relative;
}

.hero-section > div {
  width: 90%;
  position: relative;
  z-index: 10; /* Ensure content appears above the image */
}

.hero-title p {
  width: 460px;
}
</style>
