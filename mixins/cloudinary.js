export default {
  props: ['imageUrl', 'alt'],
  methods: {
    socialMediaImage(title, author) {
      return `https://res.cloudinary.com/techdiary-dev/image/upload/l_text:Arial_45_bold:${title},g_north_west,x_30,y_30/l_text:Arial_25:${author},g_south_west,x_30,y_30/static-assets/social%20media/crtjcvtfzbugcwrdoedm.jpg`
    },
    checkHost() {
      const url = new URL(this.imageUrl)
      return url.host
    },
    isCloudinary() {
      return this.checkHost() === 'res.cloudinary.com'
    },
    cloudinaryPublicId() {
      if (!this.isCloudinary)
        throw new Error('This is not a cloudinary image url')
      return this.imageUrl.split('/').slice(-2).join('/')
    },
    fetchRemoteUrl() {
      return this.$cloudinary.image.fetchRemote(this.imageUrl, this.$attrs)
    },
  },
}
