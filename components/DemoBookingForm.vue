<template>
  <div>
    <div v-if="!formSubmitted" class="demo-booking-content">
      <h3 class="font-sans text-center">
        Product Demo
      </h3>
      <el-form
        ref="bookingFormRef"
        :model="bookingForm"
        :rules="rules"
        label-position="top"
        class="demo-booking-form"
      >
        <el-form-item label="Name" prop="name">
          <el-input v-model="bookingForm.name" placeholder="Name" clearable />
        </el-form-item>

        <el-form-item label="Email" prop="email">
          <el-input v-model="bookingForm.email" placeholder="Email" clearable />
        </el-form-item>

        <el-form-item label="Company" prop="company">
          <el-input v-model="bookingForm.company" placeholder="Company" clearable />
        </el-form-item>

        <el-form-item label="Date and time" prop="dateTime" required>
          <el-date-picker
            v-model="bookingForm.dateTime"
            type="datetime"
            placeholder="Pick a date an time"
            clearable
          />
        </el-form-item>

        <el-form-item class="mt-10 text-center w-full">
          <el-button class="button-submit" @click="onSubmit(bookingFormRef)">
            Submit
          </el-button>
        </el-form-item>
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
        <button class="button-primary btn" @click="handleClose">
          Go back
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus';

defineProps<{
  handleClose: () => void
}>()

interface BookingForm {
  name: string
  email: string
  company: string
  dateTime: string
}

const formSubmitted = ref(false);

const mail = useMail();

const bookingFormRef = ref<FormInstance>();
const bookingForm = reactive<BookingForm>({
  name: '',
  email: '',
  company: '',
  dateTime: '',
})

const rules = reactive<FormRules<BookingForm>>({
  name: [
    { required: true, message: 'Please input your name', trigger: 'blur' },
  ],
  email: [
    {
      required: true,
      message: 'Please input email address',
      trigger: 'blur',
    },
    {
      type: 'email',
      message: 'Please input correct email address',
      trigger: ['blur', 'change'],
    },
  ],
  company: [
    { required: true, message: 'Please input your company name', trigger: 'blur' },
  ],

  dateTime: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date and time',
      trigger: 'change',
    },
  ],
})

const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) {
    return;
  }

  await formEl.validate((valid, fields) => {
    if (valid) {
      mail.send({
        from: '"Adcatch Support" <support@teamconstructor.pro>',
        subject: 'Booking demo request from adcatch.pro',
        text: `User data:
                user name: ${bookingForm.name},
                user email: ${bookingForm.email},
                user company: ${bookingForm.company},
                user data and time: ${bookingForm.dateTime},`,
      })

      formSubmitted.value = true;
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<style lang="scss">
.demo-booking-form {
  .el-input {
    --el-input-width: 100%;
  }

  .button-submit {
    display: block;
    margin: 0 auto;
    width: 160px;
    height: 40px;
    background-color: #FF3D00;
    text-transform: uppercase;
    color: #fff;
    
    
    //:hover {
    //  background-color: #ff6433 !important;
    //}

    span {
      background-color: transparent;
    }
  }
}
.demo-booking-content {
  min-height: 422px;
}
</style>

