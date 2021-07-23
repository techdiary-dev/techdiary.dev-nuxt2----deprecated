<template>
  <cld-image
    :public-id="cloudinaryPublicId()"
    v-bind="$attrs"
    v-if="isCloudinary()"
  >
    <cld-placeholder type="vectorize" />
  </cld-image>
  <img
    v-else
    :src="fetchRemoteUrl()"
    :alt="alt"
    class="w-full h-auto"
    v-bind="$attrs"
  />
</template>
<script>
import cloudinary from "~/mixins/cloudinary";

export default {
  mixins: [cloudinary]
};
</script>
