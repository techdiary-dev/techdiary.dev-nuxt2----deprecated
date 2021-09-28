<template>
  <div class="inline-block ">
    <div v-if="isCloudinary">
      <client-only>
        <cld-image
          :public-id="getPublicId"
          fetchFormat="auto"
          quality="auto"
          loading="lazy"
          v-bind="$attrs"
        >
          <cld-placeholder type="vectorize" />
        </cld-image>
      </client-only>
    </div>
    <img v-else :src="src" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      required: true,
      type: String
    }
  },
  computed: {
    getPublicId() {
      return this.src
        .split("/")
        .slice(-2)
        .join("/");
    },
    isCloudinary() {
      return this.src.includes("res.cloudinary.com");
    }
  }
};
</script>
