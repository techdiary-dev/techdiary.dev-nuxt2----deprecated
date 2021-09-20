<template>
  <div
    v-bind="$attrs"
    class="py-5 border border-gray-200 rounded dark:border-gray-700"
  >
    <div>
      <input
        type="file"
        class="hidden w-0 h-0 focus:outline-none"
        ref="thumbnailFileInput"
        accept=".jpeg,.jpg,.png,image/jpeg,image/png"
        @change="handleUploadImage"
      />

      <div class="mx-auto text-center">
        <figure
          class="relative mx-auto overflow-hidden rounded-full group w-36 h-36"
        >
          <div
            :class="{
              'opacity-100': loading
            }"
            class="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-all duration-300 bg-gray-700 bg-opacity-50 opacity-0 group-hover:opacity-100"
          >
            <svg
              v-if="loading"
              class="text-white animate-spin w-28"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="1"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-10 text-white cursor-pointer"
              @click="openUploadWindow"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
          </div>
          <img
            v-if="profilePhoto"
            class="max-w-full rounded"
            :src="profilePhoto"
            alt="user-profile-photo"
          />
        </figure>
        <button
          v-if="dirty"
          class="flex items-center px-3 py-1 mt-5 ml-auto rounded bg-primary focus:outline-none"
          @click="save"
        >
          হালনাগাদ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import upload from "~/mixins/upload";
export default {
  mixins: [upload],
  data() {
    return {
      profilePhoto: this.$auth.user.profilePhoto || null,
      loading: false,
      dirty: false
    };
  },
  watch: {
    profilePhoto() {
      this.dirty = true;
    }
  },
  methods: {
    removeThumbnail() {
      this.profilePhoto = "";
      this.loading = false;
    },
    async handleUploadImage(event) {
      this.loading = true;
      const file = event.target.files[0];
      /* Make sure file exists */
      if (!file) return;

      const public_id = await this.uploadFile(
        file,
        "techdiary-user-profile-photos"
      );

      this.profilePhoto = this.$cloudinary.image.url(public_id, {
        crop: "scale",
        width: 300
      });
      this.loading = false;
    },
    openUploadWindow() {
      this.$refs.thumbnailFileInput.click();
    },

    async save() {
      await this.$axios.$post("/api/auth/update-profile", {
        profilePhoto: this.profilePhoto
      });
      await this.$auth.fetchUser();

      this.$toast.success("Updated successfully");
      this.dirty = false;
    }
  }
};
</script>
