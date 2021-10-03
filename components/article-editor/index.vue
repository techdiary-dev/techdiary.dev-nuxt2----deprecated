<template>
  <div>
    <loader v-if="$fetchState.pending" />
    <div v-else>
      <header class="flex items-center justify-between p-4 ">
        <div class="flex flex-col items-start ">
          <div class="w-full">
            <span class="mr-0 font-mono">/{{ $auth.user.username }}/</span>
            <input
              v-model="slug"
              maxlength="255"
              type="text"
              v-autowidth
              class="flex-1 pl-0 -ml-1 font-mono border-none focus:ring-0"
              ref="slugInput"
              @click="$event.target.select()"
              @input="handleChangeSlug"
            />
          </div>
          <button
            @click="$refs.slugInput.select()"
            class="text-sm font-semibold text-gray-600 cursor-pointer"
          >
            ডায়েরির লিংক
          </button>
        </div>

        <div class="flex flex-col items-end">
          <div class="flex items-center space-x-5">
            <nuxt-link :to="{ name: 'dashboard' }" class="font-bold ">
              ড্যাসবোর্ড
            </nuxt-link>

            <button
              @click="article.isPublished = !article.isPublished"
              class="font-bold "
              :class="{
                'text-green-500': article.isPublished,
                'text-red-500': !article.isPublished
              }"
            >
              {{ article.isPublished ? "প্রকাশিত" : "খসড়া" }}
            </button>

            <a class="font-bold ">
              Preview
            </a>

            <button @click="openOptions">
              সেটিং
            </button>
          </div>

          <p class="text-gray-500 " v-if="lastSaved">
            সেভ হয়েছে {{ lastSaved }}
          </p>
        </div>
      </header>

      <div class="max-w-4xl mx-auto">
        <textarea-autosize
          ref="titleInput"
          maxlength="255"
          type="text"
          class="w-full h-full my-3 text-2xl font-bold bg-transparent border-0 resize-none text-dark focus:outline-none focus:ring-0"
          placeholder="ডায়েরির শিরোনাম"
          v-model="article.title"
        />

        <article-editor-thumbnail v-model="article.thumbnail" />

        <div class="p-2 my-10 border-2 border-dashed">
          <markdown-td v-model="article.body" />
        </div>
      </div>

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

          <transition
            enter-active-class="duration-300 ease-out"
            enter-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            enter-to-class="translate-y-0 opacity-100 sm:scale-100"
            leave-active-class="duration-200 ease-in"
            leave-class="translate-y-0 opacity-100 sm:scale-100"
            leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
          >
            <div
              class="inline-block w-full max-w-sm mt-0 overflow-hidden text-left align-bottom transition-all transform bg-white shadow-xl"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
              v-if="showOptions"
            >
              <div
                class="w-full min-h-screen px-4 py-5 bg-white dark:bg-gray-800"
              >
                <div>
                  <div class="mt-3 text-center sm:mt-0 sm:text-left">
                    <div class="mt-2">
                      <article-editor-meta
                        v-if="article"
                        @closeMeta="closeOptions"
                        :article="article"
                        :seo="seo"
                        :errors="errors"
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
  </div>
</template>

<script>
// import slugify from "slugify";
import debounce from "lodash.debounce";
import upload from "~/mixins/upload";
import formValidation from "~/mixins/form-validation";

export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  mixins: [upload, formValidation],
  data() {
    return {
      editorMode: "editor",
      lastSaved: null,
      interval: null,
      showOptions: false,
      editorLoading: false,

      slug: "",
      //article props
      article: {
        id: "",
        title: "",
        thumbnail: "",
        isPublished: false,
        body: "",
        htmlBody: "",
        tags: []
      },
      seo: {
        og_image: "",
        seo_title: "",
        seo_description: "",
        canonical_url: ""
      },
      settings: {
        disabled_comments: false
      }
    };
  },
  async fetch() {
    try {
      const { data: article } = await this.$axios.$get(
        `/api/articles/uuid/${this.$route.params.id}`
      );

      this.slug = article.slug;

      this.article.id = article.id;
      this.article.title = article.title;
      this.article.isPublished = article.isPublished || false;
      this.article.thumbnail = article.thumbnail || "";
      this.article.body = article.body.markdown;
      this.article.htmlBody = article.body.html;
      this.article.tags = article.tags;

      // seo
      this.seo.og_image = article?.seo?.og_image || "";
      this.seo.seo_title = article?.seo?.seo_title || "";
      this.seo.seo_description = article?.seo?.seo_description || "";
      this.seo.canonical_url = article?.seo?.canonical_url || "";

      // settings
      this.settings.disabled_comments =
        article?.settings?.disabled_comments || false;

      // console.log(this.$refs.titleInput);
    } catch (e) {
      console.log(e);
    }
  },
  watch: {
    article: {
      handler: debounce(async function(article) {
        if (article.title == "") article.title = "(শিরোনামহীন ডায়েরি)";
        this.save(article);
      }, 500),
      deep: true
    },
    seo: {
      handler: debounce(async function(seo) {
        this.save({ seo });
      }, 500),
      deep: true
    },
    settings: {
      handler: debounce(async function(settings) {
        this.save({ settings });
      }, 500),
      deep: true
    }
  },
  methods: {
    handleResizeHeight(target) {
      target.style.height = "auto";
      target.style.height = target.scrollHeight + "px";
    },
    handleResizeTitleInput(e) {
      this.handleResizeHeight(e.target);
    },
    handleChangeSlug() {
      this.generateSlug();
    },
    generateSlug: debounce(function() {
      this.save({ slug: this.slug }).then(res => {
        this.slug = res.article.slug;
      });
    }, 1000),
    async save(payload) {
      try {
        const res = await this.$axios.$put(
          `api/articles/uuid/${this.$route.params.id}`,
          payload
        );

        clearInterval(this.interval);
        this.touchLastSaved();
        return res;
      } catch (e) {
        this.catchValidationErrors(e);
      }
    },
    touchLastSaved() {
      const lastSaved = new Date();
      this.interval = setInterval(() => {
        this.lastSaved = this.$dayjs(lastSaved).fromNow();
      }, 2000);
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
