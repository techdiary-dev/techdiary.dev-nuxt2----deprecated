<template>
    <div class="dashboard-menu">
        <div class="dashboard-menu__section">
            <button
                @click="sperkArticle"
                class="dashboard-menu__link dashboard-menu__link--create"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-4 h-4"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                </svg>
                <span class="dashboard-menu__label">নতুন ডায়েরি</span>
            </button>

            <nuxt-link
                :to="{ name: 'dashboard-diaries' }"
                class="dashboard-menu__link"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4"
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
                    <path
                        d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                    ></path>
                </svg>
                <span class="dashboard-menu__label">রিডিং লিস্ট</span>
            </nuxt-link>
            <nuxt-link
                :to="{ name: 'dashboard-series' }"
                class="dashboard-menu__link"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                </svg>
                <span class="dashboard-menu__label">সিরিজ</span>
            </nuxt-link>
        </div>

        <div class="dashboard-menu__section">
            <h3 class="font-bold">সেটিংস</h3>

            <nuxt-link
                :to="{ name: 'dashboard-settings' }"
                class="dashboard-menu__link"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
                <span class="dashboard-menu__label">প্রোফাইল হালনাগাদ</span>
            </nuxt-link>

            <nuxt-link
                :to="{ name: 'dashboard-tokens' }"
                class="dashboard-menu__link"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                    />
                </svg>
                <span class="dashboard-menu__label">এক্সেস টোকেন</span>
            </nuxt-link>

            <!-- <nuxt-link
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
      </nuxt-link> -->
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        async sperkArticle() {
            const post = await this.$axios.$post("api/articles/spark");

            this.$router.push({
                name: "dashboard-diaries-edit-id",
                params: { id: post.uuid },
            });
        },
    },
};
</script>

<style scoped lang="scss">
.dashboard-menu {
    @apply flex flex-col space-y-6;

    &__section {
        @apply flex flex-col space-y-3;
    }

    &__link {
        @apply flex items-center space-x-1;
        @apply text-gray-600 dark:text-slate-300;
        @apply hover:text-gray-900 dark:hover:text-gray-400;

        &--create {
            @apply flex items-center justify-center text-slate-100 font-semibold;
            @apply bg-slate-800 rounded-3xl px-1 py-2;
            @apply hover:text-slate-100;
        }
    }

    &__label {
        @apply text-base;
    }
}
</style>
