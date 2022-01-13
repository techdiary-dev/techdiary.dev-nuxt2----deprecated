export default {
    data() {
        return {
            loadingGithub: false,
            loadingGoogle: false,
        };
    },
    methods: {
        socialLogin(service) {
            if (service == "google") {
                this.loadingGoogle = true;
            }

            if (service == "github") {
                this.loadingGithub = true;
            }

            window.location.href = `${process.env.NUXT_ENV_API_URL}/api/oauth/${service}`;
        },
    },
};
