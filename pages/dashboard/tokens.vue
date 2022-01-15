<template>
    <div>
        <div class="flex justify-between">
            <h2 class="text-lg font-semibold">পার্সোনাল এক্সেস টোকেন</h2>
            <div class="flex space-x-4" v-if="!!tokens.length">
                <a
                    href="https://go.techdiary.dev/api-doc"
                    target="_blank"
                    class="flex items-center space-x-1 capitalize text-dark"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                        />
                        <path
                            d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                        />
                    </svg>
                    <span>Api Documentation</span>
                </a>
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
                    <span>নতুন টোকেন</span>
                </button>
            </div>
        </div>

        <!-- New token form -->
        <div
            class="relative p-3 my-4 border app-border-color"
            v-if="newTokenPopup"
        >
            <button
                class="absolute top-0 text-4xl text-red-400 right-2"
                @click="newTokenPopup = false"
            >
                &times;
            </button>
            <h2 class="text-lg font-semibold">নতুন এক্সেস টোকেন তৈরি করুন</h2>
            <form
                action="#"
                @submit.prevent="createToken"
                method="post"
                class="flex flex-col mt-4 space-y-2"
            >
                <form-input
                    label="টোকেন এর নাম"
                    v-model="newTokenName"
                    :error="hasError('name')"
                    :helperText="hasErrorMessage('name')"
                />
                <form-button :loading="loading">Save</form-button>
            </form>
        </div>

        <!-- Generated token -->
        <div
            v-if="newToken"
            class="flex flex-col p-4 mt-2 space-y-2 border rounded app-border-color"
        >
            <h3 class="text-lg font-semibold">নতুন টোকেন তৈরি হয়ে গেছে</h3>
            <p>
                এই টোকেন সংরক্ষণ করে রাখুন। আপনার সামনে এই টোকেনটি আর দেখানো হবে
                না।
            </p>
            <form-copyable :text="newToken" />
        </div>

        <!-- Token list -->
        <div class="flex flex-col mt-3 space-y-4" v-if="!!tokens.length">
            <div
                class="flex items-center justify-between px-4 py-2 border rounded app-border-color hover:bg-slate-50 hover:dark:bg-slate-800"
                v-for="(token, index) in tokens"
                :key="token.id"
                :data-token-id="token.id"
            >
                <div class="flex items-center space-x-2">
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
                            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                        />
                    </svg>
                    <div>
                        <h3 class="text-lg font-semibold">{{ token.name }}</h3>
                        <p v-if="token.last_used_at" class="text-emerald-500">
                            সর্বশেষ ব্যবহার করা হয়েছে:
                            <span class="font-semibold">
                                {{
                                    $dayjs(token.last_used_at).format(
                                        "DD MMMM YYYY, hh:mm A"
                                    )
                                }}
                            </span>
                        </p>
                        <p v-else class="text-slate-500">
                            এখনো ব্যবহার করা হয়নি
                        </p>
                    </div>
                </div>

                <button class="text-red-500" @click="deleteToken(token, index)">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Empty token -->
        <div v-else class="p-4 mt-6 border-2 border-dashed app-border-color">
            <img
                class="mx-auto lg:w-4/12"
                src="~/static/images/fabulous-late-night-working.png"
            />

            <h3
                class="my-6 text-xl font-semibold text-center text-dark-secondary"
            >
                আপনি এখনো কোন পার্সোনাল এক্সেস টোকেন তৈরি করেননি।
            </h3>

            <div class="flex justify-center space-x-4">
                <a
                    href="https://go.techdiary.dev/api-doc"
                    target="_blank"
                    class="flex items-center space-x-1 capitalize text-dark"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                        />
                        <path
                            d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                        />
                    </svg>
                    <span>Api Documentation</span>
                </a>
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
                    <span>নতুন টোকেন</span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import swal from "sweetalert";
import formValidation from "~/mixins/form-validation";

export default {
    layout: "dashboard",
    mixins: [formValidation],
    loading: false,
    head: {
        title: "এক্সেস টোকেন",
    },
    async fetch() {
        const { data } = await this.$axios.$get("/api/tokens");
        this.tokens = data;
    },
    data() {
        return {
            tokens: [],
            newTokenName: "",
            newToken: "",
            newTokenPopup: false,
        };
    },
    methods: {
        createTokenFormOpen() {
            this.newTokenPopup = true;
            this.newToken = "";
            this.newTokenName = "";
        },
        async createToken() {
            this.loading = true;
            this.errors = {};
            try {
                const { token } = await this.$axios.$post("/api/tokens", {
                    name: this.newTokenName,
                });
                this.newToken = token;
                this.newTokenPopup = false;
                this.$toast.success("টোকেন তৈরি হয়েছে");
                this.loading = false;
                this.$fetch();
            } catch (error) {
                this.loading = false;
                if (error.response.data.errors)
                    this.errors = error.response.data.errors;
            }
        },
        async deleteToken(token, index) {
            swal({
                title: "আপনি কি এই এক্সেস টোকেন মুছে ফেলতে চান?",
                text: "সাবধান - একবার মুছে ফেলার পর, এই টোকেন আর ব্যবহার করতে পারবেন না",
                icon: "warning",
                buttons: ["না", "হ্যাঁ"],
                buttons: true,
                dangerMode: true,
            }).then(async (willDelete) => {
                if (willDelete) {
                    await this.$axios.$delete(`/api/tokens/${token.id}`);
                    this.tokens.splice(index, 1);
                    this.$toast.success("এক্সেস টোকেন মুছে ফেলা হয়েছে।");
                    this.newToken = "";
                }
            });
        },
    },
};
</script>
