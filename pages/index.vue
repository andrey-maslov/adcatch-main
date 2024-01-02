<template>
  <div>
    <section class="hero">
      <div class="container section-box">

        <h1 class="mb-12 text-white header-1">
          Create <span class="text-primary">ads that</span> sell
        </h1>

        <h2 class="text-white header-2">
          <span class="text-primary">Data-driven</span> insights <span class="text-primary">for</span> marketing messaging
        </h2>

        <DemoBookingDialog />
      </div>
    </section>

    <section class="container section-box bordered">
      <h3 class="header-3 text-primary">
        134.6%
      </h3>
      <h5 class="header-5">
        ROI
      </h5>
      <div class="flex flex-wrap gap-3 md:flex-nowrap">
        <div class="w-full mb-4 md:w-1/2 md:mb-20">
          <picture>
            <img src="/img/feature-aud-1.png" alt="Adcatch dashboard screenshot">
          </picture>
        </div>
        <div class="w-full mb-4 md:w-1/2 md:mb-20">
          <p class="text-xl md:text-3xl">
            In today's boom of e-commerce, PPC specialists must constantly analyse marketing performance from multiple
            sources. However, last-click attribution analytics does not demonstrate the long-term marketing impact, which
            leaves marketing professionals struggling to extract meaningful insights.
          </p>
        </div>
      </div>
      <div class="mx-auto mb-8 text-center">
        <DemoBookingDialog />
      </div>
    </section>

    <section class="container section-box bordered">
      <h2 class="max-w-[1000px] mx-auto mb-10 text-center md:mb-20 header-2">
        <span class="text-primary">Ad</span>Catch <span class="text-primary">integrates</span> with advertising and sales
        <span class="text-primary">channels</span> to find main conversion <span class="text-primary">drivers</span>
      </h2>
      <div class="mb-24">
        <picture>
          <img src="/img/integrations.png" alt="integrations">
        </picture>
      </div>

      <div class="flex flex-wrap justify-between gap-3">
        <div v-for="item in integrations" :key="item.title" class="w-full mb-4 md:w-1/4 md:mb-20">
          <h3 class="mb-4 header-3 md:mb-6">
            {{ item.title }}
          </h3>
          <p class="text-lg md:text-xl">
            {{ item.content }}
          </p>
        </div>
      </div>

      <div class="mx-auto mb-8 text-center">
        <DemoBookingDialog />
      </div>
    </section>

    <section class="container features section-box bordered">
      <h2 class="max-w-2xl mx-auto mb-10 text-center md:mb-20 header-2">
        All <span class="text-primary">marketing</span> campaigns <span class="text-primary">in one place</span>
      </h2>

      <p class="max-w-4xl mx-auto mb-8 text-xl leading-7 text-center md:text-2xl lg:mb-20 md:leading-8">Seamlessly collect
        data from diverse sources and transform complex data into clear and insightful reports.</p>

      <!--   IMAGE here     -->
      <div class="mb-12">
        <picture>
          <img src="/img/features-2.png" alt="Adcatch dashboard screenshot">
        </picture>
      </div>

      <div class="flex flex-wrap justify-between gap-3">
        <div v-for="feature in features" :key="feature.title" class="w-full mb-4 md:w-1/4 md:mb-20">
          <h3 class="mb-4 md:mb-6">
            {{ feature.title }}
          </h3>
          <p class="text-xl md:text-2xl">
            {{ feature.content }}
          </p>
        </div>
      </div>

      <div class="mx-auto text-center">
        <DemoBookingDialog />
      </div>
    </section>

    <section class="container section-box bordered">
      <h2 class="max-w-2xl mx-auto mb-10 text-center md:mb-20 header-2">
        <span class="text-primary">Advanced</span> audience <span class="text-primary">segmentation</span>
      </h2>

      <div class="max-w-4xl mx-auto mb-8 text-xl leading-7 text-center md:text-2xl lg:mb-20 md:leading-8">
        Break up your audience based on various criteria, such as demographics, interests, and behavior, to gain deeper
        insights and deliver more relevant messaging.
      </div>

      <div class="flex flex-wrap justify-between gap-3">
        <div v-for="feature in featuresAudience" :key="feature.title" class="w-full mb-4 md:w-1/4 md:mb-20">
          <h3 class="mb-4 md:mb-6">
            {{ feature.title }}
          </h3>
          <picture>
            <img src="/img/feature-aud-1.png" alt="Adcatch audience">
          </picture>
        </div>
      </div>
    </section>

    <section class="container section-box">
      <h2 class="max-w-2xl mx-auto mb-10 text-center md:mb-20 header-2">
        Identify and <span class="text-primary">eliminate</span>
        wasteful ad <span class="text-primary">spend</span> and
        <span class="text-primary">improve</span> your <span class="text-primary">ROAS</span>.
      </h2>

      <!--    TESTIMONIALS here    -->
      <div class="mb-8 -mx-4 lg:mb-20 md:mx-0">
        <LazyTestimonialsSlider />
      </div>

      <div class="mx-auto mb-8 text-center">
        <DemoBookingDialog />
      </div>

      <p class="text-center">
        (no credit card required)
      </p>
    </section>
  </div>
</template>

<script setup>
const features = [
  { title: 'Hassle free automated process', content: 'Send customised reports to your or client’s team' },
  { title: 'Compare with planned KPIs', content: 'Easily add planned performance and track effectiveness continuously' },
  { title: 'Eliminate wasteful ad spend', content: 'Reveal the most effective ads, best-selling periods and best-matching audience' },
]

const featuresAudience = [
  { title: 'Interests', img: 'Send customised reports to your or client’s team' },
  { title: 'Age&Gender ', img: 'Easily add planned performance and track effectiveness continuously' },
  { title: 'Geo', img: 'Reveal the most effective ads, best-selling periods and best-matching audience' },
]

const integrations = [
  { title: 'For Brands', content: 'Track customer’s attention across multiple sales channels and apply the findings to your next marketing campaign', img: '' },
  { title: 'FOR Sellers ', content: 'Uncover insights from every aspect of your campaigns by tracking ad formats, messaging, devices, locations, time, audience, goals, keywords, bidding strategies, attribution models, conversions and much more.', img: '' },
  { title: 'FOR agencies', content: 'Empower clients with real-time insights and strengthen your agency-client relationship with transparent marketing', img: '' },
]
</script>

<style lang="scss" scoped></style>
