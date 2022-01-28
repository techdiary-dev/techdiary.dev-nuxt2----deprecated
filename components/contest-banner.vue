<template>
    <section>
        <div class="hero wrapper">
            <div
                class="flex flex-col items-center grid-cols-2 space-x-12 h-96 lg:flex-row"
            >
                <div
                    class="inline-block col-span-1 space-y-8 transition duration-200 transform"
                >
                    <h3 class="font-mono">
                        <a href="https://techdiary.dev" class="underline">
                            techdiary.dev
                        </a>
                        presents
                    </h3>

                    <h1 class="text-2xl md:text-3xl font-boshonto">
                        ডেভ আর্টিকেল
                        <span
                            class="block text-fuchsia md:text-[95px] text-6xl"
                        >
                            কন্টেস্ট
                        </span>
                    </h1>

                    <h3 class="text-4xl font-boshonto">Session 2</h3>

                    <nuxt-link
                        to="/contest"
                        class="flex p-2 mt-4 space-x-1 text-xl font-semibold text-white border border-dashed w-max"
                    >
                        <span>বিস্তারিত</span>
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
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
section {
    // background-image: url("~/static/images/hero.svg");
    // background-position: left center;
    @apply bg-no-repeat bg-left-bottom  text-white;

    background-image: url("/images/hero.png"),
        linear-gradient(205.5deg, #321b50 10.82%, rgba(19, 30, 63, 0.88) 84.93%);
}
</style>
