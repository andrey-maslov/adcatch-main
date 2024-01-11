<template>
  <NuxtLink to="/" class="logo font-heading" :class="size">
    <span class="text-primary">AD</span>
    <span>CATCH</span>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  size?: 'large' | 'medium' | 'small'
}>()
</script>

<style scoped lang="scss">
.logo {
  position: relative;
  bottom: -5px;
  line-height: unset;
  font-size: 40px;
}
.logo.large {
  font-size: 64px;
}

@media only screen and (max-width: 768px) {
  .logo {
    font-size: 36px;
  }
  .logo.large {
    font-size: 64px;
  }
}
</style>
