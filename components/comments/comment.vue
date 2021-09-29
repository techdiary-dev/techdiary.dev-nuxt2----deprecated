<template>
  <client-only>
    <div class="flex space-x-2 ">
      <app-image
        class="flex-none w-10 h-10 overflow-hidden rounded-full"
        :src="comment.user.profilePhoto"
        :alt="comment.user.name"
      />
      <div>
        {{ comment.body }}
      </div>
    </div>
  </client-only>
</template>
<script>
export default {
  props: ["comment"]
};
</script>
