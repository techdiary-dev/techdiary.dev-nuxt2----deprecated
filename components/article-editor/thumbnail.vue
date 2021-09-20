<template>
  <div class="max-w-4xl px-3 mx-auto md:px-0 mt-7">
    <input
      type="file"
      class="hidden"
      ref="thumbnailFileInput"
      accept=".jpeg,.jpg,.png,image/jpeg,image/png"
      @change="handleUploadImage"
    />
    <button
      @click="openUploadWindow"
      v-if="!value"
      class="flex px-4 py-1 my-4 space-x-1 transition duration-150 transform rounded-md text-dark opacity-90 focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-500"
    >
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M4.75 16L7.49619 12.5067C8.2749 11.5161 9.76453 11.4837 10.5856 12.4395L13 15.25M10.915 12.823C11.9522 11.5037 13.3973 9.63455 13.4914 9.51294C13.4947 9.50859 13.4979 9.50448 13.5013 9.50017C14.2815 8.51598 15.7663 8.48581 16.5856 9.43947L19 12.25M6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V6.75C19.25 5.64543 18.3546 4.75 17.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25Z"
        ></path>
      </svg>
      <span>কভার ছবি</span>
    </button>
    <div class="relative overflow-hidden rounded-md">
      <img class="object-fit" :src="value" v-if="value" alt="image cover" />
      <button
        @click="removeThumbnail"
        class="absolute p-2 bg-red-500 bg-opacity-50 rounded-md backdrop-blur backdrop-filter right-4 top-2 text-dark hover:bg-opacity-60"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <div v-if="loading" class="grid place-content-center">
      <loader />
    </div>
  </div>
</template>

<script>
import upload from "~/mixins/upload";
export default {
  mixins: [upload],
  props: {
    value: {
      type: String,
      default: false,
      required: false
    }
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    async removeThumbnail() {
      this.$emit("input", "");
      await this.deleteFile(this.value);
      this.loading = false;
    },
    async handleUploadImage(event) {
      this.loading = true;

      const file = event.target.files[0];
      if (!file) return;

      const imageSrc = await this.uploadFile(file, "techdiary-article-covers");
      this.loading = false;

      this.$emit("input", imageSrc);
    },
    openUploadWindow() {
      this.$refs.thumbnailFileInput.click();
    }
  }
};
</script>
