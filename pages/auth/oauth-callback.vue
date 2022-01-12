<template>
  <div class="my-10">
    <Loader v-if="!error" />
    <div v-else>
      <h1 class="text-3xl">Something went wrong</h1>
      <h2 class="text-2xl text-red-500">
        {{ error.message }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Please wait...",
  },
  data() {
    return {
      error: "",
    };
  },
  async mounted() {
    /**
     * Getting cookies
     */
    await this.$axios.$get("/sanctum/csrf-cookie");

    /**
     * Get queries
     */
    const query = new URLSearchParams(this.$route.query).toString();

    try {
      await this.$axios.$post(`api/auth/oauth/signed-login?${query}`);

      await this.$auth.loginWith("laravelSanctum", {
        data: {},
      });

      location.href = "/";
    } catch (error) {
      this.error = error.response.data;
      console.log(error.response.data);
    }
  },
};
</script>
