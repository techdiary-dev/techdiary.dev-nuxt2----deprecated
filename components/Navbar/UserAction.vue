<template>
  <div v-click-away="closeDropdown">
    <div v-if="$auth.loggedIn">
      <div
        class="relative flex items-center"
        @click="dropDownOpen = !dropDownOpen"
      >
        <!-- When user have profile pic -->
        <div class="w-8 h-8 overflow-hidden rounded-full cursor-pointer">
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

    <div v-else>
      <div
        class="relative flex items-center"
        @click="dropDownOpen = !dropDownOpen"
      >
        <!-- When user have profile pic -->
        <div class="w-8 h-8 overflow-hidden rounded-full cursor-pointer">
          <img
            :src="`https://avatars.dicebear.com/api/bottts/${Date.now()}.svg`"
          />
        </div>
      </div>
      <!--======================================
            User action dropdown
        ==========================================-->
      <transition name="fade">
        <div v-if="dropDownOpen" class="user-action-dropdown">
          <button
            class="user-action-dropdown__item"
            @click="socialLogin('github')"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="user-action-dropdown__icon"
            >
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              ></path>
            </svg>
            <p class="user-action-dropdown__label">গিটহাব দিয়ে লগইন</p>
          </button>

          <button
            class="user-action-dropdown__item"
            @click="socialLogin('google')"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="user-action-dropdown__icon"
            >
              <title>Google icon</title>
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
              ></path>
            </svg>
            <p class="user-action-dropdown__label">গুগল দিয়ে লগইন</p>
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import socialLogin from "~/mixins/social-login";
export default {
  name: "user-action",
  mixins: [socialLogin],
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
  @apply space-y-3;
  @apply bg-white dark:bg-gray-700;
  @apply absolute right-0 w-48 p-4 mt-1 rounded-bl rounded-br shadow-lg top-full;

  &__item {
    @apply flex items-center transition duration-150;
  }

  &__icon {
    @apply text-gray-600 dark:text-gray-300;
    @apply mr-2 w-5;
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
