<template>
    <div>
        <div class="flex items-center justify-between h-12 mb-[10px]">
            <nuxt-link
                :to="{
                    name: 'username',
                    params: { username: article.user.username },
                }"
                class=""
            >
                <div class="flex items-center space-x-2">
                    <img
                        :src="article.user.profilePhoto"
                        alt="Imam Uddin"
                        loading="lazy"
                        class="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p class="font-mono text-dark-secondary">
                            {{ article.user.username }}
                        </p>
                        <p class="text-sm text-dark-secondary">
                            {{
                                $dayjs(article.created_at).format(
                                    "DD MMMM YYYY"
                                )
                            }}
                        </p>
                    </div>
                </div>
            </nuxt-link>

            <!-- Start of Bookmark and Share Buttons -->
            <div class="space-x-3">
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

                <!-- Share buttons -->
                <share-button :url="article.url" />
            </div>
            <!-- end of bookmark and share button -->
        </div>

        <nuxt-link :to="articleUrl" class="article-card__title">
            {{ article.title }}
        </nuxt-link>
        <div class="article-card__thumbnail" v-if="article.thumbnail">
            <nuxt-link :to="articleUrl">
                <img
                    :src="article.thumbnail"
                    :alt="article.title"
                    class="rounded-md"
                />
            </nuxt-link>
        </div>

        <div class="article-card__content">
            <nuxt-link :to="articleUrl" class="article-card__excerpt">
                {{ article.excerpt }}
            </nuxt-link>

            <div class="article-card__tags">
                <nuxt-link
                    class="article-card__tag"
                    v-for="tag in article.tags"
                    :key="tag.id"
                    :to="{ name: 'tags-tag', params: { tag: tag.name } }"
                >
                    #{{ tag.name }}
                </nuxt-link>
            </div>

            <!-- Actions start -->
            <div class="flex items-center mt-2 space-x-4">
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
                <p class="flex items-center space-x-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                        />
                    </svg>

                    <span>{{ article.comments_count }}</span>
                </p>
            </div>
            <!-- Actions end -->
        </div>
    </div>
</template>

<script>
import votes from "~/mixins/votes";
import bookmark from "~/mixins/bookmark";

export default {
    props: ["article"],
    mixins: [votes, bookmark],
    data() {
        return {
            votes: {
                up_voters: this.article?.votes?.up_voters || [],
                down_voters: this.article?.votes?.down_voters || [],
                score: this.article?.votes?.score || 0,
            },
            bookmarked_users: [],
            isBookmarked: false,
        };
    },
    mounted() {
        this.bookmarked_users = this.article.bookmarked_users;

        if (this.$auth.loggedIn) {
            this.isBookmarked = this.bookmarked_users?.includes(
                this.$auth.user.id
            );
        }
    },
    computed: {
        articleUrl() {
            return {
                name: "username-slug",
                params: {
                    username: this.article.user.username,
                    slug: this.article.slug,
                },
            };
        },
    },
};
</script>

<style scoped lang="scss">
.article-card {
    &__thumbnail {
        @apply rounded-sm overflow-hidden;
    }

    &__title {
        @apply block text-xl font-semibold text-gray-700 dark:text-gray-300 mb-[10px];
    }

    &__excerpt {
        @apply block text-gray-500 dark:text-gray-400;
    }

    &__content {
        @apply mt-2;
    }

    &__tags {
        @apply flex flex-wrap gap-2;
    }

    &__tag {
        @apply text-gray-500 hover:text-gray-700;
    }
}

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
</style>
