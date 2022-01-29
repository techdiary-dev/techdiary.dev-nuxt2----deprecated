<template>
    <div class="max-w-4xl mx-auto">
        <div class="my-8">
            <h2
                class="py-4 mb-3 text-5xl font-extrabold font-boshonto text-gradient bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500"
            >
                ডেভ আর্টিকেল কন্টেস্ট
            </h2>

            <p class="text-xl font-semibold md:text-2xl text-dark">
                টানা ২য় বারের মত চলে আসল ডেভ আর্টিকেল কন্টেস্ট সিজন ২। এইবারের
                কন্টেস্ট এর টপ ১০ জন লেখক এর জন্য থাকছে
                <a
                    href="https://www.devshopbd.com/"
                    target="_blank"
                    rel="sponsor"
                >
                    ডেভশপ বিডি
                </a>
                থেকে আকর্ষনীয় ১০ টি শার্ট আর টেকডাইরি থেকে আকর্ষনীয় স্টিকার
                প্যাক।
            </p>

            <div
                class="px-5 mx-auto mt-4 prose-xl border-2 border-dashed rounded-md font-body max-w-none"
            >
                <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div class="col-span-1">
                        <h3 class="text-dark">আর্টিকেল লিখুন</h3>
                        <h3 class="not-prose">
                            <code
                                class="p-1 text-white rounded-md bg-slate-800"
                            >
                                contest_season_2
                            </code>
                        </h3>
                        <h3 class="text-dark">ট্যাগ দিয়ে</h3>
                    </div>
                    <div class="col-span-1">
                        <h3 class="text-dark">ফেসবুকে শেয়ার করুন</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://www.facebook.com/hashtag/techdiary_contest_2"
                                    class="!no-underline text-dark"
                                >
                                    #techdiary_contest_2
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="mt-20">
                <h2 class="text-4xl font-semibold leading-relaxed">
                    <span class="text-indigo-600">কনটেস্টের</span> এর
                    নিয়মাবলী<span></span>
                </h2>

                <div
                    class="p-5 mx-auto my-10 prose prose-lg bg-white shadow wrapper max-w-none font-body"
                >
                    <nuxt-content :document="rules" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $content }) {
        const rules = await $content("_contest", "welcome").fetch();
        return { rules };
    },
};
</script>
