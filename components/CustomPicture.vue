<template>
  <picture>
    <source :srcset="`${src}.webp`" type="image/webp">
    <source :srcset="`${src}.jpg`" type="image/jpeg">
    <source :srcset="`${src}.png`" type="image/png">
    <img :src="`${src}.${defaultFormat}`" :alt="alt" />
  </picture>
  <!-- <picture>
    <source media="(min-width: 36em)" srcset="large.jpg  1024w,
         medium.jpg 640w,
         small.jpg  320w" sizes="33.3vw" />
    <source srcset="cropped-large.jpg 2x,
         cropped-small.jpg 1x" />
    <img src="small.jpg" alt="A rad wolf" />
  </picture> -->
</template>

<script setup>
defineProps({
  src: String,
  alt: String,
  defaultFormat: { type: String, default: 'jpg' }
})
</script>

<style lang="scss" scoped></style>
