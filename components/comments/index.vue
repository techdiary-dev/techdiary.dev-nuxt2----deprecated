<template>
  <div>
    <div class="flex flex-col space-y-4 my-14">
      <comments-comment
        v-for="comment in comments"
        :comment="comment"
        :key="comment.id"
      />

      <div
        class="text-center"
        v-if="pageMeta.current_page < pageMeta.last_page"
      >
        <button @click="handleLoadmore" class="font-bold ">Load More</button>
      </div>
    </div>
    <client-only>
      <comments-editor @save="handleSave" />
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    model_name: {
      required: true,
      type: String
    },
    model_id: {
      required: true,
      type: String
    }
  },
  fetchOnServer: false,
  data() {
    return {
      comments: [],
      pageMeta: {
        current_page: 1,
        last_page: null
      }
    };
  },
  async fetch() {
    const { data, current_page, last_page } = await this.$axios.$get(
      `/api/comments?page=${this.pageMeta.current_page}&model_name=${this.model_name}&model_id=${this.model_id}`
    );

    this.comments = this.comments.concat(data);
    this.pageMeta = { current_page, last_page };
  },
  methods: {
    handleSave(body) {
      this.$axios.$post(`/api/comments`, {
        model_name: this.model_name,
        model_id: this.model_id,
        body
      });

      const comment = {
        id: Date.now(),
        body,
        user: this.$auth.user
      };

      this.comments.push(comment);
    },
    async handleLoadmore() {
      this.pageMeta.current_page++;
      await this.$fetch();
    }
  }
};
</script>
