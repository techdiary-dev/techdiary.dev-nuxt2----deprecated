<template>
    <div>
        <div>
            <nav class="flex space-x-4">
                <nuxt-link
                    :to="{ name: 'dashboard-diaries' }"
                    class="inline-grid text-lg text-gray-900 dark:text-gray-50"
                >
                    সকল ডায়েরি({{ counts.total }})
                </nuxt-link>
                <nuxt-link
                    :to="{ name: 'dashboard-diaries-published' }"
                    class="inline-grid text-lg text-gray-400"
                >
                    প্রকাশিত({{ counts.published }})
                </nuxt-link>
                <nuxt-link
                    :to="{ name: 'dashboard-diaries-draft' }"
                    class="inline-grid text-lg text-gray-400"
                >
                    খসড়া({{ counts.draft }})
                </nuxt-link>
            </nav>

            <div class="flex flex-col mt-10 space-y-6">
                <article
                    class="flex items-center justify-between space-x-10"
                    v-for="article in articles"
                    :key="article.id"
                >
                    <div>
                        <nuxt-link
                            :to="{
                                name: 'username-slug',
                                params: {
                                    username: $auth.user.username,
                                    slug: article.slug,
                                },
                            }"
                            class="text-xl text-gray-700 dark:text-gray-200 line-clamp-1"
                        >
                            {{ article.title }}
                        </nuxt-link>

                        <div class="flex items-center mt-2 space-x-2">
                            <p
                                class="inline-block px-2 text-xs rounded-md dark:text-gray-800"
                                :class="{
                                    'bg-green-100': article.isPublished,
                                    'bg-red-100': !article.isPublished,
                                }"
                            >
                                {{
                                    article.isPublished
                                        ? "Published"
                                        : "Drafted"
                                }}
                            </p>
                            <p class="text-xs font-semibold text-gray-60">
                                {{
                                    $dayjs(article.created_at).format(
                                        "DD/MM/YYYY"
                                    )
                                }}
                            </p>
                        </div>
                    </div>

                    <div class="flex space-x-4">
                        <nuxt-link
                            :to="{
                                name: 'dashboard-diaries-edit-id',
                                params: { id: article.id },
                            }"
                            class="font-semibold text-green-500"
                        >
                            সংস্কার
                        </nuxt-link>
                        <button
                            class="font-semibold text-red-500"
                            @click="removeArticle(article.id)"
                        >
                            Delete
                        </button>
                    </div>
                </article>

                <div v-observe-visibility="visibilityChanged" />
            </div>
        </div>

        <Loader v-if="$fetchState.pending" />
    </div>
</template>

<script>
export default {
    layout: "dashboard",
    head: {
        title: "সকল ডায়েরি",
    },
    data: () => ({
        articles: [],
        modalOpen: false,
        counts: {
            published: 0,
            draft: 0,
            total: 0,
        },
        pageMeta: {
            current_page: 1,
            last_page: null,
        },
        removeArticleSlug: null,
        removeArticleIndex: null,
    }),
    async fetch() {
        const {
            data,
            meta: { current_page, last_page, counts, total },
        } = await this.$axios.$get(
            `/api/articles/mine?page=${this.pageMeta.current_page}`
        );
        this.counts = counts;
        this.counts.total = total;

        this.articles.push(...data);
        this.pageMeta = { current_page, last_page };
    },
    methods: {
        async removeArticle(uuid, index) {
            swal({
                title: "ডায়েরি মুছে ফেলতে চান?",
                text: "সাবধান - একবার মুছে ফেলার পর আর  কখনোই ফিরিয়ে আনা যাবে না",
                icon: "warning",
                buttons: ["না", "হ্যাঁ"],
                dangerMode: true,
            }).then(async (confirmed) => {
                if (confirmed) {
                    await this.$axios.$delete(`/api/articles/uuid/${uuid}`);
                    this.articles.splice(index, 1);
                    //   this.$toast.success("ডায়েরি মুছে ফেলা হয়েছে।");
                }
            });
        },
        async visibilityChanged(isVisible) {
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
