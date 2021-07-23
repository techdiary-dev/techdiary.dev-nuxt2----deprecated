<template>
  <div>
    <widgets-fake-editor />
    <div class="flex flex-col gap-8 mt-4">
      <ArticleCard
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
    </div>
    <Loader
      v-observe-visibility="loadMore"
      v-if="this.pageMeta.current_page != this.pageMeta.last_page"
    />
  </div>
</template>

<script>
export default {
  layout: "three-columns",
  head() {
    return {
      title: "নীড়",
      meta: [
        {
          name: "description",
          content: `টেকডায়েরি | বাংলার প্রোগ্রামিং নেটওয়ার্ক`
        },
        {
          property: "og:title",
          content: `টেকডায়েরি | বাংলার প্রোগ্রামিং নেটওয়ার্ক`
        },
        {
          property: "og:url",
          content: "https://www.techdiary.dev"
        },
        {
          property: "og:description",
          content: `টেকডায়েরি | বাংলার প্রোগ্রামিং নেটওয়ার্ক`
        },
        {
          property: "og:image",
          content:
            "https://res.cloudinary.com/techdiary-dev/image/fetch/c_scale,f_auto,q_auto,w_1200/https://user-images.githubusercontent.com/7611746/82744130-38b0fd80-9d96-11ea-8223-62d62a56566f.png"
        },
        {
          property: "og:image:width",
          content: "1200"
        },
        {
          property: "og:image:height",
          content: "630"
        }
      ]
    };
  },
  data() {
    return {
      articles: [],
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
      } = await this.$axios.$get(
        `/api/articles?page=${this.pageMeta.current_page}`
      );
      this.articles = this.articles.concat(data);
      this.pageMeta = { current_page, last_page };
    } catch (error) {
      console.log({ error });
    }
  },
  methods: {
    async loadMore(isVisible) {
      if (isVisible) {
        if (this.pageMeta.current_page >= this.pageMeta.last_page) {
          return;
        }
        this.pageMeta.current_page++;
        await this.$fetch();
      }
    }
  }
};
</script>
