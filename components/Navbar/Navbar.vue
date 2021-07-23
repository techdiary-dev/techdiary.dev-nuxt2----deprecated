<template>
  <div class="navbar">
    <div class="navbar__left">
      <button class="navbar__hambargur-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="navbar__hambargur-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <nuxt-link to="/" class="inline-block ">
        <Logos-Text class="text-gray-800 " />
      </nuxt-link>
    </div>

    <Navbar-Links />
  </div>
</template>

<style scoped lang="scss">
.navbar {
  @apply h-12 bg-white px-4 md:px-6;
  @apply sticky top-0 z-30;
  @apply border-b border-gray-200;
  @apply flex justify-between items-center;

  &__left {
    @apply flex items-center gap-1;
  }
  &__hambargur-button {
    @apply md:hidden;
  }

  &__hambargur-icon {
    @apply w-6 h-6;
    @apply text-gray-700;
  }
}
</style>
