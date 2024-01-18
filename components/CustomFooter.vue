<template>
  <footer class="px-4 py-4 pb-0 text-white bg-black lg:px-20 xl:px-36 lg:py-12 xl:py-16">
    <div class="flex flex-wrap items-end">
      <div class="w-full mb-8 lg:w-1/4">
        <div class="mb-8">
          <CustomLogo size="large" />
        </div>
        <p>Adcatch OÜ,<br>Tallinn, Estonia,<br>All Rights Reserved.</p>
      </div>

      <div class="w-full mb-8 lg:text-right grow lg:w-3/4">
        <div class="inline-flex gap-4 mb-8">
          <a
            v-for="item in contacts"
            :key="item.title"
            :href="item.link"
            :aria-label="`Link to ${item.title}`"
            target="_blank"
            @click="onLinkClick(item.type)"
          >
            <Icon size="31px" :name="`uil:${item.title}`" />
          </a>
        </div>

        <div>
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
  </footer>
</template>

<script setup>
import CustomLogo from "~/components/CustomLogo.vue";

const { gtag } = useGtag()

const contacts = [
  {type: 'linkedin', title: 'linkedin', link: 'https://www.linkedin.com/company/adcatchpro'},
  {type: 'email', title: 'envelope', link: 'mailto:alex.vorozhun@adcatch.pro'},
]

const links = [
  {title: 'Privacy Policy', link: 'privacy-policy'},
]

const onLinkClick = (linkType) => {
  console.log('cl', linkType)
  gtag('event', `${linkType}_link_click`)
}

</script>

<style lang="scss" scoped>

</style>
