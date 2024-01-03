<template>
  <div>
    <section class="ac-hero">
      <div class="container ac-section-box">

        <h1 class="mb-12 text-white ac-header-1">
          Create <span class="text-primary">ads that</span> sell
        </h1>

        <h2 class="text-white ac-header-2">
          <span class="text-primary">Data-driven</span> insights <span class="text-primary">for</span> marketing messaging
        </h2>

        <DemoBookingDialog />
      </div>
    </section>

    <section class="container ac-section-box ac-bordered">
      <h3 class="ac-header-3 text-primary">
        134.6%
      </h3>
      <h6 class="ac-header-6">
        ROI
      </h6>
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

    <section class="container ac-section-box ac-bordered">
      <h2 class="max-w-[1000px] mx-auto mb-10 text-center md:mb-20 ac-header-2">
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
          <h3 class="flex items-center mb-4 header-3 md:mb-6">
            <img :src="item.img" alt="" />
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

    <section class="container ac-section-box ac-bordered">
      <h2 class="max-w-[1000px] mx-auto mb-10 text-center md:mb-20 ac-header-2">
        <span class="text-primary">Beyond</span> last-<span class="text-primary">click</span> attribution
      </h2>

      <p class="ac-subheader-1">
        Adcatch analyses historical data and determines the actual impact of every digital touch-point.
      </p>

      <div class="flex flex-wrap gap-3 md:flex-nowrap">
        <div class="w-full mb-4 md:w-1/2 md:mb-20">
          <h3>Discover insights on marketing performance:</h3>
          <ul>
            <li>how advertising affects your sales</li>
            <li>how price change correlates with sales</li>
            <li>how to out-stand your competitors</li>
            <li>which materials catching customer's eyes</li>
            <li>what descriptions the most engaging</li>
            <li>what keywords generate the highest searchability</li>
          </ul>
        </div>
        <div class="w-full mb-4 md:w-1/2 md:mb-20">
          <h3>Engagement Rate</h3>
          <picture>
            <img src="/img/historical.png" alt="Adcatch dashboard screenshot">
          </picture>
        </div>
      </div>

      <p class="text-center">and many more e-commerce insights straight from the box</p>

      <div class="mx-auto mb-8 text-center">
        <DemoBookingDialog />
      </div>
    </section>

    <section class="container features ac-section-box ac-bordered">
      <h2 class="max-w-2xl mx-auto mb-10 text-center md:mb-20 ac-header-2">
        All <span class="text-primary">marketing</span> campaigns <span class="text-primary">in one place</span>
      </h2>

      <p class="ac-subheader-1">Seamlessly collect
        data from diverse sources and transform complex data into clear and insightful reports.</p>

      <!--   IMAGE here     -->
      <div class="mb-12 text-center">
        <picture>
          <img src="/img/features-2.png" class="mx-auto ac-img-responsive" alt="Adcatch dashboard screenshot">
        </picture>
      </div>

      <div class="flex flex-wrap justify-between gap-3">
        <div v-for="feature in features" :key="feature.title" class="w-full mb-4 md:w-1/4 md:mb-20">
          <h3 class="mb-4 md:mb-6">
            {{ feature.title }}
          </h3>
          <p class="ac-subheader-1">
            {{ feature.content }}
          </p>
        </div>
      </div>

      <div class="mx-auto text-center">
        <DemoBookingDialog />
      </div>
    </section>

    <section class="container ac-section-box ac-bordered">
      <h2 class="max-w-2xl mx-auto mb-10 text-center md:mb-20 ac-header-2">
        <span class="text-primary">Advanced</span> audience <span class="text-primary">segmentation</span>
      </h2>

      <p class="ac-subheader-1">
        Break up your audience based on various criteria, such as demographics, interests, and behavior, to gain deeper
        insights and deliver more relevant messaging.
      </p>

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

    <!-- <section class="container ac-section-box">
      <h2 class="max-w-2xl mx-auto mb-10 text-center md:mb-20 ac-header-2">
        Identify and <span class="text-primary">eliminate</span>
        wasteful ad <span class="text-primary">spend</span> and
        <span class="text-primary">improve</span> your <span class="text-primary">ROAS</span>.
      </h2>
      <div class="mb-8 -mx-4 lg:mb-20 md:mx-0">
        <LazyTestimonialsSlider />
      </div>
      <div class="mx-auto mb-8 text-center">
        <DemoBookingDialog />
      </div>
      <p class="text-center">
        (no credit card required)
      </p>
    </section> -->
    
  </div>
</template>

<script setup>
const features = [
  { title: 'Hassle free automated process', content: 'Send customised reports to your or client’s team' },
  { title: 'Compare with planned KPIs', content: 'Easily add planned performance and track effectiveness continuously' },
  { title: 'Eliminate wasteful ad spend', content: 'Reveal the most effective ads, best-selling periods and best-matching audience' },
]

const featuresAudience = [
  { title: 'Interests', img: '' },
  { title: 'Age&Gender ', img: '' },
  { title: 'Geo', img: '' },
]

const integrations = [
  {
    title: 'For Brands',
    content: 'Track customer’s attention across multiple sales channels and apply the findings to your next marketing campaign',
    img: '/img/management-people.svg'
  },
  {
    title: 'FOR Sellers ',
    content: 'Uncover insights from every aspect of your campaigns by tracking ad formats, messaging, devices, locations, time, audience, goals, keywords, bidding strategies, attribution models, conversions and much more.',
    img: '/img/presentation.svg'
  },
  {
    title: 'FOR agencies',
    content: 'Empower clients with real-time insights and strengthen your agency-client relationship with transparent marketing',
    img: '/img/connection.svg'
  },
]
</script>

<style lang="scss" scoped></style>
