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

      <DemoBookingDialog button-text="Book a demo" />

      <!-- Mobile header -->
      <div class="block md:hidden">
        <button class="mobile-menu-btn ml-4" @click="drawer = true">
          <Icon size="24px" :name="`iconamoon:menu-burger-horizontal-fill`" />
        </button>

        <el-drawer
          v-model="drawer"
          :with-header="false"
          size="70%"
          direction="rtl"
        >
          <div class="">
            <div style="margin-bottom: 20px">
              <CustomLogo size="small" />
            </div>
            <nav class="nav">
              <div>
                <a class="flex items-center space-x-2.5" href="https://adcatch.pro/#/dashboard">
                  <Icon size="24px" :name="`material-symbols:dashboard`" />
                  <span>Dashboard</span>
                </a>
                <el-divider />
              </div>
              <a class="block" href="https://adcatch.pro/#/registration">
                <button class="ac-button-secondary">
                  Sign up
                </button>
              </a>
              <a class="block" href="https://adcatch.pro/#/login">
                <button class="ac-button-secondary-outlined">
                  Log in
                </button>
              </a>
            </nav>
          </div>
        </el-drawer>
      </div>
    </div>
  </header>
</template>

<script setup>
const drawer = ref(false);
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: column;

  a {
    display: block;
    width: 100%;
    min-width: 100%;

    button {
      display: block;
      width: 100%;
      margin-bottom: 20px;
    }
  }
}
</style>
