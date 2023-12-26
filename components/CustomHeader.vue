<template>
  <header class="flex gap-1 justify-between items-center px-4 bg-white w-full">
    <CustomLogo />
    <div class="buttons flex items-center gap-2 md:gap-5">
      <a class="hidden md:inline-block" href="https://adcatch.pro/#/registration">
        <button class="button-secondary">
          Sign up
        </button>
      </a>

      <a class="hidden md:inline-block" href="https://adcatch.pro/#/login">
        <button class="button-secondary-outlined">
          Log in
        </button>
      </a>

      <DemoBookingDialog />
    </div>
  </header>
</template>

<script>
</script>

<style lang="scss" scoped>

</style>
