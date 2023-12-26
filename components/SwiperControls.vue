<script setup>
const swiper = useSwiper()
</script>

<template>
  <div class="flex justify-between px-10 md:px-0 md:block">
    <button class="button-prev" aria-label="Previous slide" @click="swiper.slidePrev()">
      <Icon size="31px" :name="`tabler:chevron-left`" />
    </button>
    <button class="button-next" aria-label="Next slide" @click="swiper.slideNext()">
      <Icon size="31px" :name="`tabler:chevron-right`" />
    </button>
  </div>
</template>

<style lang="scss">
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
  transition: all .2s ease-in-out;

  &:hover {
    box-shadow: 0 0 4px 0 #0000001A;
    background-color: #E3E3E319;
  }
}

.button-prev {
  left: 10px;
}

.button-next {
  right: 10px;
}

@media only screen and (max-width: 768px) {
  .button-prev,
  .button-next {
    position: relative;
    width: 80px;
    height: 40px;
    margin-top: 20px;
    border-radius: 3px;
  }

  .button-prev {
    left: 0;
  }

  .button-next {
    right: 0;
  }
}
</style>
