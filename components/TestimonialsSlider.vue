<template>
  <Swiper
    :effect="'creative'"
    :modules="[SwiperEffectCreative]"
    :loop="true"
    class="testimonialsSwiper"
    :creativeEffect="{
      prev: {
        shadow: false,
        translate: [0, 0, -400],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide v-for="item in items" :key="item.name">
      <article class="wrapper">
        <div class="content text-gray-600">
          <img :src="item.avatar" alt="avatar" class="avatar">
          <div class="font-bold text-2xl mb-4 text-center">
            {{ item.name }}
          </div>
          <div class="text-xl mb-6 text-center">
            {{ item.position }}
          </div>
          <p class="text-xl text-center">
            {{ item.text }}
          </p>
        </div>
      </article>
    </SwiperSlide>
    <button @click="swiper.slideNext()">
      Next
    </button>
    <button @click="swiper.slidePrev()">
      Previous
    </button>
  </Swiper>
  <!-- useSwiper() within a swiper instance -->
</template>

<script setup>

const swiper = useSwiper()
setTimeout(() => {
  console.log(swiper)
}, 2000)

const items = [
  {
    name: 'Nadia Zelenkova',
    position: 'CEO at Red Graphic',
    avatar: '/img/avatar-1.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut exercitationem facilis minus molestias. Consequuntur in libero quos unde voluptatem? Aliquam architecto doloribus, enim eveniet quaerat quis repellendus sed vero voluptas.'
  },
  {
    name: 'Nadia Zelenkova 2',
    position: 'CEO at Red Graphic 2',
    avatar: '/img/avatar-1.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut exercitationem facilis minus molestias. Consequuntur in libero quos unde voluptatem? Aliquam architecto doloribus, enim eveniet quaerat quis repellendus sed vero voluptas.'
  },
  {
    name: 'Nadia Zelenkova 3',
    position: 'CEO at Red Graphic 3',
    avatar: '/img/avatar-1.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut exercitationem facilis minus molestias. Consequuntur in libero quos unde voluptatem? Aliquam architecto doloribus, enim eveniet quaerat quis repellendus sed vero voluptas.'
  },
  {
    name: 'Nadia Zelenkova 4',
    position: 'CEO at Red Graphic 4',
    avatar: '/img/avatar-1.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut exercitationem facilis minus molestias. Consequuntur in libero quos unde voluptatem? Aliquam architecto doloribus, enim eveniet quaerat quis repellendus sed vero voluptas.'
  }
]
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
  width: 1000px;
  height: 500px;
}
.swiper-slide {
  color: #fff;
}
.swiper-button-prev {
  box-shadow: 0 0 10px 0 #0000001A !important;
  width: 69px !important;
  height: 69px !important;
  background-color: #fff;
}

#mySlider .swiper-button-prev,
#mySlider .swiper-button-next {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  color: #888888;
  --swiper-navigation-size: 20px;
}

</style>
