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

                <!-- Still need work on this WIP -->
                <button @click="dropDownOpen = !dropDownOpen" class="relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="w-5"
                        :class="{
                            'text-dark-secondary': !isBookmarked,
                            'fill-current text-primary': isBookmarked,
                        }"
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
                            <button class="share_dropdown__item">
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

                                <p class="share_dropdown__label">Copy Link</p>
                            </button>

                            <button class="share_dropdown__item">
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

                                <p class="share_dropdown__label">Facebook</p>
                            </button>

                            <button class="share_dropdown__item">
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="fill-current share_dropdown__icon"
                                >
                                    <title>Twitter</title>
                                    <path
                                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                    />
                                </svg>

                                <p class="share_dropdown__label">Twitter</p>
                            </button>
                        </div>
                    </transition>
                </button>
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
// import reactions from "~/mixins/reactions";
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
            dropDownOpen: false,
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
