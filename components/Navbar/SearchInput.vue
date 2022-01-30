<template>
    <div class="relative hidden w-full max-w-xl lg:block">
        <div class="search" :class="{ 'search--popup': popupOpen }">
            <svg
                class="search__icon search__icon--magnify"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                />
            </svg>
            <input
                type="text"
                placeholder="Type to search"
                class="search__input"
                v-model="query"
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="search__icon search__icon--x"
                viewBox="0 0 20 20"
                fill="currentColor"
                @click="$emit('close')"
            >
                <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                />
            </svg>
        </div>

        <div
            v-if="results && query"
            class="absolute left-0 flex flex-col w-full max-h-screen p-2 space-y-4 overflow-y-auto bg-white rounded-bl rounded-br shadow-md dark:bg-slate-800 top-full"
        >
            <nuxt-link
                v-for="result in results"
                :key="result.result"
                :to="{
                    name: 'username-slug',
                    params: {
                        username: result.user.username,
                        slug: result.slug,
                    },
                }"
                class="hover:opacity-80"
            >
                <p
                    v-if="result._highlightResult.title"
                    class="text-lg text-dark title"
                    v-html="result._highlightResult.title.value"
                ></p>
                <p class="text-dark-secondary">@{{ result.user.username }}</p>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import debounce from "lodash.debounce";
import { mapState } from "vuex";
export default {
    props: ["popupOpen"],
    data() {
        return {
            query: "",
            // query: this.$route.query.q || "",
        };
    },
    watch: {
        query: {
            handler: debounce(function (query) {
                this.$store.dispatch("search/doSearch", {
                    index: "articles",
                    query,
                    page: 1,
                });

                // window.history.pushState({}, "", `/?q=${query}`);
                // if (query)
                //     this.$router.push({
                //         name: "search-query",
                //         params: { query },
                //     });
            }, 500),
        },
    },
    computed: {
        ...mapState("search", ["results", "meta"]),
    },
    methods: {
        handleClick() {
            console.log("first");
        },
    },
};
</script>

<style lang="scss">
.title {
    em {
        @apply not-italic bg-yellow-400 text-slate-700;
    }
}
</style>
<style lang="scss" scoped>
.search {
    // @apply absolute top-0 left-0 z-50 w-full;

    &--popup {
        display: block !important;
        @apply absolute max-w-none top-0 left-0 z-50 w-full;
    }

    &--popup {
        .search__input {
            @apply w-full h-full py-4 pl-8 border rounded bg-slate-100 border-slate-200 focus:ring-primary focus:outline-none;
        }
    }

    &__input {
        //
        @apply w-full;
        @apply bg-slate-100 border-slate-200 dark:border-slate-600 dark:bg-slate-800 focus:ring-primary focus:ring-2 focus:outline-none;
        @apply border rounded;
    }

    &__icon {
        @apply absolute w-5 h-5 text-slate-400 translate-y-[-50%];
        @apply inline-block md:hidden;

        &--magnify {
            @apply left-2 top-[50%];
        }
        &--x {
            @apply right-2 top-[50%] cursor-pointer;
        }
    }
}
</style>
