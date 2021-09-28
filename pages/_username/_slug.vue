<template>
  <div class="relative py-16 overflow-hidden">
    <div v-if="$fetchState.pending">
      <Loader />
    </div>
    <div v-else class="relative max-w-3xl px-4 mx-auto sm:px-6 lg:px-8">
      <div class="overflow-hidden rounded-md">
        <app-image :src="article.thumbnail" />
      </div>

      <div class="mx-auto my-10 text-lg max-w-prose">
        <h1
          class="block mt-2 text-3xl font-semibold leading-10 tracking-tight text-center text-gray-900 sm:text-4xl"
        >
          {{ article.title }}
        </h1>

        <p class="text-xl text-center text-dark-secondary">
          {{ $dayjs(article.created_at).format("DD MMMM YYYY") }}
        </p>
      </div>

      <!-- users and actions start -->
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <img
            class="w-10 h-10 rounded-full "
            :src="article.user.profilePhoto"
            :alt="article.user.username"
          />
          <p class="text-xl ">{{ article.user.name }}</p>
        </div>
        <div class="flex items-center ">
          <button @click="bookmark('ARTICLE', article.id)">
            <svg
              viewBox="0 0 14 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 "
              :class="{
                'text-dark-secondary': !isBookmarked,
                'fill-current text-primary': isBookmarked
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
          <!-- Actions start -->
          <div class="flex items-center mt-2 space-x-4">
            <div class="flex items-center ">
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
              </button>

              <span>{{ votes.score }}</span>

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
          </div>
          <!-- Actions end -->
        </div>
      </div>
      <!-- users and actions end-->

      <div
        class="mx-auto mt-6 prose prose-xl text-gray-500 max-w-none prose-indigo"
        v-html="article.body.html"
      ></div>

      <div class="my-10 ">
        <comments />
      </div>
    </div>
  </div>
</template>

<script>
import bookmark from "~/mixins/bookmark";
import votes from "~/mixins/votes";
export default {
  data() {
    return {
      article: {},
      comments: []
    };
  },
  mixins: [votes, bookmark],
  fetchOnServer: false,
  async fetch() {
    try {
      const { data: article } = await this.$axios.get(
        `api/articles/slug/${this.$route.params.slug}`
      );
      this.article = article.data;
    } catch (error) {
      this.$nuxt.error({
        statusCode: 400,
        message: "ডায়েরি খুঁজে পাওয়া যায়নি"
      });
    }
  }
};
</script>

<style scoped lang="scss">
.layout {
  @apply grid grid-cols-12;

  &__aside {
    @apply sticky top-0 px-6;
    @apply self-start top-[50px];

    &--left {
      @apply hidden md:block;
      @apply col-span-3 pt-6 lg:col-span-2;
    }
  }

  &__main {
    @apply md:px-6 pt-3 md:pt-6;
    @apply col-span-12 md:col-span-9 lg:col-span-8;
    @apply md:border-l border-gray-200;
    @apply min-h-screen;
  }
}
</style>
