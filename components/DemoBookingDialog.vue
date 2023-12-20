<template>
  <button class="button-primary hidden md:inline-block" @click="dialogVisible = true">
    Book a demo
  </button>

  <el-dialog
    v-model="dialogVisible"
    width="30%"
    :before-close="handleClose"
  >
    <h3 class="font-sans">
      Product Demo
    </h3>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
  done()
}
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
