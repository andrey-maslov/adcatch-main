<template>
  <Swiper
    :effect="'creative'"
    :modules="[SwiperEffectCreative]"
    :loop="true"
    :grabCursor="true"
    class="testimonials-slider"
    :creativeEffect="{
      prev: {
        shadow: false,
        translate: [0, 0, -100],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide v-for="item in items" :key="item.name">
      <article class="wrapper">
        <div class="text-gray-600 content">
          <img :src="item.avatar" alt="avatar" class="avatar">
          <div class="mb-4 text-2xl font-bold text-center">
            {{ item.name }}
          </div>
          <div class="mb-6 text-xl text-center">
            {{ item.position }}
          </div>
          <p class="text-xl text-center">
            {{ item.text }}
          </p>
        </div>
      </article>
    </SwiperSlide>
    <SwiperControls v-if="items.length > 1" />
  </Swiper>
</template>

<script lang="ts" setup>
import type { TestimonialItem } from '~/data/data';

const props = defineProps<{
  items: TestimonialItem[]
}>()

</script>

<style lang="scss" scoped>
.wrapper {
  padding: 50px 20px 20px;
  max-width: 610px;
  margin: 0 auto;
}
.content {
  position: relative;
  background-color: #fff;
  padding: 60px 20px 50px;
  min-height: 360px;
  border-radius: 20px;
  box-shadow: 0 0 10px 0 #0000001A;
  border: 1px solid #0000001A;
}
.avatar {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  max-width: 100%;
  width: 100px;
  height: 100px;
}
.swiper {
  //width: 1000px;
  //height: 500px;
}
.swiper-slide {
  color: #fff;
}
</style>
