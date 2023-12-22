<template>
  <div>
    <div v-if="!formSubmitted" class="demo-booking-content">
      <h3 class="font-sans text-center">
        Product Demo
      </h3>
      <el-form
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
    </div>

    <div v-if="formSubmitted" class="demo-booking-content flex flex-col">
      <div class="flex flex-col items-center justify-center grow">
        <h3 class="font-sans text-center mb-8">
          Thank you
        </h3>
        <p>The invitation will soon be sent</p>
      </div>
      <div class="text-center">
        <button class="button-primary" @click="onSubmit">
          Go back
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const bookingForm = reactive({
  name: '',
  email: '',
  company: '',
  dateTime: '',
})

const formSubmitted = ref(false);

const mail = useMail();

const onSubmit = (e) => {
  e.preventDefault();
  formSubmitted.value = true

  mail.send({
    from: '"Adcatch Support" <support@teamconstructor.pro>',
    subject: 'Booking demo request from adcatch.pro',
    text: `
    User data:
      user name: ${bookingForm.name},
      user email: ${bookingForm.email},
      user company: ${bookingForm.company},
      user data and time: ${bookingForm.dateTime},
    `,
  })
}
</script>

<style>
.demo-booking-form .el-input {
  --el-input-width: 100%;
}
.demo-booking-content {
  min-height: 422px;
}
</style>
