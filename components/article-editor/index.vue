<template>
    <div>
        <header class="flex items-center justify-between p-4">
            <div class="flex flex-col items-start">
                <div class="w-full" id="tour-step-0">
                    <span class="mr-0 font-mono"
                        >/{{ $auth.user.username }}/</span
                    >
                    <input
                        v-model="slug"
                        maxlength="255"
                        type="text"
                        v-autowidth
                        class="flex-1 pl-0 -ml-1 font-mono border-none focus:ring-0"
                        ref="slugInput"
                        @click="$event.target.select()"
                        @input="handleChangeSlug"
                    />
                </div>
                <button
                    @click="$refs.slugInput.select()"
                    class="text-sm font-semibold text-gray-600 cursor-pointer"
                >
                    ডায়েরির লিংক
                </button>
            </div>

            <div class="flex flex-col items-end">
                <div class="flex items-center space-x-3">
                    <nuxt-link
                        :to="{ name: 'dashboard' }"
                        class="flex items-center space-x-1 text-dark"
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
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                            />
                        </svg>
                        <span>ড্যাসবোর্ড</span>
                    </nuxt-link>

                    <button
                        @click="article.isPublished = !article.isPublished"
                        class="flex items-center px-2 py-1"
                        :class="{
                            'text-green-500': article.isPublished,
                            'text-red-500': !article.isPublished,
                        }"
                        id="tour-step-1"
                    >
                        <svg
                            data-title="Lock"
                            v-if="!article.isPublished"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clip-rule="evenodd"
                            />
                        </svg>

                        <svg
                            v-else
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>

                        {{ article.isPublished ? "প্রকাশিত" : "খসড়া" }}
                    </button>

                    <a
                        class="flex items-center px-2 py-1 space-x-1 uppercase text-dark"
                        target="_blank"
                        :href="`/${$auth.user.username}/${slug}`"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path
                                fill-rule="evenodd"
                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span>দেখুন</span>
                    </a>

                    <button
                        @click="openOptions"
                        class="flex items-center space-x-1"
                        id="tour-step-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span>সেটিং</span>
                    </button>
                </div>

                <p class="text-gray-500" v-if="lastSaved">
                    সেভ হয়েছে {{ lastSaved }}
                </p>
            </div>
        </header>
        <loader v-if="$fetchState.pending" />
        <div v-else>
            <div class="max-w-4xl mx-auto">
                <textarea-autosize
                    ref="titleInput"
                    maxlength="255"
                    type="text"
                    class="w-full my-3 text-2xl font-bold bg-transparent border-0 resize-none text-dark focus:outline-none focus:ring-0"
                    placeholder="ডায়েরির শিরোনাম"
                    v-model="article.title"
                />

                <article-editor-thumbnail v-model="article.thumbnail" />

                <div class="p-2 border-2 border-dashed">
                    <markdown-td v-model="article.body" />
                </div>
            </div>

            <!-- ======================================================= -->
            <!-- Sidebar Content start -->
            <!-- ======================================================= -->
            <div
                class="fixed inset-0 z-30 w-full overflow-y-auto"
                :class="[showOptions ? 'visible' : 'invisible']"
            >
                <div
                    class="flex items-end justify-end min-h-screen px-4 pt-4 text-right sm:block sm:p-0"
                >
                    <transition
                        enter-active-class="duration-300 ease-out"
                        enter-class="opacity-0"
                        enter-to-class="opacity-100"
                        leave-active-class="duration-200 ease-in"
                        leave-class="opacity-100"
                        leave-to-class="opacity-0"
                    >
                        <div
                            class="fixed inset-0 transition-opacity"
                            aria-hidden="true"
                            v-if="showOptions"
                            @click="closeOptions"
                        >
                            <div
                                class="absolute inset-0 bg-gray-500 opacity-75"
                            ></div>
                        </div>
                    </transition>

                    <transition
                        enter-active-class="duration-300 ease-out"
                        enter-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
                        enter-to-class="translate-y-0 opacity-100 sm:scale-100"
                        leave-active-class="duration-200 ease-in"
                        leave-class="translate-y-0 opacity-100 sm:scale-100"
                        leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
                    >
                        <div
                            class="inline-block w-full max-w-sm mt-0 overflow-hidden text-left align-bottom transition-all transform bg-white shadow-xl"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-headline"
                            v-if="showOptions"
                        >
                            <div
                                class="w-full min-h-screen px-4 py-5 bg-white dark:bg-gray-800"
                            >
                                <div>
                                    <div
                                        class="mt-3 text-center sm:mt-0 sm:text-left"
                                    >
                                        <div class="mt-2">
                                            <article-editor-meta
                                                v-if="article"
                                                @closeMeta="closeOptions"
                                                :article="article"
                                                :seo="seo"
                                                :errors="errors"
                                                :settings="settings"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
            <!-- ======================================================= -->
            <!-- Sidebar Content end -->
            <!-- ======================================================= -->
        </div>
        <v-tour name="editorTour" :steps="steps"></v-tour>
    </div>
</template>

<script>
// import slugify from "slugify";
import debounce from "lodash.debounce";
import upload from "~/mixins/upload";
import formValidation from "~/mixins/form-validation";

export default {
    mixins: [upload, formValidation],
    data() {
        return {
            steps: [
                {
                    target: "#tour-step-0",
                    header: {
                        title: "আর্টিক্যাল স্লাগ",
                    },
                    content: `আপনার আর্টিক্যাল এর url এর জন্যে স্বয়ংক্রিয়ভাবে একটি ইউনিক আইডি সংযুক্ত করে দেয়া হয়েছে, আপনি চাইলে এই slug পরিবর্তন করতে পারেন।`,
                },
                {
                    target: "#tour-step-1",
                    header: {
                        title: "আর্টিক্যাল পাবলিশ করতে এখানে ক্লিক করুন",
                    },
                    content:
                        "আর্টিক্যাল খসড়া(Draft) অবস্থায় থাকলে হোম পেইজে দেখানো হবে না, তবে আপনি চাইলে যে কাউকে দেখাতে পারবেন। পাবলিশ করতে এখানে ক্লিক করুন। ",
                },
                {
                    target: "#tour-step-2",
                    header: {
                        title: "আর্টিক্যাল সেটিং",
                    },
                    content:
                        "ট্যাগ, মেটা ডেসক্রিপশন, সোশ্যাল মিডিয়া ইমেজ সহ আর্টিক্যাল এর সকল SEO সেটিং পাবেন এখানে ",
                    params: {
                        placement: "right",
                    },
                },
            ],

            editorMode: "editor",
            lastSaved: null,
            interval: null,
            showOptions: false,
            editorLoading: false,
            loading: false,

            slug: "",
            //article props
            article: {
                id: "",
                title: "",
                thumbnail: "",
                isPublished: false,
                body: "",
                htmlBody: "",
                tags: [],
            },
            seo: {
                og_image: "",
                seo_title: "",
                seo_description: "",
                canonical_url: "",
            },
            settings: {
                disabled_comments: false,
            },
        };
    },
    async fetch() {
        try {
            const { data: article } = await this.$axios.$get(
                `/api/articles/uuid/${this.$route.params.id}`
            );

            this.slug = article.slug;

            this.article.id = article.id;
            this.article.title = article.title;
            this.article.isPublished = article.isPublished || false;
            this.article.thumbnail = article.thumbnail || "";
            this.article.body = article.body.markdown;
            this.article.htmlBody = article.body.html;
            this.article.tags = article.tags;

            // seo
            this.seo.og_image = article?.seo?.og_image || "";
            this.seo.seo_title = article?.seo?.seo_title || "";
            this.seo.seo_description = article?.seo?.seo_description || "";
            this.seo.canonical_url = article?.seo?.canonical_url || "";

            // settings
            this.settings.disabled_comments =
                article?.settings?.disabled_comments || false;

            // console.log(this.$refs.titleInput);

            const isTourSeen =
                JSON.parse(localStorage.getItem("tour-seen")) || false;
            if (!isTourSeen) {
                localStorage.setItem("tour-seen", true);
                this.$tours["editorTour"].start();
            }
        } catch (e) {
            console.log(e);
        }
    },
    watch: {
        article: {
            handler: debounce(async function (article) {
                this.save(article);
            }, 1000),
            deep: true,
        },
        seo: {
            handler: debounce(async function (seo) {
                this.save({ seo });
            }, 500),
            deep: true,
        },
        settings: {
            handler: debounce(async function (settings) {
                this.save({ settings });
            }, 500),
            deep: true,
        },
    },
    methods: {
        handleResizeHeight(target) {
            target.style.height = "auto";
            target.style.height = target.scrollHeight + "px";
        },
        handleResizeTitleInput(e) {
            this.handleResizeHeight(e.target);
        },
        handleChangeSlug() {
            this.generateSlug();
        },
        generateSlug: debounce(function () {
            this.save({ slug: this.slug }).then((res) => {
                this.slug = res.article.slug;
            });
        }, 1000),
        async save(payload) {
            try {
                this.loading = true;
                const res = await this.$axios.$put(
                    `api/articles/uuid/${this.$route.params.id}`,
                    payload
                );

                this.loading = false;

                clearInterval(this.interval);
                this.touchLastSaved();
                return res;
            } catch (e) {
                this.catchValidationErrors(e);
            }
        },
        touchLastSaved() {
            const lastSaved = new Date();
            this.interval = setInterval(() => {
                this.lastSaved = this.$dayjs(lastSaved).fromNow();
            }, 2000);
        },
        openOptions() {
            this.showOptions = true;
        },
        closeOptions() {
            this.showOptions = false;
        },
        toggleOptions() {
            this.showOptions = !this.showOptions;
        },
        openUploadWindow() {
            this.$refs.thumbnailFileInput.click();
        },
    },
};
</script>
