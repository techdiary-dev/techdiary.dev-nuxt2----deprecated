<template>
  <div class="max-w-4xl mx-auto">
    <header
      class="sticky top-0 z-10 mx-auto bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 h-[72px] backdrop-filter backdrop-blur firefox:bg-opacity-90 max-w-8xl px-3 md:px-0"
    >
      <nav class="flex items-center justify-between h-full">
        <div class="flex items-center space-x-3">
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

          <p
            class="text-sm font-bold"
            :class="{
              'text-green-500': settings.isPublished,
              'text-red-500': !settings.isPublished
            }"
          >
            {{ settings.isPublished ? "Published" : "Drafted" }}
          </p>
        </div>

        <div class="flex items-center space-x-2">
          <p class="text-sm text-gray-500 ">({{ lastSaved }})</p>

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

    <!-- ======================================================= -->
    <!-- Markdown Editor start -->
    <!-- ======================================================= -->
    <div class="p-5 ">
      <markdown-td v-model="article.body" />
    </div>
    <!-- ======================================================= -->
    <!-- Markdown Editor end -->
    <!-- ======================================================= -->

    <!-- ======================================================= -->
    <!-- Sidebar Content start -->
    <!-- ======================================================= -->
    <div
      class="fixed inset-0 z-30 w-full overflow-y-auto"
      :class="[showOptions ? 'visible' : 'invisible']"
    >
      <div
        class="flex items-end justify-end min-h-screen px-4 pt-4 text-right sm:block sm:p-0"
      >
        <!--
          Background overlay, show/hide based on modal state.
          Entering: "ease-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <transition
          enter-active-class="duration-300 ease-out"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="duration-200 ease-in"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            class="fixed inset-0 transition-opacity"
            aria-hidden="true"
            v-if="showOptions"
            @click="closeOptions"
          >
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
        </transition>

        <!--
          Modal panel, show/hide based on modal state.
          Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        -->
        <transition
          enter-active-class="duration-300 ease-out"
          enter-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
          enter-to-class="translate-y-0 opacity-100 sm:scale-100"
          leave-active-class="duration-200 ease-in"
          leave-class="translate-y-0 opacity-100 sm:scale-100"
          leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
        >
          <div
            class="inline-block w-full max-w-sm mt-0 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-md shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
            v-if="showOptions"
          >
            <div class="w-full px-4 py-5 bg-white dark:bg-gray-800">
              <div>
                <div class="mt-3 text-center sm:mt-0 sm:text-left">
                  <div class="mt-2">
                    <article-editor-meta
                      @closeMeta="closeOptions"
                      :loading="loading"
                      :settings="settings"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <!-- ======================================================= -->
    <!-- Sidebar Content end -->
    <!-- ======================================================= -->
  </div>
</template>

<script>
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import debounce from "lodash.debounce";
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
      lastSaved: null,
      interval: null,
      showOptions: false,
      editorLoading: false,

      article: {
        body: this.articleData?.body.markdown,
        title: this.articleData?.title || "",
        thumbnail: this.articleData?.thumbnail || ""
      },
      settings: {
        isPublished: this.articleData?.isPublished || false,
        seriesName: this.articleData?.seriesName || null,
        tags: this.articleData?.tags || [],
        seo: {
          og_image: this.articleData?.seo?.og_image || "",
          seo_title: this.articleData?.seo?.seo_title || "",
          seo_description: this.articleData?.seo?.seo_description || "",
          canonical_url: this.articleData?.seo?.canonical_url || ""
        },
        settings: {
          disabled_comments: this.articleData?.settings?.disabled_comments || ""
        }
      }
    };
  },
  watch: {
    article: {
      handler: debounce(function(article) {
        this.save(article);
      }, 1000),
      deep: true
    },
    settings: {
      handler: debounce(function(settings) {
        this.save(settings);
      }, 200),
      deep: true
    }
  },

  methods: {
    async save(payload) {
      await this.$axios.$put(
        `api/articles/uuid/${this.$route.params.id}`,
        payload
      );
      this.touchLastSaved();
      clearInterval(this.interval);
    },
    touchLastSaved() {
      const lastSaved = new Date();
      this.lastSaved = formatDistanceToNow(lastSaved, {
        includeSeconds: true
      });
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
