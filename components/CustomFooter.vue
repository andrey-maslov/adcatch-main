<template>
  <div class="px-4 py-4 md:px-10 xl:px-12 md:py-8 pb-0 bg-zinc-700 text-white">
    <div class="flex flex-wrap items-end">
      <div class="w-full md:w-1/4 mb-8">
        <div class="mb-8">
          <CustomLogo size="large" />
        </div>
        <p>Adcatch OÜ,<br>Tallinn, Estonia,<br>All Rights Reserved.</p>
      </div>

      <div class="md:text-right grow w-full md:w-3/4 mb-8">
        <div class="social-media inline-flex gap-4 mb-8">
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
