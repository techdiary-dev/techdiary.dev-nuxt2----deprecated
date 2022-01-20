<template>
    <div>
        <h1 class="flex items-center space-x-2 text-xl">
            <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
            >
                <path
                    d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                ></path>
            </svg>
            <span>রিডিং লিস্ট</span>
        </h1>

        <div class="flex flex-col my-5 space-y-3">
            <article
                class="flex space-x-2"
                v-for="(article, index) in bookmarks"
                :key="article.id"
            >
                <button
                    class="w-5 h-5"
                    @click="removeBookmark(article.id, index)"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>

                <nuxt-link
                    class="text-gray-700 dark:text-gray-300"
                    :to="{
                        name: 'username-slug',
                        params: {
                            username: article.user.username,
                            slug: article.slug,
                        },
                    }"
                >
                    {{ article.title }}
                </nuxt-link>
            </article>
        </div>
        <Loader v-if="$fetchState.pending" />
    </div>
</template>

<script>
export default {
    layout: "dashboard",
    data() {
        return {
            bookmarks: [],
            pageMeta: {
                current_page: 1,
                last_page: null,
            },
        };
    },
    async fetch() {
        const { data, current_page, last_page } = await this.$axios.$get(
            "/api/bookmarks?model_name=ARTICLE"
        );

        this.bookmarks = this.bookmarks.concat(data);
        this.pageMeta = { current_page, last_page };
    },
    methods: {
        async removeBookmark(uuid, index) {
            this.$axios.$delete(
                `/api/bookmarks?model_name=ARTICLE&model_id=${uuid}`
            );
            this.bookmarks.splice(index, 1);
        },
    },
};
</script>
