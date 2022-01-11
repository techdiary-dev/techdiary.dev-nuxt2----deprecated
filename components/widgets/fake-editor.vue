<template>
  <div class="fake-editor" @click="sperkArticle">
    <svg viewBox="0 0 512 512" class="fake-editor__icon">
      <path
        d="M384 250v12c0 6.6-5.4 12-12 12h-98v98c0 6.6-5.4 12-12 12h-12c-6.6 0-12-5.4-12-12v-98h-98c-6.6 0-12-5.4-12-12v-12c0-6.6 5.4-12 12-12h98v-98c0-6.6 5.4-12 12-12h12c6.6 0 12 5.4 12 12v98h98c6.6 0 12 5.4 12 12zm120 6c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-32 0c0-119.9-97.3-216-216-216-119.9 0-216 97.3-216 216 0 119.9 97.3 216 216 216 119.9 0 216-97.3 216-216z"
      ></path>
    </svg>

    <p class="fake-editor__placeholder">
      নতুন ডায়েরি লিখুন 😍
    </p>
  </div>
</template>

<script>
import swal from "sweetalert";
export default {
  methods: {
    async sperkArticle() {
      if (!this.$auth.loggedIn) {
        swal({
          title: "আপনি লগইন অবস্থায় নেই",
          icon: "error"
        });
        return;
      }

      const post = await this.$axios.$post("api/articles/spark");

      this.$router.push({
        name: "dashboard-diaries-edit-id",
        params: { id: post.uuid }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.fake-editor {
  @apply transition-all duration-150;
  @apply bg-gray-200 dark:bg-slate-700 hover:bg-white dark:hover:bg-slate-600;
  @apply border border-gray-300 dark:border-gray-600;
  @apply flex p-5 rounded cursor-pointer;

  &__icon {
    @apply w-6 h-6;
    @apply text-gray-700 dark:text-gray-300;
    @apply mr-4 opacity-75 fill-current;
  }

  &__placeholder {
    @apply text-base text-gray-700 dark:text-gray-400;
  }
}
</style>
