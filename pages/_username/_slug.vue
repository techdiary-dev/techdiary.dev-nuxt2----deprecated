<template>
    <div class="relative py-16 overflow-hidden">
        <div v-if="$fetchState.pending">
            <Loader />
        </div>
        <div v-else class="relative max-w-3xl px-4 mx-auto sm:px-6 lg:px-8">
            <!-- Thumbnail start -->
            <div class="-ml-20 -mr-20" v-if="article.thumbnail">
                <app-image
                    :src="article.thumbnail"
                    width="100%"
                    :alt="article.title"
                />
            </div>
            <!-- Thumbnail end -->

            <div class="mx-auto my-10 text-lg max-w-prose">
                <h1
                    class="block mt-2 text-3xl font-semibold leading-10 tracking-tight text-center text-gray-900 dark:text-gray-200 sm:text-4xl"
                >
                    {{ article.title }}
                </h1>

                <p
                    class="text-xl text-center text-dark-secondary dark:text-gray-400"
                >
                    {{ $dayjs(article.created_at).format("DD MMMM YYYY") }}
                </p>
            </div>

            <!-- users and actions start -->
            <div class="flex items-center justify-between">
                <nuxt-link
                    :to="`/${article.user.username}`"
                    class="flex items-center space-x-3 text-dark"
                >
                    <img
                        class="w-10 h-10 rounded-full"
                        :src="article.user.profilePhoto"
                        :alt="article.user.username"
                    />
                    <p class="text-xl">{{ article.user.name }}</p>
                </nuxt-link>
                <div class="flex items-center space-x-2">
                    <nuxt-link
                        v-if="
                            $auth.loggedIn && article.user.id === $auth.user.id
                        "
                        class="font-semibold"
                        :to="{
                            name: 'dashboard-diaries-edit-id',
                            params: { id: article.id },
                        }"
                    >
                        ইডিট করুন
                    </nuxt-link>

                    <button @click="bookmark('ARTICLE', article.id)">
                        <svg
                            viewBox="0 0 14 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4"
                            :class="{
                                'text-dark-secondary': !isBookmarked,
                                'fill-current text-primary': isBookmarked,
                            }"
                        >
                            <path
                                d="M1.83354 1.28697C1.52462 1.63079 1.35107 2.0971 1.35107 2.58333V17.25L7.11647 14.0417L12.8819 17.25V2.58333C12.8819 2.0971 12.7083 1.63079 12.3994 1.28697C12.0905 0.943154 11.6715 0.75 11.2346 0.75H2.99833C2.56145 0.75 2.14246 0.943154 1.83354 1.28697Z"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="stroke-current"
                            ></path>
                        </svg>
                    </button>

                    <share-button :url="article.url" />

                    <!-- Actions start -->
                    <div class="vote">
                        <button
                            class="vote__button vote__button--upvote"
                            @click="upVote('ARTICLE', article.id)"
                            :class="{ 'vote__button--active': isUpvotted }"
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
                                    d="M5 15l7-7 7 7"
                                />
                            </svg>
                            <span>{{ votes.score }}</span>
                        </button>

                        <button
                            class="vote__button vote__button--downvote"
                            :class="{ 'vote__button--active': isDownvotted }"
                            @click="downVote('ARTICLE', article.id)"
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
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                    </div>
                    <!-- Actions end -->
                </div>
            </div>
            <!-- users and actions end-->

            <div
                class="mx-auto mt-6 content-typography"
                v-html="article.body.html"
            ></div>

            <div class="my-10">
                <comments model_name="ARTICLE" :model_id="article.id" />
            </div>
        </div>
    </div>
</template>
<script>
import bookmark from "~/mixins/bookmark";
import votes from "~/mixins/votes";

import hljs from "highlight.js";

export default {
    head({ $seoMeta }) {
        return {
            title: this.article?.title || "Loading...",

            meta: $seoMeta({
                title: this.article.seo?.seo_title
                    ? this.article.seo?.seo_title
                    : this.article?.title,
                description: this.article?.seo?.seo_description
                    ? this.article?.seo?.seo_description
                    : this.article.excerpt,
                image: this.article.seo?.og_image
                    ? this.article.seo?.og_image
                    : this.article?.thumbnail,
            }),

            link: [
                {
                    rel: "canonical",
                    href: this.article.seo?.canonical_url
                        ? this.article.seo?.canonical_url
                        : this.article.url,
                },
            ],

            // meta: [
            //     {
            //         name: "description",
            //         content: this.article?.seo?.seo_description || "",
            //     },
            //     {
            //         property: "og:title",
            //         content:
            //             this.article?.seo?.seo_title || this.article?.title,
            //     },
            //     {
            //         property: "og:image",
            //         content:
            //             this.article?.seo?.og_image || this.article?.thumbnail,
            //     },
            // ],
        };
    },
    data() {
        return {
            article: {},
            comments: [],
            votes: {
                up_voters: [],
                down_voters: [],
                score: 0,
            },
            bookmarked_users: [],
            isBookmarked: false,
        };
    },
    updated() {
        hljs.highlightAll();
    },
    mixins: [votes, bookmark],
    async fetch() {
        try {
            const { data: article } = await this.$axios.get(
                `api/articles/slug/${this.$route.params.slug}`
            );
            this.article = article.data;
            this.votes = {
                up_voters: this.article?.votes?.up_voters || [],
                down_voters: this.article?.votes?.down_voters || [],
                score: this.article?.votes?.score || 0,
            };
            this.bookmarked_users = this.article.bookmarked_users;

            if (this.$auth.loggedIn) {
                this.isBookmarked = this.bookmarked_users?.includes(
                    this.$auth.user.id
                );
            }
        } catch (error) {
            this.$nuxt.error({
                statusCode: 400,
                message: "ডায়েরি খুঁজে পাওয়া যায়নি",
            });
        }
    },
};
</script>

<style lang="scss" scoped>
.vote {
    @apply inline-flex overflow-hidden rounded-md;
    &__button {
        @apply bg-gray-100 hover:bg-gray-200;
        @apply dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700;
        @apply flex items-center px-3 py-1 transition-all duration-100;
        &--upvote {
            @apply border-r;
        }

        &--downvote {
            @apply px-2;
        }

        &--active {
            @apply text-primary bg-gray-200 dark:bg-gray-700;
        }
    }
}

.thumbnail {
    @apply rounded-md overflow-hidden;
}
</style>
