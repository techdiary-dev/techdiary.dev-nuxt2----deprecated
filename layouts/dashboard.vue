<template>
  <div>
    <Navbar />
    <div class="dashboard-layout wrapper">
      <aside class="dashboard-layout__sidebar app-border-color">
        <dashboard-menu />
      </aside>
      <main class="dashboard-layout__main">
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dashboard-layout {
  @apply flex min-h-screen;

  &__sidebar {
    @apply w-48 flex-none p-2;
    @apply border-r;
  }

  &__main {
    @apply flex-auto p-8;
  }
}
</style>

<script>
export default {
  middleware: ["auth"]
};
</script>
