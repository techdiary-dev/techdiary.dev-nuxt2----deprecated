<template>
    <div class="grid grid-cols-1 gap-6 my-2 lg:my-6 md:grid-cols-12 lg:gap-10">
        <aside class="md:col-span-3 col-span-full">
            <div>
                <img
                    class="w-full rounded"
                    :src="user.profilePhoto"
                    :alt="user.username"
                    v-if="user.profilePhoto"
                />

                <div class="mt-4">
                    <h2 class="text-xl font-semibold">{{ user.name }}</h2>
                    <p class="lowercase">@{{ user.username }}</p>
                </div>

                <p class="my-2 text-base" v-if="user.designation">
                    {{ user.designation }}
                </p>

                <p class="my-2 text-sm" v-if="user.bio">{{ user.bio }}</p>

                <!-- User infos start -->
                <div class="flex flex-col mt-2 space-y-2">
                    <div
                        class="flex items-center space-x-1"
                        v-if="user.website_url"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <a
                            :href="user.website_url"
                            target="_blank"
                            class="text-sm text-dark hover:underline"
                        >
                            {{ user.website_url }}
                        </a>
                    </div>
                    <div
                        class="flex items-center space-x-1"
                        v-if="user.education"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                            />
                        </svg>
                        <span class="text-sm">{{ user.education }}</span>
                    </div>
                    <div class="flex items-center space-x-1" v-if="user.email">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span class="text-sm">{{ user.email }}</span>
                    </div>
                    <div
                        class="flex items-center space-x-1"
                        v-if="user.location"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span class="text-sm">{{ user.location }}</span>
                    </div>
                </div>
                <!-- User infos end -->
            </div>
        </aside>
        <main
            class="border rounded app-border-color md:col-span-9 col-span-full"
        >
            <!-- Navigation start -->
            <nav class="navigation">
                <a href="#" class="navigation__item navigation__item--active">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                            clip-rule="evenodd"
                        />
                    </svg>

                    <span class="navigation__label">প্রোফাইল</span>
                </a>
                <nuxt-link
                    v-if="user"
                    :to="{
                        name: 'username-articles',
                        params: { username: user.username },
                    }"
                    class="navigation__item"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
                        />
                    </svg>

                    <span class="navigation__label">সকল আর্টিক্যাল</span>
                </nuxt-link>
                <nuxt-link
                    href="#"
                    class="navigation__item"
                    v-if="$auth.loggedIn && user.id === $auth.user.id"
                    :to="{ name: 'dashboard-settings' }"
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

                    <span class="navigation__label">সেটিং</span>
                </nuxt-link>
            </nav>
            <!-- Navigation end -->
            <div
                class="p-4 prose lg:prose-lg max-w-none prose-img:inline-block prose-p:my-0 dark:prose-invert"
                v-if="user.profile_readme_html"
                v-html="user.profile_readme_html"
            ></div>
            <div v-else>
                <img
                    class="mx-auto lg:w-6/12"
                    src="~/static/images/robots-drones-artificial-intelligence-1.png"
                    alt=""
                />

                <div class="my-4">
                    <h2 class="text-xl font-bold text-center">
                        {{ user.name }} এর টেক প্রোফাইল এখনো খালি
                    </h2>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: this.user ? this.user.username : "Loading...",
        };
    },
    data() {
        return {
            user: {},
        };
    },
    async fetch() {
        try {
            const { data: user } = await this.$axios.$get(
                `/api/profile/username/${this.$route.params.username}`
            );
            this.user = user;
        } catch (error) {
            this.$nuxt.error({
                statusCode: 400,
                message: "প্রোফাইল খুঁজে পাওয়া যায়নি",
            });
        }
    },
};
</script>

<style lang="scss" scoped>
.navigation {
    @apply flex mb-2 space-x-4 border-b dark:border-slate-700;

    &__item {
        @apply text-slate-600 dark:text-slate-100;
        @apply flex items-center pb-2 space-x-1 border-b-2 border-transparent p-3;

        &--active,
        &:hover {
            @apply border-primary;
        }
    }
    &__label {
        @apply text-sm;
    }
}
</style>
