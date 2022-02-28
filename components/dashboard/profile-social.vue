<template>
  <div class="p-3">
    <div class="mb-4 font-semibold text-gray-500 dark:text-gray-300">
      Social Links
    </div>
    <div>
      <form action="#" method="POST" @submit.prevent="save">
        <form-input
          v-for="(url, service) in form"
          :key="service"
          :label="service"
          class="mb-3"
          v-model="form[service]"
          :placeholder="`আপনার ${service} লিংক`"
          type="text"
          :error="hasError(service)"
          :helperText="hasErrorMessage(service)"
        />

        <form-button :loading="loading"> হালনাগাদ </form-button>
      </form>
    </div>
  </div>
</template>

<script>
import formValidation from "~/mixins/form-validation";
import * as yup from "yup";

const formSchema = yup.object().shape({
  github: yup.string().url("ভুল লিংক"),
  facebook: yup.string().url("ভুল লিংক"),
  stackOverflow: yup.string().url("ভুল লিংক"),
  medium: yup.string().url("ভুল লিংক"),
  linkedin: yup.string().url("ভুল লিংক"),
  twitter: yup.string().url("ভুল লিংক"),
  instagram: yup.string().url("ভুল লিংক"),
  behance: yup.string().url("ভুল লিংক"),
  dribbble: yup.string().url("ভুল লিংক"),
  twitch: yup.string().url("ভুল লিংক"),
  youtube: yup.string().url("ভুল লিংক")
});
export default {
  mixins: [formValidation],
  data() {
    return {
      form: {
        github: this.$auth.user.social_links?.github || "",
        facebook: this.$auth.user.social_links?.facebook || "",
        stackOverflow: this.$auth.user.social_links?.stackOverflow || "",
        medium: this.$auth.user.social_links?.medium || "",
        linkedin: this.$auth.user.social_links?.linkedin || "",
        twitter: this.$auth.user.social_links?.twitter || "",
        instagram: this.$auth.user.social_links?.instagram || "",
        behance: this.$auth.user.social_links?.behance || "",
        dribbble: this.$auth.user.social_links?.dribbble || "",
        twitch: this.$auth.user.social_links?.twitch || "",
        youtube: this.$auth.user.social_links?.youtube || ""
      },
      loading: false
    };
  },
  methods: {
    async save() {
      this.loading = true;

      try {
        await formSchema.validate(this.form, { abortEarly: false });

        await this.$axios.$post("/api/profile/update", {
          social_links: this.form
        });
        this.$toast.success("Updated successfully");
        this.$store.commit(
          "alert/SUCCESS_ALERT",
          "Social link updated successfully"
        );
        this.loading = false;
        this.errors = {};
      } catch (e) {
        this.loading = false;
        this.errors = this.yupToFormErrors(e);
      }
    }
  }
};
</script>
