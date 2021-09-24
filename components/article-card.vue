<template>
  <div class="article-card">
    <div class="flex items-center justify-between h-12">
      <nuxt-link
        :to="{ name: 'username', params: { username: article.user.username } }"
        class="flex items-center space-x-2 font-mono"
      >
        <div class="w-8 overflow-hidden rounded-full">
          <img
            :src="article.user.profilePhoto"
            alt="Imam Uddin"
            loading="lazy"
            class="w-full h-auto"
          />
        </div>
        <span class="font-mono text-dark-secondary">
          {{ article.user.username }}
        </span>
      </nuxt-link>

      <div>
        <svg
          viewBox="0 0 14 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 text-dark-secondary"
        >
          <path
            d="M1.83354 1.28697C1.52462 1.63079 1.35107 2.0971 1.35107 2.58333V17.25L7.11647 14.0417L12.8819 17.25V2.58333C12.8819 2.0971 12.7083 1.63079 12.3994 1.28697C12.0905 0.943154 11.6715 0.75 11.2346 0.75H2.99833C2.56145 0.75 2.14246 0.943154 1.83354 1.28697Z"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="stroke-current"
          ></path>
        </svg>
      </div>
    </div>

    <div class="article-card__thumbnail">
      <nuxt-link :to="articleUrl">
        <img
          :src="article.thumbnail"
          :alt="article.title"
          class="rounded-md "
        />
      </nuxt-link>
    </div>

    <div class="article-card__content">
      <nuxt-link :to="articleUrl" class="article-card__title ">
        {{ article.title }}
      </nuxt-link>

      <p class="text-gray-500 ">
        {{ article.excerpt }}
      </p>

      <p class="mt-2 text-dark-secondary">
        {{ $format(article.created_at, "do LLLL, yyyy") }}
      </p>

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
    </div>
  </div>
</template>

<script>
export default {
  props: ["article"],
  computed: {
    articleUrl() {
      return {
        name: "username-slug",
        params: {
          username: this.article.user.username,
          slug: this.article.slug
        }
      };
    }
  }
};
</script>

<style scoped lang="scss">
.article-card {
  &__thumbnail {
    @apply rounded-sm overflow-hidden;
  }
  &__title {
    @apply block text-xl font-semibold text-gray-700;
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
</style>
