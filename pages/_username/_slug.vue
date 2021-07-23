<template>
  <div class="layout wrapper">
    <main class="layout__main">
      <div v-if="!$fetchState.pending && article">
        <alert v-if="!article.isPublished" class="mb-8">
          অপ্রকাশিত ডায়েরি, তবে আপনি চাইলে URL এর মাধ্যমে যে কাউকে দেখাতে
          পারবেন।
          <template v-slot:sub-title>
            অপ্রকাশিত ডায়েরি প্রথম পাতায় দেখানো হবে না।
          </template>
        </alert>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: null,
      html: null,
      comments: []
    };
  },
  async fetch() {
    try {
      const { data: article } = await this.$axios.get(
        `api/articles/${this.$route.params.slug}`
      );
      this.article = article.data;
      this.reactions = article.data.reactions;
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
