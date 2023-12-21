<template>
  <div>
    <el-form
      v-if="!formSubmitted"
      :model="bookingForm"
      label-position="top"
      class="demo-booking-form"
    >
      <el-form-item label="Name">
        <el-input v-model="bookingForm.name" placeholder="Name" clearable />
      </el-form-item>

      <el-form-item label="Email">
        <el-input v-model="bookingForm.email" placeholder="Email" clearable />
      </el-form-item>

      <el-form-item label="Company">
        <el-input v-model="bookingForm.company" placeholder="Company" clearable />
      </el-form-item>

      <el-form-item label="Date and time">
        <el-date-picker
          v-model="bookingForm.dateTime"
          type="datetime"
          placeholder="Pick a date an time"
          clearable
        />
      </el-form-item>

      <div class="mt-10 text-center">
        <button class="button-primary" @click="onSubmit">
          Submit
        </button>
      </div>
    </el-form>

    <div v-else>
      <h3 class="font-sans">
        Thank you
      </h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import {ref} from "vue/dist/vue";

const bookingForm = reactive({
  name: '',
  email: '',
  company: '',
  dateTime: '',
})

const formSubmitted = ref(false)

const onSubmit = (e:  any) => {
  e.preventDefault();
}
</script>

<style>
.demo-booking-form .el-input {
  --el-input-width: 100%;
}
</style>
