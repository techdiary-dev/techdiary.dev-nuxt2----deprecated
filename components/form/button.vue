<template>
  <button class="td-button" v-bind="$attrs">
    <template v-if="loading">
      <svg
        class="animated-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <span>লোডিং..</span>
    </template>
    <slot v-else />
  </button>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.td-button {
  @apply px-3 py-1;
  @apply bg-blueGray-800 text-white;
  @apply flex items-center rounded;
  @apply focus:outline-none;
}
.animated-spin {
  @apply w-5 h-5 mr-2 animate-spin;
}
</style>
