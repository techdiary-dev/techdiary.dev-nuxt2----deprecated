<template>
  <div class="flex gap-6">
    <div class="action">
      <button class="action__button ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="action__icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          ></path>
        </svg>
      </button>

      <button class="action__button ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="action__icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>

      <client-only>
        <button @click="colorModeSwitcher" lass="action__button ">
          <svg
            v-if="$colorMode.value === 'light'"
            class="action__icon"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path>
          </svg>
          <svg
            v-if="$colorMode.value === 'dark'"
            class="action__icon"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </button>
      </client-only>
    </div>

    <Navbar-UserAction />
  </div>
</template>

<script>
export default {
  methods: {
    colorModeSwitcher() {
      this.$colorMode.preference =
        this.$colorMode.value === "dark" ? "light" : "dark";
    }
  }
};
</script>

<style lang="scss" scoped>
.action {
  @apply flex gap-2;

  &__button {
    @apply flex items-center justify-center;
  }

  &__icon {
    @apply text-gray-500 dark:text-gray-400;
    @apply w-5 h-5;
  }
}
</style>
