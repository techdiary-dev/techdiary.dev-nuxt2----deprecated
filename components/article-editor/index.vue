<template>
  <div>
    <loader v-if="$fetchState.pending" />
    <div v-else>
      <header class="flex items-center justify-between p-4 ">
        <div class="flex flex-col items-start ">
          <div class="w-full ">
            <span class="mr-0 font-mono text-lg"
              >/{{ $auth.user.username }}/</span
            >
            <input
              v-model="slug"
              maxlength="255"
              type="text"
              class="flex-1 pl-0 -ml-1 font-mono border-none focus:ring-0"
              ref="slugInput"
              @click="$event.target.select()"
              @input="handleChangeSlug"
            />
          </div>
          <button
            @click="$refs.slugInput.select()"
            class="text-sm font-semibold cursor-pointer text-primary"
          >
            ডায়েরির লিংক
          </button>
        </div>
        <p class="text-lg text-gray-500 " v-if="lastSaved">
          সেভ হয়েছে {{ lastSaved }}
        </p>
        <div class="flex items-center space-x-4 ">
          <nuxt-link :to="{ name: 'dashboard' }" class="text-lg font-bold">
            ড্যাসবোর্ড
          </nuxt-link>

          <button
            @click="article.isPublished = !article.isPublished"
            class="text-lg font-bold"
            :class="{
              'text-green-500': article.isPublished,
              'text-red-500': !article.isPublished
            }"
          >
            {{ article.isPublished ? "প্রকাশিত" : "খসড়া" }}
          </button>

          <!-- <button @click="openOptions" class="text-lg">
            সেটিং
          </button> -->
        </div>
      </header>

      <div class="max-w-4xl mx-auto">
        <textarea
          ref="titleInput"
          @input="handleResizeTitleInput"
          maxlength="255"
          type="text"
          class="w-full h-full my-3 text-2xl font-bold bg-transparent border-0 resize-none text-dark focus:outline-none focus:ring-0"
          placeholder="ডায়েরির শিরোনাম"
          v-model="article.title"
        />
        <article-editor-thumbnail v-model="article.thumbnail" />
      </div>
    </div>
  </div>
</template>

<script>
// import slugify from "slugify";
import debounce from "lodash.debounce";
import upload from "~/mixins/upload";

export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  mixins: [upload],
  mounted() {
    // this.handleResizeHeight(this.$refs.fuck);
    // document.querySelector("html").classList.remove("dark");
    // if (this.$refs.title) {
    //   this.$refs.title.style.height = `auto`;
    //   this.$refs.title.style.height = `${this.$refs.title.scrollHeight}px`;
    // }
    // if (this.$refs.titleInput && Object.keys(this.article)) {
    //   console.log(this.$refs.titleInput);
    //   this.$refs.titleInput.style.height =
    //     this.$refs.titleInput.scrollHeight + "px";
    // }
  },
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
        htmlBody: ""
      },
      seo: {},
      settings: {}
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
      const res = await this.$axios.$put(
        `api/articles/uuid/${this.$route.params.id}`,
        payload
      );

      clearInterval(this.interval);
      this.touchLastSaved();
      return res;
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
