<template>
  <button class="ac-button-primary" @click="dialogVisible = true">
    {{ buttonText }}
  </button>

  <el-dialog v-model="dialogVisible" width="360px" :lock-scroll="true" :close-on-click-modal="false" destroy-on-close
    lazy>
    <div class="p-4 md:p-8 lg:p-12">
      <DemoBookingForm :handle-close="handleClose" />
    </div>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  buttonText: { type: String, required: false, default: 'Book a product tour' }
})

const dialogVisible = ref(false);

const handleClose = () => {
  dialogVisible.value = false
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
