<template>
  <picture class="block picture-wrapper">
    <source :srcset="`${srcWOFormat}.webp 1x, ${srcWOFormat}@2x.webp 2x`" type="image/webp">
    <source :srcset="`${srcWOFormat}.${format} 1x, ${srcWOFormat}@2x.${format} 2x`" :type="`image/${format}`">
    <img :src="props.src" :alt="props.alt">
  </picture>
</template>

<script setup>
const props = defineProps({
  src: String,
  alt: { type: String, required: false, default: '' },
})

const format = props.src.split('.')?.[1] ?? 'jpg';
const srcWOFormat = props.src.split('.')?.[0] ?? '';
</script>

<style lang="scss" scoped>
.picture-wrapper {
  text-align: center;

  img {
  display: inline-block;
  max-width: 100%;
  height: auto;
}
}
</style>
