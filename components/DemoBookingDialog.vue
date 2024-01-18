<template>
  <button class="ac-button-primary" @click="handleOpen">
    {{ props.buttonText }}
  </button>

<!--  <el-dialog-->
<!--    v-model="dialogVisible"-->
<!--    width="360px"-->
<!--    :lock-scroll="true"-->
<!--    :close-on-click-modal="false"-->
<!--    destroy-on-close-->
<!--    lazy-->
<!--    <div class="p-4 md:p-8 lg:p-12">-->
<!--      <DemoBookingForm :handle-close="handleClose" />-->
<!--    </div>-->
<!--  </el-dialog>-->
</template>

<script setup>
import { ref } from 'vue';

const { gtag } = useGtag();

const { initPopupWidget } = useCalendly()

const props = defineProps({
  buttonText: { type: String, required: false, default: 'Book a product tour' },
  place: { type: String, required: false, default: '2' }
})

const dialogVisible = ref(false);

const options = {
  url: 'https://calendly.com/alex-vorozhun/adcatch-product-tour',
}

const handleClose = () => {
  dialogVisible.value = false
}

const handleOpen = () => {
  // dialogVisible.value = true;

  // Currently we use 3rd party service Calendly
  // to render booking popup with the all content and forms
  // However, we have our form that is works (need to uncomment and add SMTP credentials)
  initPopupWidget(options)

  gtag('event', 'booking_dialog_opened', {
    place: props.place
  })
}
</script>
<style lang="scss">
.el-dialog {

  .el-dialog__header,
  .el-dialog__body {
    padding: 0;
  }
}
</style>
