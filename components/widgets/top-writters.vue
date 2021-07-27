<template>
  <div>
    <h3 class="text-sm font-semibold text-gray-600 dark:text-blueGray-300">
      এই সপ্তাহের সেরা লেখকগন
    </h3>
    <div class="mt-2 top-writters">
      <a
        href="#"
        class="top-writters__author"
        v-for="(author, i) in authors"
        :key="i"
      >
        <img :src="author.profilePhoto" alt="author" />
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-writters {
  @apply flex flex-wrap gap-2;
  &__author {
    @apply inline-block w-12 h-12 overflow-hidden rounded;
  }
}
</style>

<script>
export default {
  data() {
    return {
      authors: [
        {
          name: "author name",
          profilePhoto: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg"
        },
        {
          name: "author name",
          profilePhoto: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg"
        },
        {
          name: "author name",
          profilePhoto: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg"
        },
        {
          name: "author name",
          profilePhoto: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg"
        },
        {
          name: "author name",
          profilePhoto: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg"
        },
        {
          name: "author name",
          profilePhoto: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg"
        },
        {
          name: "author name",
          profilePhoto: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg"
        },
        {
          name: "author name",
          profilePhoto: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg"
        },
        {
          name: "author name",
          profilePhoto: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg"
        },
        {
          name: "author name",
          profilePhoto: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg"
        }
      ]
    };
  }
};
</script>
