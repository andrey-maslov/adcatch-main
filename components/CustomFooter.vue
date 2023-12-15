<template>
  <div class="px-12 py-8 bg-zinc-700 text-white">
    <div class="flex">
      <div>
        <div class="mb-2">
          <CustomLogo />
        </div>
        <p>Adcatch OÜ,<br>Tallinn, Estonia,<br>All Rights Reserved.</p>
      </div>

      <div class="text-right grow">
        <div class="social-media">
          <a v-for="item in contacts" :key="item.title" :href="item.link">{{ item.title }}</a>
        </div>

        <div class="links">
          <NuxtLink
            v-for="item in links"
            :key="item.title"
            :to="item.link"
            target="_blank"
          >
            {{ item.title }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CustomLogo from "~/components/CustomLogo.vue";

const contacts = [
  {icon: '', title: 'facebook', link: ''},
  {icon: '', title: 'instagram', link: ''},
  {icon: '', title: 'email', link: ''},
]

const links = [
  {title: 'Terms of service', link: '/terms-of-service'},
  {title: 'Privacy Policy', link: 'privacy-policy'},
]

</script>

<style lang="scss" scoped>

</style>
