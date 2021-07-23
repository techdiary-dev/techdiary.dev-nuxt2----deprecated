<template>
  <div class="flex flex-col gap-5">
    <ArticleCard
      v-for="article in articles"
      :key="article.id"
      :article="article"
    />
  </div>
</template>

<script>
export default {
  layout: "three-columns",
  data() {
    return {
      articles: []
    };
  },
  async mounted() {
    const { data } = await this.$axios.$get("api/articles");

    this.articles = data;
  },

  async fetch() {}
};
</script>
