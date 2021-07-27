<template>
  <div v-click-away="closeDropdown">
    <div v-if="$auth.loggedIn">
      <div
        class="relative flex items-center"
        @click="dropDownOpen = !dropDownOpen"
      >
        <!-- When user have profile pic -->
        <div class="w-8 h-8 mr-2 overflow-hidden rounded-full cursor-pointer">
          <img
            v-if="$auth.user.profilePhoto"
            :src="$auth.user.profilePhoto"
            :alt="$auth.user.name"
          />

          <img
            v-else
            :src="`https://ui-avatars.com/api/?name=${$auth.user.name}`"
            :alt="$auth.user.name"
          />
        </div>

        <p
          class="hidden text-lg text-gray-700 cursor-pointer dark:text-blueGray-300 md:mr-2 md:block"
        >
          {{ $auth.user.name }}
        </p>

        <svg
          style="transition: transform 200ms"
          class="hidden text-gray-700 cursor-pointer dark:text-blueGray-300 md:block"
          :class="[dropDownOpen && 'svgRotation']"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <!--======================================
            User action dropdown
        ==========================================-->
      <transition name="fade">
        <div v-if="dropDownOpen" class="user-action-dropdown">
          <nuxt-link
            :to="{
              name: 'username',
              params: { username: $auth.user.username }
            }"
            class="user-action-dropdown__item"
          >
            <svg
              class="fill-current user-action-dropdown__icon"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>

            <p class="user-action-dropdown__label">আমার প্রোফাইল</p>
          </nuxt-link>

          <nuxt-link
            :to="{ name: 'dashboard' }"
            class="user-action-dropdown__item"
          >
            <svg
              class="user-action-dropdown__icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <p class="user-action-dropdown__label">ড্যাসবোর্ড</p>
          </nuxt-link>

          <nuxt-link
            :to="{ name: 'dashboard-bookmarks' }"
            class="user-action-dropdown__item"
          >
            <svg
              class="user-action-dropdown__icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>

            <p class="user-action-dropdown__label">বুকমার্ক সমূহ</p>
          </nuxt-link>

          <nuxt-link
            :to="{ name: 'dashboard-diaries-new' }"
            class="user-action-dropdown__item"
          >
            <svg
              class="user-action-dropdown__icon"
              xmlns="http://www.w3.org/2000/svg"
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

            <p class="user-action-dropdown__label">নতুন ডায়েরি</p>
          </nuxt-link>

          <nuxt-link
            :to="{ name: 'dashboard-settings' }"
            class="user-action-dropdown__item"
          >
            <svg
              class="user-action-dropdown__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>

            <p class="user-action-dropdown__label">সেটিং</p>
          </nuxt-link>
          <button class="flex items-center" @click="logout">
            <svg
              class="user-action-dropdown__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                clip-rule="evenodd"
              />
            </svg>

            <p class="user-action-dropdown__label">লগ আউট</p>
          </button>
        </div>
      </transition>
    </div>
    <button @click="visible = true" v-else class="flex items-center space-x-2">
      <svg
        class="text-gray-700"
        stroke="currentColor"
        fill="none"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="8.5" cy="7" r="4"></circle>
        <line x1="20" y1="8" x2="20" y2="14"></line>
        <line x1="23" y1="11" x2="17" y2="11"></line>
      </svg>

      <p class="hidden text-gray-700 md:block">প্রবেশ করুন</p>
    </button>
  </div>
</template>

<script>
export default {
  name: "user-action",
  data: () => ({
    dropDownOpen: false,
    visible: false
  }),
  methods: {
    logout() {
      this.$auth.logout();
    },
    closeDropdown() {
      this.dropDownOpen = false;
    },
    closeModal() {
      this.visible = false;
    }
  }
};
</script>

<style lang="scss">
.user-action-dropdown {
  @apply absolute right-0 w-48 p-4 mt-1 bg-white rounded-bl rounded-br shadow-lg dark:bg-gray-700 top-full;
  &__item {
    @apply flex items-center mb-2 transition duration-150;
  }
  &__icon {
    @apply mr-2 text-gray-700 dark:text-gray-300 w-5;
  }
  &__label {
    @apply text-gray-800 dark:text-gray-300 text-sm;
  }
}
.svgRotation {
  transform: rotateX(180deg);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
