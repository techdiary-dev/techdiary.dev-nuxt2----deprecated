<template>
  <div class="p-3 border border-gray-200 rounded dark:border-gray-700">
    <div class="mb-4 font-semibold text-gray-500 dark:text-gray-300">
      Profile Readme
    </div>
    <div>
      <form action="#" method="POST" @submit.prevent="save">
        <client-only>
          <markdown-td v-model="form.profile_readme" />
        </client-only>

        {{ hasErrorMessage("profile_readme") }}

        <div class="flex items-center space-x-4">
          <form-button :loading="loading"> হালনাগাদ </form-button>
          <nuxt-link
            :to="{
              name: 'username',
              params: { username: $auth.user.username },
            }"
            class="px-3 py-1 text-white rounded bg-slate-800 focus:shadow-outline"
          >
            Preview
          </nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import validationHelper from "~/mixins/form-validation";

export default {
  mixins: [validationHelper],
  data() {
    return {
      form: {
        profile_readme: this.$auth.user?.profile_readme || "",
      },
      loading: false,
    };
  },
  methods: {
    async save() {
      this.loading = true;
      try {
        await this.$axios.$post("/api/profile/update", this.form);
        this.$toast.success("Updated successfully");
        this.loading = false;
        this.errors = {};
      } catch (e) {
        this.loading = false;
      }
    },
  },
};
</script>
