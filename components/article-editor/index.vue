<template>
  <div class="max-w-4xl mx-auto">
    <header
      class="sticky top-0 z-10 mx-auto bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 h-[72px] backdrop-filter backdrop-blur firefox:bg-opacity-90 max-w-8xl px-3 md:px-0"
    >
      <nav class="flex items-center justify-between h-full">
        <nuxt-link
          :to="{ name: 'dashboard-diaries' }"
          class="flex items-center space-x-2 text-dark"
        >
          <svg
            class="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>

          <span>ডায়েরি সমূহ</span>
        </nuxt-link>
        <div class="flex items-center space-x-2">
          <button
            class="flex items-center justify-center px-3 py-2 space-x-1 transition duration-150 transform rounded-md text-dark opacity-90 focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-500"
            @click="openOptions"
          >
            <svg
              class="stroke-1 w-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>সেটিংস</span>
          </button>
          <button
            class="flex items-center justify-center px-5 py-1 text-white rounded-full bg-blueGray-800"
            @click="openOptions"
          >
            <svg
              v-if="loading"
              class="w-5 h-5 mr-2 animate-spin"
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
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span v-if="loading">অপেক্ষা করুন...</span>
            <span v-else>সেভ করুন</span>
          </button>
        </div>
      </nav>
    </header>

    <input
      type="text"
      class="w-full h-full my-3 text-2xl font-bold bg-transparent border-0 text-dark focus:outline-none focus:ring-0"
      placeholder="ডায়েরির শিরোনাম"
      v-model="article.title"
    />

    <article-editor-thumbnail v-model="article.thumbnail" />
  </div>
</template>

<script>
import upload from "~/mixins/upload";
export default {
  props: {
    "article-data": {
      type: Object
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  mixins: [upload],
  data() {
    return {
      showOptions: false,
      editorLoading: false,
      article: {
        body: this.articleData?.body,
        tags: this.articleData?.tags || [],
        title: this.articleData?.title || "",
        excerpt: "",
        isPublished: this.articleData?.isPublished || false,
        thumbnail: ""
      }
    };
  },

  methods: {
    save() {
      this.$emit("editorSaved", this.article);
    },
    openOptions() {
      this.showOptions = true;
    },
    closeOptions() {
      this.showOptions = false;
    },
    toggleOptions() {
      this.showOptions = !this.showOptions;
    },
    openUploadWindow() {
      this.$refs.thumbnailFileInput.click();
    },
    async handleUploadImage(event) {
      this.editorLoading = true;
      const file = event.target.files[0];
      if (!file) return;

      const public_id = await this.uploadFile(file, "techdiary-article-covers");
      this.article.thumbnail = this.$cloudinary.image.url(public_id, {
        crop: "scale",
        width: 1500
      });
      this.editorLoading = false;
    },
    removeThumbnail() {
      this.article.thumbnail = "";
      this.editorLoading = false;
    }
  }
};
</script>
<style>
.ce-block__content,
.ce-toolbar__content {
  max-width: unset;
}
.slide-leave-active,
.slide-enter-active {
  transition: 300ms;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>
