<template>
    <div class="flex gap-2 md:gap-6">
        <div class="action">
            <button class="action__button action__button--home">
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
            <button
                class="action__button action__button--search"
                @click="$emit('searchPopup')"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="action__icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                    />
                </svg>
            </button>

            <client-only>
                <button
                    @click="colorModeSwitcher"
                    lass="action__button action__button--colorModeSwitcher"
                >
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

        <div>
            <button
                @click="sperkArticle"
                class="items-center hidden px-4 py-1 space-x-2 rounded-full lg:flex bg-primary"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-4 h-4 text-white"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4v16m8-8H4"
                        data-v-936cb296=""
                    ></path>
                </svg>
                <span class="text-white">নতুন ডায়েরি</span>
            </button>
        </div>

        <Navbar-UserAction />
    </div>
</template>

<script>
import swal from "sweetalert";
export default {
    methods: {
        colorModeSwitcher() {
            this.$colorMode.preference =
                this.$colorMode.value === "dark" ? "light" : "dark";
        },
        async sperkArticle() {
            if (!this.$auth.loggedIn) {
                swal({
                    title: "আপনি লগইন অবস্থায় নেই",
                    icon: "error",
                });
                return;
            }

            const post = await this.$axios.$post("api/articles/spark");

            this.$router.push({
                name: "dashboard-diaries-edit-id",
                params: { id: post.uuid },
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.action {
    @apply flex gap-2;

    &__button {
        @apply flex items-center justify-center;
        &--home {
            @apply hidden md:block;
        }
        &--search {
            @apply lg:hidden;
        }
    }

    &__icon {
        @apply text-gray-500 dark:text-slate-400;
        @apply w-6;
    }
}
</style>
