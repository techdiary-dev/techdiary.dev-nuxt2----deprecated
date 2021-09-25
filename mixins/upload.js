export default {
  methods: {
    /**
     * Upload file
     * @param {*} file
     * @param {*} preset
     * @returns
     */
    async uploadFile(file, preset) {
      if (!file.type.startsWith("image/")) {
        throw new Error("Only image file is supported for upload");
      }

      const fd = new FormData();
      fd.append("preset", preset);
      fd.append("file", file);

      const res = await this.$axios.$post("api/files", fd);
      return res.url;
    },
    async deleteFile(file_url) {
      await this.$axios.$delete("api/files", { data: { file_url } });
    }
  }
};
