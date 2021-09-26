import swal from "sweetalert";

export default {
  data() {
    return {
      bookmarked_by: [],
      isBookmarked: false
    };
  },
  mounted() {
    this.votes.score = this.article.reactions.vote_score;

    if (this.article.reactions.summery.length != 0) {
      if (this.article.reactions.summery.BOOKMARK) {
        this.bookmarked_by = this.article.reactions.summery.BOOKMARK.reactors;
      }
    }

    if (this.$auth.loggedIn) {
      this.isBookmarked = this.bookmarked_by.includes(this.$auth.user.id);
    }
  },
  methods: {
    bookmark(model_name, model_id) {
      if (!this.$auth.loggedIn) {
        swal({
          title: "আপনি লগইন অবস্থায় নেই",
          icon: "error"
        });
        return;
      }

      this.$axios.$post(`api/bookmarks`, {
        model_name,
        model_id
      });

      this.isBookmarked = !this.isBookmarked;
    }
  }
};
