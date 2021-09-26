<template>
  <file-pond
    name="file"
    label-idle="Drop image here..."
    :allow-multiple="false"
    :server="filepondConfig"
    accepted-file-types="image/jpeg, image/jpg, image/png, image/gif"
  />
</template>

<script>
// Import Vue FilePond
import vueFilePond from "vue-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import image preview plugin styles
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

// Create component
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
);

export default {
  props: ["preset"],
  data() {
    return {
      filepondConfig: {
        process: {
          url: "http://api.techdiary.test/api/files",
          method: "POST",
          ondata: formData => {
            formData.append("preset", this.preset);
            return formData;
          },
          onload: response => {
            console.log(response.url);
            this.$emit("input", response.url);
          }
        }
      }
    };
  },
  components: {
    FilePond
  }
};
</script>

<style>
.filepond--credits {
  display: none;
}
</style>

<style>
.filepond--credits {
  display: none;
}
</style>
