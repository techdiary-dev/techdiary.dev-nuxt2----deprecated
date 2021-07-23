<template>
  <div>
    <Navbar />

    <div class="layout wrapper">
      <aside class="layout__aside layout__aside--left">
        <widgets-action-links />
        <div class="mt-4 ">
          <widgets-tags />
        </div>
      </aside>

      <main class="layout__main">
        <Nuxt />
      </main>

      <aside class="layout__aside layout__aside--right">
        <div class="flex flex-col gap-6 ">
          <widgets-top-writters />
          <widgets-latest-registered-users />
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout {
  @apply grid grid-cols-12;

  &__aside {
    @apply sticky top-0 px-6;
    @apply self-start top-[50px];

    &--left {
      @apply hidden md:block;
      @apply col-span-3 pt-6 lg:col-span-2;
    }

    &--right {
      @apply hidden lg:block;
      @apply col-span-3 pt-6 lg:col-span-3;
    }
  }

  &__main {
    @apply md:px-6 pt-3 md:pt-6;
    @apply col-span-12 md:col-span-9 lg:col-span-6;
    @apply md:border-l lg:border-r border-gray-200;
  }
}
</style>
