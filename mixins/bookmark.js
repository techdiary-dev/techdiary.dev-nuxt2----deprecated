import swal from "sweetalert";

export default {
  data() {
    return {
      bookmarked_users: [],
      isBookmarked: false
    };
  },
  mounted() {
    this.bookmarked_users = this.article.bookmarked_users;

    if (this.$auth.loggedIn) {
      this.isBookmarked = this.bookmarked_users.includes(this.$auth.user.id);
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
