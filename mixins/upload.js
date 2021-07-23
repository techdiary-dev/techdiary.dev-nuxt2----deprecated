export default {
  methods: {
    async uploadFile(file, preset) {
      /* create a reader */
      const readData = (f) =>
        new Promise((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.readAsDataURL(f)
        })

      const data = await readData(file)
      const asset = await this.$cloudinary.upload(data, {
        upload_preset: preset,
      })
      return asset.public_id
    },
  },
  async deleteFile(url) {
    await this.$axios.$delete(
      'https://techdiary-images.netlify.app/.netlify/functions/delete',
      { asset_url: url }
    )
  },
}
