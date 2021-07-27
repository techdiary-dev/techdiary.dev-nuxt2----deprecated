<template>
  <div>
    <Navbar />
    <div class="dashboard-layout wrapper">
      <aside class="dashboard-layout__sidebar">
        <h1>Sidebar</h1>
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
    @apply w-52 flex-none p-2;
    @apply border-r border-gray-200 dark:border-gray-700;
  }

  &__main {
    @apply flex-auto;
  }
}
</style>
