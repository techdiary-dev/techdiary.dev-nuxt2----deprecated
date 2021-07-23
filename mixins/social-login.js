export default {
  data() {
    return {
      loadingGithub: false,
      loadingGoogle: false,
    }
  },
  methods: {
    socialLogin(service) {
      // this.loading = true
      if (service == 'google') {
        this.loadingGoogle = true
      }

      if (service == 'github') {
        this.loadingGithub = true
      }

      window.location.href = `${process.env.NUXT_ENV_APP_URL_CLIENT}/api/auth/login/${service}`
    },
  },
}
