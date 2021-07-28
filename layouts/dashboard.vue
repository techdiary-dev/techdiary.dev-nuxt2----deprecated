<template>
  <div>
    <Navbar />
    <div class="dashboard-layout wrapper">
      <aside class="dashboard-layout__sidebar">
        <div>
          <a href="#" class="dashboard-layout__sidebar-create">
            <svg
              data-v-6f9cfbe0=""
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6 dark:text-blueGray-500"
            >
              <path
                data-v-6f9cfbe0=""
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            <span class="inline-block text-gray-900 dark:text-blueGray-300"
              >Add Diary</span
            >
          </a>
          <a
            data-v-6f9cfbe0=""
            href="/dashboard/diaries"
            class="dashboard-layout__sidebar-options nuxt-link-active"
            aria-current="page"
            ><svg
              data-v-6f9cfbe0=""
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
            >
              <path
                data-v-6f9cfbe0=""
                d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
              ></path>
              <path
                data-v-6f9cfbe0=""
                d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
              ></path>
            </svg>
            <span data-v-6f9cfbe0="" class="inline-block ml-2"
              >আমার ডায়েরি সমূহ</span
            ></a
          >
        </div>
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

    &-create {
      /* hover:bg-transparent  border-transparent hover:border-blueGray-600 */
      @apply flex items-center justify-center px-1 py-2 mb-6 transition duration-200  shadow hover:shadow-lg bg-primary dark:bg-blueGray-700 rounded-md;
    }
    &-options {
      @apply flex justify-start items-center;
    }
  }

  &__main {
    @apply flex-auto;
  }
}
</style>
