<template>
  <div class="dashboard-menu">
    <div class="dashboard-menu__group">
      <a href="#" class="dashboard-menu__link dashboard-menu__link--create">
        <svg
          data-v-6f9cfbe0=""
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="dashboard-menu__icon"
        >
          <path
            data-v-6f9cfbe0=""
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        <span class="dashboard-menu__label">নতুন ডায়েরি</span>
      </a>

      <a href="#" class="dashboard-menu__link">
        <svg
          data-v-6f9cfbe0=""
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="dashboard-menu__icon"
        >
          <path
            data-v-6f9cfbe0=""
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        <span class="dashboard-menu__label">Add Diary</span>
      </a>

      <a href="#" class="dashboard-menu__link">
        <svg
          data-v-6f9cfbe0=""
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="dashboard-menu__icon"
        >
          <path
            data-v-6f9cfbe0=""
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        <span class="dashboard-menu__label">Add Diary</span>
      </a>

      <a href="#" class="dashboard-menu__link">
        <svg
          data-v-6f9cfbe0=""
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="dashboard-menu__icon"
        >
          <path
            data-v-6f9cfbe0=""
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        <span class="dashboard-menu__label">Add Diary</span>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dashboard-menu {
  @apply flex flex-col space-x-6;

  &__group {
    @apply flex flex-col space-y-2;
  }

  &__link {
    @apply flex text-gray-600;
    &--create {
      @apply px-3 py-2;
      @apply bg-gray-700 text-blueGray-200 text-center self-center rounded-md;
      @apply mb-3;
    }
  }

  &__icon {
    @apply w-5 h-5;
  }
}
</style>
