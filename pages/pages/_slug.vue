<template>
    <div class="max-w-4xl mx-auto my-10 md:px-4">
        <div>
            <h2 class="inline-block text-3xl font-semibold border-b-2">
                {{ page.title }}
            </h2>
        </div>

        <div class="prose max-w-none content-typography">
            <nuxt-content :document="page" />
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: this.page?.title,
        };
    },
    async asyncData({ $content, params }) {
        const page = await $content("_pages", params.slug).fetch();
        return { page };
    },
};
</script>
