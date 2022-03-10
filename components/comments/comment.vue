<template>
    <client-only>
        <div class="flex space-x-2">
            <nuxt-link
                :to="{
                    name: 'username',
                    params: { username: comment.user.username },
                }"
            >
                <app-image
                    class="flex-none w-10 h-10 overflow-hidden rounded-full"
                    :src="comment.user.profilePhoto"
                    :alt="comment.user.name"
                    :title="comment.user.name"
                />
            </nuxt-link>
            <div class="flex flex-col">
                <div class="flex items-center gap-2">
                    <nuxt-link
                        :to="{
                            name: 'username',
                            params: { username: comment.user.username },
                        }"
                        class="font-semibold text-dark"
                    >
                        {{ comment.user.name }}
                    </nuxt-link>
                    <p class="text-sm italic text-dark-secondary">
                        {{ created_at }}
                    </p>
                </div>
                <div class="flex flex-col">
                    <div>
                        {{ comment.body }}
                    </div>
                    <div class="flex items-center gap-1 mt-2">
                        <VoteWrapper
                            :votesData="comment.votes"
                            v-slot:default="{
                                score,
                                upVote,
                                downVote,
                                isUpvotted,
                                isDownvotted,
                            }"
                        >
                            <div
                                class="flex items-center gap-1 p-1 border border-dashed"
                            >
                                <button @click="upVote('COMMENT', comment.id)">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-5 h-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        :class="{
                                            'text-primary': isUpvotted,
                                            'text-dark-secondary': !isUpvotted,
                                        }"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </button>
                                <span class="text-base">{{ score }}</span>
                                <button
                                    @click="downVote('COMMENT', comment.id)"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-5 h-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        :class="{
                                            'text-red-500': isDownvotted,
                                            'text-dark-secondary':
                                                !isDownvotted,
                                        }"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </VoteWrapper>

                        <!-- <button
                            class="px-2 py-1 text-xs font-semibold rounded-md hover:bg-slate-200"
                        >
                            উত্তর দিন
                        </button> -->
                        <button
                            v-if="$auth.loggedIn"
                            @click="handleDeleteComment"
                            class="px-2 py-1 text-xs font-semibold text-red-500 rounded-md hover:bg-red-200"
                        >
                            মুছুন
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </client-only>
</template>
<script>
import VoteWrapper from "@/components/vote-wrapper.vue";
import swal from "sweetalert";
export default {
    props: ["comment"],
    components: {
        VoteWrapper,
    },
    computed: {
        created_at() {
            return this.$dayjs(this.comment.created_at).format(
                "DD MMMM YYYY, hh:mm A"
            );
        },
    },
    methods: {
        handleDeleteComment() {
            if (this.$auth.user.id != this.comment.user.id)
                return alert("You can't delete this comment");

            swal({
                title: "আপনি নিশ্চিত আপনি এই মন্তব্য মুছে ফেলতে চান?",
                text: "একবার মুছে ফেলার পর আর সেটি ফিরিয়ে আনা যাবে না!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((willDelete) => {
                if (!willDelete) return;
                this.$emit("deleteComment", this.comment);
            });
        },
    },
};
</script>
