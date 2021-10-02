<script>
export default {
  render() {
    return this.$scopedSlots.default({
      onChange: this.onChange
    });
  },
  methods: {
    resizeTarget(target) {
      target.style.height = "auto";
      target.style.height = `${target.scrollHeight}px`;
    },
    onChange(e) {
      this.resizeTarget(e.target);
    }
  }
};
</script>
