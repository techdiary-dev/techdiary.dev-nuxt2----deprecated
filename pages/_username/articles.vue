<template>
    <layout-three-columns>
        <template #right-sidebar-top>
            <div class="hidden mb-10 lg:block" :data-user-id="user.id">
                <user-info-card :user="user" />
            </div>
        </template>

        <main class="flex flex-col gap-8">
            <div class="mb-10 lg:hidden" :data-user-id="user.id">
                <user-info-card :user="user" />
            </div>
            <ArticleCard
                v-for="article in articles"
                :key="article.id"
                :article="article"
            />
        </main>
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
            title: this.user ? this.user.username : "Loading...",
        };
    },
    data() {
        return {
            user: {},
            articles: [],
            pageMeta: {
                current_page: 1,
                last_page: null,
            },
        };
    },
    async fetch() {
        try {
            const { data: user } = await this.$axios.$get(
                `/api/profile/username/${this.$route.params.username}`
            );
            this.user = user;

            const {
                data: articles,
                meta: { current_page, last_page },
            } = await this.$axios.$get(
                `/api/articles?page=${this.pageMeta.current_page}&user=${this.$route.params.username}`
            );
            this.articles = this.articles.concat(articles);
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
