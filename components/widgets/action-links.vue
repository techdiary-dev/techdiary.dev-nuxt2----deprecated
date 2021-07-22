<template>
  <div class="action-links">
    <a href="#" class="action-links__link">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 action-links__icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>

      <p action-links__label>হোম</p>
    </a>

    <a href="#" class="action-links__link">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="h-5 w-5 action-links__icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        ></path>
      </svg>

      <p action-links__label>রিডিং লিস্ট</p>
    </a>

    <a href="#" class="action-links__link">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 action-links__icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>

      <p action-links__label>নতুন ডায়েরি</p>
    </a>
  </div>
</template>

<style lang="scss">
.action-links {
  @apply flex flex-col space-y-2;

  &__link {
    @apply flex space-x-1 text-base hover:bg-gray-100 transition duration-100 items-center;
  }
  &__icon {
    @apply text-gray-700;
  }
}
</style>
