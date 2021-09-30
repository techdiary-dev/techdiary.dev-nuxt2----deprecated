<template>
  <div class="navbar app-border-color">
    <div class="navbar__inner wrapper">
      <div class="navbar__left">
        <button class="navbar__hambargur-button" @click="triggerSidebar(true)">
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
          <Logos-Text class="navbar__logo" />
        </nuxt-link>
      </div>
      <Navbar-Links />
    </div>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  @apply sticky top-0 left-0 z-30 w-full border-b;

  .navbar__inner {
    @apply fill-current;
    @apply bg-white dark:bg-blueGray-900;
    @apply h-12;
    @apply flex justify-between items-center;
  }

  &__logo {
    @apply h-3 text-gray-800 dark:text-gray-100;
  }
  &__left {
    @apply flex items-center gap-1;
  }
  &__hambargur-button {
    @apply md:hidden;
  }

  &__hambargur-icon {
    @apply w-6 h-6;
    @apply text-gray-700 dark:text-gray-200;
  }
}
</style>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({
      triggerSidebar: "ui/SET_SHOW_LEFTSIDEBAR"
    })
  }
};
</script>
