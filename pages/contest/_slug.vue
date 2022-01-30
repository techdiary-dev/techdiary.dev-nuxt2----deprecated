<template>
    <div>
        <header class="py-5 text-center hero">
            <div
                class="inline-block col-span-1 space-y-8 transition duration-200 transform md:-rotate-3"
            >
                <h3 class="font-mono">
                    <a href="https://techdiary.dev" class="underline">
                        techdiary.dev
                    </a>
                    presents
                </h3>

                <h1 class="text-3xl md:text-6xl font-boshonto">
                    ডেভ আর্টিকেল
                    <span class="block text-fuchsia md:text-[95px] text-6xl">
                        কন্টেস্ট
                    </span>
                </h1>

                <h3 class="text-3xl font-boshonto">Session 2</h3>
            </div>
        </header>
        <div class="mx-auto wrapper font-body">
            <div class="grid grid-cols-12 my-10">
                <div class="col-span-12 mb-5 md:col-span-2">
                    <contest-guideline-pages />
                </div>

                <div
                    class="col-span-12 p-5 mx-auto prose prose-lg shadow lg:col-span-10 max-w-none"
                >
                    <nuxt-link
                        to="/"
                        class="flex items-center space-x-3 text-dark"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        <span>হোম পেইজ</span>
                    </nuxt-link>

                    <div>
                        <h2 class="inline-block border-b-2 text-dark">
                            {{ page.title }}
                        </h2>
                    </div>
                    <div class="prose prose-lg dark:prose-invert">
                        <nuxt-content :document="page" />
                    </div>
                </div>
            </div>
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
        const page = await $content("_contest/guides", params.slug).fetch();
        return { page };
    },
};
</script>

<style scoped lang="scss">
.hero {
    // background-image: url("~/static/images/hero.svg");
    // background-position: left center;
    @apply bg-no-repeat bg-left-bottom  text-white;

    background-image: url("/images/hero.png"),
        linear-gradient(205.5deg, #321b50 10.82%, rgba(19, 30, 63, 0.88) 84.93%);
}
</style>
