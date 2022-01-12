<template>
  <div class="p-3 border border-gray-200 rounded dark:border-gray-700">
    <div class="mb-4 font-bold text-gray-500 dark:text-gray-300">
      সাধারন তথ্যসমূহ
    </div>
    <div>
      <form action="#" method="POST" @submit.prevent="save">
        <form-input
          v-model="form.name"
          label="নাম"
          class="mb-3"
          placeholder="আপনার নাম"
          type="text"
          :required="true"
          :error="hasError('name')"
          :helperText="hasErrorMessage('name')"
        />

        <form-input
          v-model="form.username"
          label="ইউজারনেম"
          :required="true"
          class="mb-3"
          placeholder="আপনার ইউজারনেম"
          type="text"
          :error="hasError('username')"
          :helperText="hasErrorMessage('username')"
        />

        <form-input
          v-model="form.email"
          label="ইমেইল"
          class="mb-3"
          :required="true"
          placeholder="আপনার ইমেইল"
          type="email"
          :error="hasError('email')"
          :helperText="hasErrorMessage('email')"
        />

        <form-input
          v-model="form.education"
          label="শিক্ষাগত যোগ্যতা"
          class="mb-3"
          placeholder="আপনার শিক্ষাগত যোগ্যতা"
          :error="hasError('education')"
          :helperText="hasErrorMessage('education')"
        />

        <form-input
          v-model="form.designation"
          label="পেশাগত উপাধি (Designation or job title)"
          class="mb-3"
          placeholder="আপনার পেশাগত বা মনস্তাত্বিক উপাধি"
          :error="hasError('designation')"
          :helperText="hasErrorMessage('designation')"
        />

        <form-input
          v-model="form.website_url"
          label="ওয়েবসাইট"
          class="mb-3"
          placeholder="আপনার পেশাগত বা মনস্তাত্বিক উপাধি"
          :error="hasError('website_url')"
          :helperText="hasErrorMessage('website_url')"
        />

        <form-input
          v-model="form.location"
          label="ঠিকানা"
          class="mb-3"
          placeholder="আপনার পেশাগত বা মনস্তাত্বিক উপাধি"
          :error="hasError('location')"
          :helperText="hasErrorMessage('location')"
        />

        <form-textarea
          v-model="form.bio"
          label="সংক্ষিপ্ত জীবন ইতিহাস"
          class="mb-3"
          :error="hasError('bio')"
          :helperText="hasErrorMessage('bio')"
        />

        <form-button :loading="loading"> হালনাগাদ </form-button>
      </form>
    </div>
  </div>
</template>
<script>
import formValidation from "~/mixins/form-validation";

export default {
  mixins: [formValidation],
  data() {
    return {
      form: {
        name: this.$auth.user.name || "",
        email: this.$auth.user.email || "",
        username: this.$auth.user.username || "",
        education: this.$auth.user.education || "",
        designation: this.$auth.user.designation || "",
        website_url: this.$auth.user.website_url || "",
        location: this.$auth.user.location || "",
        bio: this.$auth.user.bio || "",
      },
      loading: false,
    };
  },
  methods: {
    async save() {
      this.loading = true;
      try {
        await this.$axios.$post(
          "/api/profile/update",
          this.cleanupFormObject(this.form)
        );
        await this.$auth.fetchUser();
        this.$toast.success("Profile updated successfully");
        this.loading = false;
        this.errors = {};
      } catch (e) {
        if (e.response.data.errors) this.errors = e.response.data.errors;
        this.error = e.response.data.message;
        this.loading = false;
      }
    },
  },
};
</script>
