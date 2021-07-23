<template>
  <div class="article-card">
    <div class="article-card__thumbnail">
      <nuxt-link :to="articleUrl">
        <img :src="article.thumbnail" :alt="article.title" />
      </nuxt-link>
    </div>

    <div class="article-card__content">
      <nuxt-link :to="articleUrl" class="article-card__title ">
        {{ article.title }}
      </nuxt-link>

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
