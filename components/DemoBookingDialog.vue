<template>
  <button class="ac-button-primary" @click="handleOpen">
    {{ props.buttonText }}
  </button>
</template>

<script setup>
const { gtag } = useGtag();

const { initPopupWidget } = useCalendly()

const props = defineProps({
  buttonText: { type: String, required: false, default: 'Book a product tour' },
  place: { type: String, required: false, default: '2' }
})

const options = {
  url: 'https://calendly.com/alex-vorozhun/adcatch-product-tour',
}

const handleOpen = () => {
  // Currently we use 3rd party service Calendly
  // to render booking popup with the all content and forms
  // However, we had our form that is works (find in history, restore and add SMTP credentials)
  initPopupWidget(options)

  gtag('event', 'booking_dialog_opened', {
    place: props.place
  })
}
</script>
<style lang="scss"></style>
