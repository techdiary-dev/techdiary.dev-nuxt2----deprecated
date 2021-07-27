<template>
  <div class="my-10 ">
    <Loader />
  </div>
</template>

<script>
export default {
  mounted() {
    const query = new URLSearchParams(this.$route.query).toString();
    this.$axios
      .$post(`api/auth/oauth/signed-login?${query}`)
      .then(async res => {
        await this.$auth.loginWith("laravelSanctum", {
          data: {}
        });
        location.href = "/";
      });
  }
};
</script>
