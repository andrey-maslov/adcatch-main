<template>
  <header class="flex items-center justify-between w-full gap-1 px-6 bg-white">
    <CustomLogo />
    <div class="flex items-center gap-2 md:gap-5">
      <div v-if="showLogin && showButtons">
        <a class="hidden md:inline-block md:mr-5" :href="registrationUrl">
          <button class="ac-button-secondary">
            Sign up
          </button>
        </a>
        <a class="hidden md:inline-block" :href="loginUrl">
          <button class="ac-button-secondary-outlined">
            Log in
          </button>
        </a>
      </div>

      <a v-else class="hidden md:inline-block" :href="dashboardUrl">
        <button class="ac-button-secondary-outlined">
          Dashboard
        </button>
      </a>

      <div class="hidden md:inline-block">
        <DemoBookingDialog button-text="Book a demo" place="1" />
      </div>

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
              <div v-if="!showLogin && showButtons">
                <a class="flex items-center space-x-2.5" :href="dashboardUrl">
                  <Icon size="24px" :name="`material-symbols:dashboard`" />
                  <span>Dashboard</span>
                </a>
                <el-divider />
              </div>
              <div v-else>
                <a class="block" :href="registrationUrl">
                  <button class="ac-button-secondary">
                    Sign up
                  </button>
                </a>
                <a class="block" :href="loginUrl">
                  <button class="ac-button-secondary-outlined">
                    Log in
                  </button>
                </a>
              </div>
            </nav>
          </div>
        </el-drawer>
      </div>
    </div>
  </header>
</template>

<script setup>
import { loginUrl, dashboardUrl, registrationUrl } from '../constants/constants';
const loginCookie = useCookie('loggedIn')

const drawer = ref(false);
const showLogin = ref(true);
const showButtons = ref(false);

if (typeof loginCookie.value !== 'undefined') {
  showLogin.value = false;
  showButtons.value = true;
} else {
  showButtons.value = true;
}
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
