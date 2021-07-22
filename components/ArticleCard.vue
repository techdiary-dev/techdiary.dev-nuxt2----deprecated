<template>
  <div>
    <div>
      <img :src="article.thumbnail" :alt="article.title" />
    </div>

    <div>
      <a href="#" class=" text-gray-700 text-xl block font-semibold ">
        {{ article.title }}
      </a>
      <p class="mt-2 text-dark-secondary">
        {{ article.created_at }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["article"]
};
</script>
