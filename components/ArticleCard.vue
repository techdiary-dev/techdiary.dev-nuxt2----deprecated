<template>
  <div class="article-card">
    <div class="article-card__thumbnail">
      <img :src="article.thumbnail" :alt="article.title" />
    </div>

    <div class="article-card__content">
      <nuxt-link :to="articleUrl" class="article-card__title ">
        {{ article.title }}
      </nuxt-link>

      <p class="mt-2 text-dark-secondary">
        {{ article.created_at }}
      </p>

      <div class="article-card__tags">
        <a href="/tags/css" class=""> #css </a
        ><a href="/tags/position" class="">
          #position
        </a>
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

  &__tags {
    @apply flex flex-wrap gap-2 text-gray-500;
  }
}
</style>
