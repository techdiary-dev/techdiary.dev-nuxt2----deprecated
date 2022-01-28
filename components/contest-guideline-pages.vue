<template>
    <div>
        <nav class="mt-2">
            <nuxt-link
                class="flex mb-2 space-x-2 text-base text-dark"
                v-for="(page, i) in pages"
                :key="i"
                :to="{ name: 'contest-slug', params: { slug: page.slug } }"
            >
                <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path>
                </svg>
                <span> {{ page.label }}</span>
            </nuxt-link>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pages: [
                {
                    label: "নীতিমালা এবং শর্তাদি",
                    slug: "writting-rules",
                },
                {
                    label: "ব্লগ লিখার কিছু টিপস এন্ড ট্রিক্স",
                    slug: "writing-tricks",
                },
                {
                    label: "অসাধারণ ব্লগ লেখার সাধারণ কিছু টিপস",
                    slug: "good-article-tips",
                },
            ],
        };
    },
};
</script>
