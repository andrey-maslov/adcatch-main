<template>
  <header class="flex items-center justify-between w-full gap-1 px-4 bg-white">
    <CustomLogo />
    <div class="flex items-center gap-2 md:gap-5">
      <a class="hidden md:inline-block" href="https://adcatch.pro/#/registration">
        <button class="ac-button-secondary">
          Sign up
        </button>
      </a>

      <a class="hidden md:inline-block" href="https://adcatch.pro/#/login">
        <button class="ac-button-secondary-outlined">
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
