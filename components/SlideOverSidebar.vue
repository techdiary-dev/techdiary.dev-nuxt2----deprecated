<template>
  <div class="slide-over" v-if="show">
    <div
      @click="$store.commit('ui/SET_SHOW_LEFTSIDEBAR', false)"
      class="slide-over__overlay"
    ></div>

    <div class="slide-over__content">
      <button
        class="slide-over__close"
        @click="$store.commit('ui/SET_SHOW_LEFTSIDEBAR', false)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="slide-over__icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <sidebar-left />
    </div>
  </div>
</template>

<style scoped lang="scss">
.slide-over {
  @apply fixed top-0 left-0 z-50;
  @apply w-full h-screen;

  &__overlay {
    @apply absolute inset-0 z-20 overflow-hidden;
    @apply bg-gray-500/30;
  }

  &__close {
    @apply absolute right-2;
  }

  &__icon {
    @apply w-6 h-6 text-red-500;
  }

  &__content {
    @apply relative z-30;
    @apply bg-white dark:bg-blueGray-800 shadow-2xl;
    @apply h-screen  overflow-y-auto;
    @apply w-72 p-4;
  }
}
</style>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      show: state => state.ui.showLeftSidebar
    })
  }
};
</script>
