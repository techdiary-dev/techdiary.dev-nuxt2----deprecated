<template>
    <layout-three-columns>
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
    </layout-three-columns>
</template>

<script>
export default {
    layout: "blank",
    head() {
        return {
            title: "নীড়",
            meta: this.$seoMeta(),
            link: [
                {
                    rel: "canonical",
                    href: process.env.NUXT_ENV_BASE_URL,
                },
            ],
        };
    },
    data() {
        return {
            articles: [],
            pageMeta: {
                current_page: 1,
                last_page: null,
            },
        };
    },
    async fetch() {
        try {
            const {
                data,
                meta: { current_page, last_page },
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
        },
    },
};
</script>
