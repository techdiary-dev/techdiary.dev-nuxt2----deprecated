<template>
  <client-only>
    <Loader v-if="$fetchState.pending" />
    <article-editor v-else :article-data="article" />
  </client-only>
</template>
<script>
export default {
  layout: "blank",
  head: {
    title: "Edit ডায়েরি"
  },
  data() {
    return {
      article: {}
    };
  },
  async fetch() {
    try {
      const { data: article } = await this.$axios.$get(
        `/api/articles/uuid/${this.$route.params.id}`
      );
      this.article = article;
    } catch (e) {
      console.log(e);
    }
  }
};
</script>
