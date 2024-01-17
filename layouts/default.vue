<template>
  <div class="app">
    <CustomHeader />

    <main>
      <slot />
    </main>

    <CustomFooter />
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.app {
  position: relative;
  padding-top: 96px;

  header {
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 4px 4px 0 #00000040;
    height: 96px;
    z-index: 200;
  }
}

@media only screen and (max-width: 768px) {
  .app {
    padding-top: 76px;

    header {
      height: 76px;
    }
  }
}
</style>
