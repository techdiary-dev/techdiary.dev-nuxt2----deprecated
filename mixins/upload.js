export default {
  methods: {
    async uploadFile(file, preset) {
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
