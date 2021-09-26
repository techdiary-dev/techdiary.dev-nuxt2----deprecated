<template>
  <div>
    <h3 class="text-sm font-semibold text-gray-600 dark:text-blueGray-300">
      সর্বশেষ নিবন্ধিত ব্যবহারকারী
    </h3>

    <div class="flex flex-col gap-5 ">
      <!--  -->
      <div class="flex items-center" v-for="user in users" :key="user.id">
        <nuxt-link
          :to="{ name: 'username', params: { username: user.username } }"
        >
          <div class="w-10 h-10 overflow-hidden rounded-full">
            <img
              :src="user.profilePhoto"
              loading="lazy"
              class="w-full h-auto"
            />
          </div>
        </nuxt-link>

        <div class="ml-2">
          <h3 class="text-base text-dark">
            <nuxt-link
              class="text-gray-800 dark:text-gray-300 "
              :to="{ name: 'username', params: { username: user.username } }"
            >
              {{ user.name }}
            </nuxt-link>
          </h3>
          <p class="text-xs text-dark-secondary">
            {{ $dayjs(user.joined).fromNow() }}
          </p>
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: []
    };
  },
  async fetch() {
    const { data } = await this.$axios.$get("api/users");
    this.users = data;
  }
};
</script>
