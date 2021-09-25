import swal from "sweetalert";

export default {
  data() {
    return {
      votes: {
        up_voters: [],
        down_voters: [],
        score: 0
      }
    };
  },
  mounted() {
    this.votes.score = this.article.votes.score;
    if (this.article.votes.summery.length != 0) {
      if (this.article.votes.summery.UP_VOTE) {
        this.votes.up_voters = this.article.votes.summery.UP_VOTE.reactors;
      }

      if (this.article.votes.summery.DOWN_VOTE) {
        this.votes.down_voters = this.article.votes.summery.DOWN_VOTE.reactors;
      }
    }
  },
  computed: {
    isUpvotted() {
      if (!this.$auth.loggedIn) return false;
      return this.votes.up_voters.includes(this.$auth.user.id);
    },
    isDownvotted() {
      if (!this.$auth.loggedIn) return false;
      return this.votes.down_voters.includes(this.$auth.user.id);
    }
  },
  methods: {
    removeFromUpvotterList() {
      this.votes.up_voters = this.votes.up_voters.filter(
        userId => userId != this.$auth.user.id
      );
    },
    removeFromDownvotterList() {
      this.votes.down_voters = this.votes.down_voters.filter(
        userId => userId != this.$auth.user.id
      );
    },
    addToUpvoters() {
      this.votes.up_voters.push(this.$auth.user.id);
    },
    addToDownvoters() {
      this.votes.down_voters.push(this.$auth.user.id);
    },
    upVote(uuid) {
      if (!this.$auth.loggedIn) {
        swal({
          title: "আপনি লগইন অবস্থায় নেই",
          icon: "error"
        });
        return;
      }

      this.$axios.$post(`api/articles/${uuid}/vote`, {
        vote: "UP_VOTE"
      });

      if (this.isUpvotted) {
        this.removeFromUpvotterList();
        this.votes.score--;
      } else {
        this.addToUpvoters();
        if (this.votes.score == -1) {
          this.votes.score = 1;
        } else {
          this.votes.score++;
        }
      }

      this.removeFromDownvotterList();
    },
    downVote(uuid) {
      if (!this.$auth.loggedIn) {
        swal({
          title: "আপনি লগইন অবস্থায় নেই",
          icon: "error"
        });
        return;
      }
      this.$axios.$post(`api/articles/${uuid}/vote`, {
        vote: "DOWN_VOTE"
      });

      if (this.isDownvotted) {
        this.removeFromDownvotterList();
        this.votes.score++;
      } else {
        this.addToDownvoters();
        if (this.votes.score == 1) {
          this.votes.score = -1;
        } else {
          this.votes.score--;
        }
      }

      this.removeFromUpvotterList();
    }
  }
};
