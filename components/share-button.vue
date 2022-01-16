<template>
    <button @click="dropDownOpen = !dropDownOpen" class="relative">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-5"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
        </svg>

        <transition name="fade">
            <div v-if="dropDownOpen" class="share_dropdown">
                <button
                    class="share_dropdown__item"
                    data-name="facebook"
                    @click="shareOnFacebook(url)"
                >
                    <svg
                        class="fill-current share_dropdown__icon"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Facebook</title>
                        <path
                            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                        />
                    </svg>

                    <p class="share_dropdown__label">ফেসবুক</p>
                </button>

                <button
                    class="share_dropdown__item"
                    data-name="twitter"
                    @click="shareOnTwitter(url)"
                >
                    <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        class="fill-current share_dropdown__icon"
                    >
                        <title>টুইটার</title>
                        <path
                            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                        />
                    </svg>

                    <p class="share_dropdown__label">টুইটার</p>
                </button>

                <button
                    class="share_dropdown__item"
                    data-name="copylink"
                    @click="copyToClipboard(url)"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="fill-current share_dropdown__icon"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"
                        />
                        <path
                            d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"
                        />
                    </svg>

                    <p class="share_dropdown__label">লিংক কপি করুন</p>
                </button>
            </div>
        </transition>
    </button>
</template>

<script>
import share from "~/mixins/share";
export default {
    props: ["url"],
    mixins: [share],
    data() {
        return {
            dropDownOpen: false,
        };
    },
};
</script>

<style lang="scss" scoped>
.share_dropdown {
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
.fade-enter-active,
.fade-leave-active {
    transition: opacity 300ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
