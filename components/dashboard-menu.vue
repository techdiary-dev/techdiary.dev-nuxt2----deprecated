<template>
  <div class="dashboard-menu">
    <div class="dashboard-menu__section">
      <nuxt-link
        :to="{ name: 'dashboard-index' }"
        class="dashboard-menu__link dashboard-menu__link--create"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-4 h-4 "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        <span class="dashboard-menu__label">নতুন ডায়েরি</span>
      </nuxt-link>

      <nuxt-link
        :to="{ name: 'dashboard-diaries' }"
        class="dashboard-menu__link"
      >
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
        <span class="dashboard-menu__label">আমার ডায়েরি সমূহ</span>
      </nuxt-link>

      <nuxt-link
        :to="{ name: 'dashboard-bookmarks' }"
        class="dashboard-menu__link"
      >
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
        <span class="dashboard-menu__label">বুকমার্ক সমূহ</span>
      </nuxt-link>
    </div>

    <div class="dashboard-menu__section">
      <h3 class="font-bold">সেটিংস</h3>

      <nuxt-link
        :to="{ name: 'dashboard-settings' }"
        class="dashboard-menu__link"
      >
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
        <span class="dashboard-menu__label">প্রোফাইল হালনাগাদ</span>
      </nuxt-link>

      <nuxt-link
        :to="{ name: 'dashboard-sessions' }"
        class="dashboard-menu__link"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            data-v-6f9cfbe0=""
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
        <span class="dashboard-menu__label">Sessions</span>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dashboard-menu {
  @apply flex flex-col space-y-6;

  &__section {
    @apply flex flex-col space-y-3;
  }

  &__link {
    @apply flex items-center space-x-1;
    @apply text-gray-600 dark:text-blueGray-300;
    @apply hover:text-gray-900 dark:hover:text-gray-400;

    &--create {
      @apply flex items-center justify-center text-blueGray-100 font-semibold;
      @apply bg-blueGray-800 rounded-3xl px-1 py-2;
      @apply hover:text-blueGray-100;
    }
  }

  &__label {
    @apply text-base;
  }
}
</style>
