<template>
    <div class="flex flex-col h-screen p-10 text-white bg-slate-900">
        <div class="flex-1">
            <pre>
                {{ article }}
            </pre>
            <h3 class="text-5xl font-semibold leading-relaxed line-clamp-3">
                কেন একজন প্রোগ্রামার হিসেবে আপনার সি শেখা উচিত?(Reuploaded). কেন
                একজন প্রোগ্রামার হিসেবে আপনার সি শেখা উচিত?(Reuploaded). কেন
                একজন প্রোগ্রামার হিসেবে আপনার সি শেখা উচিত?(Reuploaded)
            </h3>
        </div>

        <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
                <img
                    class="rounded-full w-14"
                    src="https://lh3.googleusercontent.com/a-/AOh14GgX4XzrNxeDmT8ndczkGaTKmcYjxPJ-RCHqZNOHjw=s96-c"
                />
                <div>
                    <p class="text-2xl">@imran</p>
                    <p>17 জানুয়ারি 2022</p>
                </div>
            </div>
            <LogosText />
        </div>
    </div>
</template>
<script>
export default {
    layout: "blank",
    head: {
        title: "Thumbnail",
    },
    async asyncData({ $axios, $route }) {
        const { data: article } = await $axios.$get(
            `/api/articles/uuid/${$route.query.postId}`
        );

        return { article };
    },
};
</script>
