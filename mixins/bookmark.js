import swal from "sweetalert";

export default {
  methods: {
    bookmark(model_name, model_id) {
      if (!this.$auth.loggedIn) {
        swal({
          title: "আপনি লগইন অবস্থায় নেই",
          icon: "error",
        });
        return;
      }

      this.$axios.$post(`api/bookmarks`, {
        model_name,
        model_id,
      });

      this.isBookmarked = !this.isBookmarked;
    },
  },
};
