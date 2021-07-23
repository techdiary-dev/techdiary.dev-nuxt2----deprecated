export default {
  props: ["imageUrl", "alt"],
  methods: {
    checkHost() {
      const url = new URL(this.imageUrl);
      return url.host;
    },
    isCloudinary() {
      return this.checkHost() === "res.cloudinary.com";
    },
    cloudinaryPublicId() {
      if (!this.isCloudinary)
        throw new Error("This is not a cloudinary image url");
      return this.imageUrl
        .split("/")
        .slice(-2)
        .join("/");
    },
    fetchRemoteUrl() {
      return this.$cloudinary.image.fetchRemote(this.imageUrl, this.$attrs);
    }
  }
};
