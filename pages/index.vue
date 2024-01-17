<template>
  <div>
    <section class="ac-hero">
      <div class="text-center lg:text-left ac-hero-container">
        <h1 class="text-white mb-11 lg:mb-12 ac-header-1">
          Create <span class="text-primary">ads that</span> sell
        </h1>

        <h2 class="text-white ac-header-2 mb-11 lg:mb-12">
          <span class="text-primary">Data-driven</span> insights <span class="text-primary">for</span> marketing messaging
        </h2>

        <DemoBookingDialog />
      </div>
    </section>

    <section class="container ac-section-box ac-bordered">
      <h3 class="mb-0 ac-h4 text-primary">
        134.6%
      </h3>
      <h6 class="ac-h6">
        ROI
      </h6>
      <div class="items-center ac-mb-xl ac-flex-container-2">
        <div class="ac-flex-item-2">
          <CustomPicture src="/img/roi_opt.jpg" alt="roi increase" />
        </div>
        <div class="ac-flex-item-2">
          <p class="ac-text-2">
            In today's boom of e-commerce, PPC specialists must constantly analyse marketing performance from multiple
            sources. However, last-click attribution analytics does not demonstrate the long-term marketing impact, which
            leaves marketing professionals struggling to extract meaningful insights.
          </p>
        </div>
      </div>
      <div class="mx-auto text-center">
        <DemoBookingDialog />
      </div>
    </section>

    <section class="container ac-section-box ac-bordered">
      <h2 class="max-w-[1000px] mx-auto text-center ac-mb-md ac-header-2">
        <span class="text-primary">Ad</span>Catch <span class="text-primary">integrates</span> with advertising and sales
        <span class="text-primary">channels</span> to find main conversion <span class="text-primary">drivers</span>
      </h2>

      <div class="flex items-top justify-center mb-24 gap-12 pt-4 lg:gap-32 ac-mb-xl max-w-[1260px] mx-auto">
        <div>
          <CustomPicture src="/img/integrations-left_opt.png" alt="integrations" />
        </div>
        <div>
          <CustomPicture src="/img/integrations-right_opt.png" alt="integrations" />
        </div>
      </div>

      <div class="mx-auto ac-flex-container-3 ac-mb-xl">
        <div v-for="item in integrations" :key="item.title"
          class="p-4 lg:p-8 border-[1px] border-solid rounded-lg ac-flex-item-3 border-text">
          <h3 class="flex items-center mb-4 ac-header-3 lg:mb-10">
            <img :src="item.img" class="mr-3" alt="">
            {{ item.title }}
          </h3>
          <p class="ac-text-3">
            {{ item.content }}
          </p>
        </div>
      </div>

      <div class="mx-auto text-center">
        <DemoBookingDialog />
      </div>
    </section>

    <section class="container ac-section-box ac-bordered">
      <h2 class="max-w-[1000px] mx-auto text-center ac-mb-md ac-header-2">
        <span class="text-primary">Beyond</span> last-<span class="text-primary">click</span> attribution
      </h2>

      <div class="ac-subheader-1">
        Adcatch analyses historical data and determines the actual impact of every digital touch-point.
      </div>

      <div class="ac-flex-container-2">
        <div class="ac-flex-item-2 lg:order-last">
          <h3 class="ac-h5">
            Engagement Rate
          </h3>
          <CustomPicture src="/img/engagement-rate_opt.png" alt="Engagement Rate" />
        </div>
        <div class="ac-flex-item-2">
          <h3 class="ac-h5">
            Discover insights<br /> on marketing performance:
          </h3>
          <ul class="ac-text-2">
            <li>how advertising affects your sales</li>
            <li>how price change correlates with sales</li>
            <li>how to out-stand your competitors</li>
            <li>which materials catching customer's eyes</li>
            <li>what descriptions the most engaging</li>
            <li>what keywords generate the highest searchability</li>
          </ul>
        </div>
      </div>

      <div class="font-bold text-center ac-text-2 ac-mb-md">
        and many more e-commerce insights straight from the box
      </div>

      <div class="mx-auto text-center">
        <DemoBookingDialog />
      </div>
    </section>

    <section class="container features ac-section-box ac-bordered">
      <h2 class="max-w-2xl mx-auto text-center ac-mb-md ac-header-2">
        All <span class="text-primary">marketing</span> campaigns <span class="text-primary">in one place</span>
      </h2>

      <div class="ac-subheader-1">
        Seamlessly collect
        data from diverse sources and transform complex data into clear and insightful reports.
      </div>

      <!--   IMAGE dashboard    -->
      <div class="text-center ac-mb-xl">

        <picture class="inline-block">
          <source srcset="/img/dashboard_opt.webp 1x, /img/dashboard_opt@2x.webp 2x" type="image/webp">
          <source srcset="/img/dashboard_opt.jpeg 1x, /img/dashboard_opt@2x.jpeg 2x" type="image/jpeg">
          <img src="/img/dashboard_opt.jpeg" alt="Description of the image">
        </picture>


      </div>

      <div class="ac-flex-container-3 ac-mb-xl">
        <div v-for="feature in features" :key="feature.title" class="py-3 ac-flex-item-3 lg:py-0">
          <h3 class="ac-h4">
            {{ feature.title }}
          </h3>
          <p class="ac-text-2">
            {{ feature.content }}
          </p>
        </div>
      </div>

      <div class="mx-auto text-center">
        <DemoBookingDialog />
      </div>
    </section>

    <section class="container ac-section-box ac-bordered">
      <h2 class="max-w-2xl mx-auto text-center ac-mb-md ac-header-2">
        <span class="text-primary">Advanced</span> audience <span class="text-primary">segmentation</span>
      </h2>

      <div class="ac-subheader-1">
        Break up your audience based on various criteria, such as demographics, interests, and behavior, to gain deeper
        insights and deliver more relevant messaging.
      </div>

      <div class=" ac-flex-container-3">
        <div v-for="feature in featuresAudience" :key="feature.title"
          class="ac-flex-item-3 p-4 lg:p-8 border-[1px] lg:border-0 border-solid rounded-lg ac-flex-item-3 border-text max-w-[500px]">
          <h3 class="mb-4 lg:mb-6">
            {{ feature.title }}
          </h3>
          <CustomPicture :src="feature.img" :alt="feature.title" />
        </div>
      </div>
    </section>

    <section v-if="testimonials.length > 0" class="container ac-section-box">
      <h2 class="hidden max-w-2xl mx-auto mb-10 text-center lg:mb-20 ac-header-2 lg:block">
        Identify and <span class="text-primary">eliminate</span>
        wasteful ad <span class="text-primary">spend</span> and
        <span class="text-primary">improve</span> your <span class="text-primary">ROAS</span>
      </h2>
      <div class="mb-8 -mx-4 lg:mb-20 lg:mx-0">
        <LazyTestimonialsSlider :items="testimonials" />
      </div>
      <div class="mx-auto mb-8 text-center">
        <DemoBookingDialog />
      </div>
      <p class="hidden text-center lg:block">
        (no credit card required)
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">

import { featuresAudience, features, integrations, testimonials } from '../data/data'

</script>

<style lang="scss" scoped></style>
