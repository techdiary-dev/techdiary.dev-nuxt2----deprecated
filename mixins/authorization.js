export default {
  methods: {
    isLoggedIn() {
      if (!this.$auth.loggedIn) {
        this.$store.commit('alert/ERROR_ALERT', 'আপনি লগইন অবস্থায় নেই')
        return false
      }
      return true
    },
  },
}
