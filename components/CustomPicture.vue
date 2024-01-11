<template>
  <picture class="inline-block mx-auto">
    <source :srcset="`${srcWOFormat}.webp`" type="image/webp">
    <source :srcset="props.src" :type="`image/${format}`">
    <img :src="props.src" :alt="props.alt">
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
const props = defineProps({
  src: String,
  alt: { type: String, required: false, default: '' },
})

const format = props.src.split('.')?.[1] ?? 'jpg';
const srcWOFormat = props.src.split('.')?.[0] ?? '';
</script>

<style lang="scss" scoped></style>
