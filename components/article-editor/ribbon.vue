<template>
  <div class="flex space-x-4 ">
    <button
      class="font-bold"
      :class="{
        'text-primary': value === 'editor'
      }"
      data-mode="editor"
      @click="handleChangeMode"
    >
      ইডিটর
    </button>
    <button
      class="font-bold"
      :class="{
        'text-primary': value === 'preview'
      }"
      data-mode="preview"
      @click="handleChangeMode"
    >
      প্রিভিউ
    </button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      requried: true,
      type: String
    }
  },
  methods: {
    handleChangeMode(e) {
      //   this.value = e.target.dataset.mode;
      this.$emit("input", e.target.dataset.mode);
    }
  }
};
</script>
