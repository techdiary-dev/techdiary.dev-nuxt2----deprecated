<template>
  <div class="flex flex-col min-h-[80vh] overflow-y-auto px-1">
    <section class="flex justify-between">
      <!-- <button
        @click="closeMeta"
        class="grid p-2 text-white bg-red-500 rounded-md place-content-center"
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
      </button> -->

      <!-- <button
        @click="$emit('saveArticle')"
        class="flex items-center justify-center px-5 py-1 text-white rounded-full bg-blueGray-800"
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
        <span v-if="loading">অপেক্ষা করুন</span>
        <span v-else>সেভ করুন</span>
      </button> -->
    </section>
    <section class="">
      <h3 class="my-3 text-xl font-bold text-dark tracking-relaxed">
        আপনি কি ডায়েরি পাবলিশ করার জন্যে প্রস্তুত?
      </h3>
      <p class="leading-relaxed text-dark">
        সব কিছু ঠিকমত দেখে নিন। ডায়েরি যদি প্রথম পাতায় দেখাতে চান, তাহলে
        <strong class="text-gray-700 bg-yellow-300 rounded-md"
          >"ডায়েরি পাবলিশ করুন"</strong
        >
        এর পাশে টিক চিহ্ন দিন
      </p>
    </section>

    <div
      class="flex items-center p-3 rounded-md text-dark"
      :class="{
        'bg-yellow-300': !settings.isPublished,
        'bg-green-300': settings.isPublished
      }"
    >
      <input
        type="checkbox"
        class="rounded"
        id="isPublished"
        v-model="settings.isPublished"
      />
      <label
        class="flex items-center justify-between w-full ml-2 cursor-pointer"
        for="isPublished"
      >
        <span class="text-gray-800">ডায়েরি পাবলিশ করুন</span>

        <svg
          v-if="!settings.isPublished"
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 text-gray-800"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          v-if="settings.isPublished"
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 text-gray-800"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </label>
    </div>

    <div class="my-3">
      <label for="multi-tag" class="text-lg font-bold text-dark">ট্যাগ</label>
      <multi-select
        id="multi-tag"
        placeholder="ট্যাগ নির্বাচন করুন"
        class="mt-3"
        selectLabel="নির্বাচন করতে এন্টার চাপুন"
        tagPlaceholder="ট্যাগ তৈরি করতে এন্টার চাপুন"
        :options="tagOptions"
        :multiple="true"
        :hideSelected="true"
        :taggable="true"
        :max="10"
        @tag="createNewTag"
        track-by="id"
        label="name"
        v-model="settings.tags"
        :closeOnSelect="false"
      ></multi-select>
    </div>

    <div class="mt-4 ">
      <h2 class="text-lg font-bold ">Seo settings</h2>

      <div class="flex flex-col space-y-4">
        <form-file-uploader preset="techdiary-article-covers" />

        <form-input
          v-model="settings.seo.seo_title"
          label="SEO Title (Optional)"
          desc="The SEO Title will be shown in place of your Title on search engine results pages, such as a Google search. SEO titles between 40 and 50 characters with commonly searched words have the best click-through-rates."
          placeholder="Seo title"
        />

        <form-textarea
          v-model="settings.seo.seo_description"
          label="SEO Description (Optional)"
          desc="The SEO Description will be used in place of your Subtitle on search engine results pages. Good SEO descriptions utilize keywords, summarize the story and are between 140-156 characters long."
          placeholder="Enter meta description…"
        />

        <form-input
          v-model="settings.seo.canonical_url"
          label="Are you republishing?"
          desc="Change the canonical URL of this article to the original article"
          placeholder="Paste the original URL here"
        />

        <div class="flex items-center space-x-2">
          <input
            type="checkbox"
            v-model="settings.settings.disabled_comments"
            id="disable_comments"
          />
          <label for="disable_comments">Disable comments</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    settings: {
      type: Object,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tagOptions: []
    };
  },
  async mounted() {
    const { data } = await this.$axios.$get("/api/tags");
    this.tagOptions = data;
  },
  methods: {
    async createNewTag(name) {
      const { data } = await this.$axios.$post("/api/tags", { name });
      this.tagOptions.push(data);
      this.settings.tags.push(data);
    },
    closeMeta() {
      this.$emit("closeMeta");
    }
  }
};
</script>
