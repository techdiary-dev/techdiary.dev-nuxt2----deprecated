<template>
    <div>
        <!-- Top Ribbon start -->

        <div class="flex items-center justify-between">
            <h1 class="flex items-center space-x-2 text-xl">
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
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                </svg>
                <span>টেকডায়েরি সিরিজ</span>
            </h1>
            <button
                @click="createTokenFormOpen"
                class="flex items-center px-2 py-1 space-x-1 text-white rounded bg-slate-800"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clip-rule="evenodd"
                    />
                </svg>
                <span>নতুন সিরিজ</span>
            </button>
        </div>
        <!-- Top Ribbon end -->

        <div class="p-4 mt-6 border-2 border-dashed app-border-color">
            <img
                class="mx-auto lg:w-4/12"
                src="~/static/images/flamenco-downloading-1.png"
            />

            <h3
                class="my-6 text-xl font-semibold text-center text-dark-secondary"
            >
                আপনি এখনো কোন সিরিজ তৈরি করেননি।
            </h3>

            <div class="flex justify-center space-x-4">
                <button
                    @click="createTokenFormOpen"
                    class="flex items-center px-2 py-1 space-x-1 text-white rounded bg-slate-800"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    <span>নতুন সিরিজ</span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: "dashboard",
    head: {
        title: "টেকডায়েরি সিরিজ",
    },
};
</script>
