<template>
  <div>
    <div class="tag-info">
      <img :src="tag.icon" :alt="tag.name" class="tag-info__icon" />
      <div>
        <h1 class="tag-info__name" style="opacity: 1;">#{{ tag.name }}</h1>
        <p class="tag-info__description">
          {{ tag.description }}
        </p>
      </div>
    </div>
    <div class="flex flex-wrap gap-5 mt-3">
      <ArticleCard
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
    </div>
  </div>
</template>
<script>
export default {
  layout: "three-columns",
  data() {
    return {
      tag: {},
      articles: [],
      initialLoading: true,
      pageMeta: {
        current_page: 1,
        last_page: null
      }
    };
  },
  async fetch() {
    try {
      const {
        data,
        meta: { current_page, last_page }
      } = await this.$axios.$get(`/api/articles?tag=${this.$route.params.tag}`);

      const { data: tag } = await this.$axios.$get(
        `/api/tags/${this.$route.params.tag}`
      );

      this.tag = tag;
      this.articles = data;
      this.pageMeta = { current_page, last_page };
    } catch (error) {}
  }
};
</script>

<style scoped lang="scss">
.tag-info {
  @apply px-5 py-6;
  @apply border border-gray-200;
  @apply flex items-center space-x-4;

  &__icon {
    @apply w-20;
  }

  &__name {
    @apply mb-2 text-2xl uppercase text-gray-700;
  }

  &__description {
    @apply text-gray-700;
  }
}
</style>
