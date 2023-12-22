<template>
  <button class="button-primary hidden md:inline-block" @click="dialogVisible = true">
    Book a demo
  </button>

  <el-dialog
    v-model="dialogVisible"
    width="400px"
    :before-close="handleClose"
    :lock-scroll="true"
    :close-on-click-modal="false"
  >
    <div class="p-4 md:p-10 lg:p-20">
      <DemoBookingForm />
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
// const dialogVisible = ref(true)

const handleClose = (done: () => void) => {
  done()
}
</script>
<style lang="scss">
.el-dialog {

  .el-dialog__header, .el-dialog__body {
    padding: 0;
  }
}
</style>
