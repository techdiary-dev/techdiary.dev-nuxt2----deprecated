<template>
  <div class="login">
    <button
      class="login__button login__button--github"
      @click="socialLogin('github')"
    >
      <svg
        v-if="loadingGithub"
        class="w-5 h-5 mr-2 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <svg
        v-else
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="login__icon login__icon--github"
      >
        <path
          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        ></path>
      </svg>
      <span class="login__label">গিটহাব দিয়ে লগইন</span>
    </button>

    <button
      class="login__button login__button--google"
      @click="socialLogin('google')"
    >
      <svg
        v-if="loadingGoogle"
        class="w-5 h-5 mr-2 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>

      <svg
        v-else
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="login__icon login__icon--google"
      >
        <title>Google icon</title>
        <path
          d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
        ></path>
      </svg>
      <span class="login__label">গুগল দিয়ে লগইন</span>
    </button>

    <nuxt-link
      :to="{ name: 'auth-login' }"
      class="login__button login__button--auth "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="login__icon login__icon--auth"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
          clip-rule="evenodd"
        />
      </svg>
      <span class="login__label">ইমেইল দিয়ে লগইন</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadingGithub: false,
      loadingGoogle: false
    };
  },
  methods: {
    socialLogin(service) {
      if (service == "google") {
        this.loadingGoogle = true;
      }

      if (service == "github") {
        this.loadingGithub = true;
      }
      window.location.href = `${process.env.NUXT_ENV_API_URL}/api/auth/oauth/${service}`;
    }
  }
};
</script>

<style scoped lang="scss">
.login {
  @apply flex flex-col space-y-3;

  &__icon {
    @apply w-4 h-4 fill-current;
    &--google {
      @apply text-red-500;
    }

    &--auth {
    }
  }

  &__label {
    @apply text-sm;
  }
  &__button {
    @apply flex items-center justify-center space-x-2;
    @apply w-full py-1 rounded-sm hover:opacity-95;
    @apply transition duration-150;
    @apply py-2;

    &--github {
      @apply text-gray-700 dark:text-gray-400 border bg-gray-800/5 border-gray-800 dark:border-gray-700;
    }

    &--google {
      @apply text-red-500 bg-red-500/10 border border-red-500;
    }

    &--auth {
      @apply text-gray-700 dark:text-gray-400 mt-0;
    }
  }
}
</style>
