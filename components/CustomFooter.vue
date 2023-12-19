<template>
  <div class="px-12 py-8 bg-zinc-700 text-white">
    <div class="flex items-end">
      <div>
        <div class="mb-8">
          <CustomLogo />
        </div>
        <p>Adcatch OÜ,<br>Tallinn, Estonia,<br>All Rights Reserved.</p>
      </div>

      <div class="text-right grow">
        <div class="social-media inline-flex gap-4 mb-4">
          <a v-for="item in contacts" :key="item.title" :href="item.link">
            <Icon size="31px" :name="`uil:${item.title}`" />
          </a>
        </div>

        <div class="links">
          <NuxtLink
            v-for="item in links"
            :key="item.title"
            class="text-xl [&:not(:last-child)]:mr-16"
            :to="item.link"
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
  {icon: '', title: 'linkedin', link: ''},
  {icon: '', title: 'envelope', link: ''},
]

const links = [
  {title: 'Terms of service', link: '/terms'},
  {title: 'Privacy Policy', link: 'privacy-policy'},
]

</script>

<style lang="scss" scoped>

</style>
