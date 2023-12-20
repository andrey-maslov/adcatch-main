<script setup>
const swiper = useSwiper()
</script>

<template>
  <button class="button-next hidden md:inline-block" @click="swiper.slideNext()">
    <Icon size="31px" :name="`tabler:chevron-right`" />
  </button>
  <button class="button-prev hidden md:inline-block" @click="swiper.slidePrev()">
    <Icon size="31px" :name="`tabler:chevron-left`" />
  </button>
</template>

<style>
.button-prev,
.button-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0 0 10px 0 #0000001A;
  width: 69px;
  height: 69px;
  background-color: #fff;
  border-radius: 50%;
  z-index: 100;
}

.button-prev {
  left: 10px;
}

.button-next {
  right: 10px;
}
</style>
