<template>
  <div>
    <section class="hero">
      <div class="container section-box">
        <p class="font-heading text-2xl text-white mb-12">
          Welcome!
        </p>

        <h1 class="text-white mb-12 header-1">
          Monitor <span class="text-primary">your Ads</span><br>
          with <span class="text-primary">AD</span>catch
        </h1>

        <button class="button-primary mb-12">
          Onboard
        </button>

        <h2 class="text-white header-2">
          <span class="text-primary">All campaign</span> reports in one platform
        </h2>
      </div>
    </section>

    <section class="features container section-box bordered">
      <h2 class="text-center max-w-2xl mx-auto mb-10 md:mb-20 header-2">
        <span class="text-primary">Enhance</span> your <span class="text-primary">ROAS</span> and <span
          class="text-primary"
        >achieve</span>
        your marketing <span class="text-primary">goals</span>
      </h2>

      <div class="flex justify-between flex-wrap gap-3">
        <div v-for="feature in features" :key="feature.title" class="w-full md:w-1/4 mb-4 md:mb-20">
          <h3 class="mb-4 md:mb-6">
            {{ feature.title }}
          </h3>
          <p class="text-xl md:text-2xl">
            {{ feature.content }}
          </p>
        </div>
      </div>

      <!--   IMAGE here     -->
      <div class="mb-12">
        <picture>
          <img src="/img/features_opt.png" alt="Adcatch dashboard screenshot">
        </picture>
      </div>

      <button class="button-primary mx-auto block">
        Start using for free
      </button>
    </section>

    <section class="container section-box bordered">
      <h2 class="text-center max-w-2xl mx-auto mb-10 md:mb-20 header-2">
        <span class="text-primary">Save</span> time and <span class="text-primary">hassle</span> by automating the
        process
      </h2>

      <div class="text-xl md:text-2xl max-w-4xl mx-auto mb-20 leading-7 md:leading-8">
        <p class="mb-3">
          We are engaged in digital promotion and launch of hundreds of advertising campaigns.
        </p>
        <p class="mb-3">
          Analyzing and comparing various metrics, monitoring KPIs and switching between different ad networks was
          part of our daily routine. So we decided to launch a platform that will help automate reporting and get
          online information about any indicators of advertising campaigns.
        </p>
        <p>Sign up for AdCatch to optimize your campaigns right now!</p>
      </div>

      <div class="text-center">
        <DemoBookingDialog />
      </div>
    </section>

    <section class="container section-box">
      <h2 class="text-center max-w-2xl mx-auto mb-10 md:mb-20 header-2">
        Identify and <span class="text-primary">eliminate</span>
        wasteful ad <span class="text-primary">spend</span> and
        <span class="text-primary">improve</span> your <span class="text-primary">ROAS</span>.
      </h2>

      <!--    TESTIMONIALS here    -->
      <div class="mb-20">
        <LazyTestimonialsSlider />
      </div>

      <button class="button-primary mx-auto block mb-8">
        Start using for free
      </button>

      <p class="text-center">
        (no credit card required)
      </p>
    </section>
  </div>
</template>

<script setup>
const features = [
  {title: 'Customize reports', content: 'Choose period and indicators according to your tasks'},
  {title: 'Set KPI’s', content: 'Mark indicators and track their effectiveness online'},
  {title: 'Track any ad network', content: 'AdCatch supports all the main networks'},
]
</script>

<style lang="scss" scoped>

</style>
