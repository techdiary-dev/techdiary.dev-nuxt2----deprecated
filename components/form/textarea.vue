<template>
  <div>
    <label>
      <p v-if="label" class="td-label">
        {{ label }}
      </p>
      <p v-if="desc" class="mb-2 text-sm text-gray-600">
        {{ desc }}
      </p>
      <textarea
        @input="$emit('input', $event.target.value)"
        class="td-input"
        :class="{ 'has-error': error }"
        v-bind="$attrs"
        :value="value"
        :type="type"
      />
    </label>

    <p
      class="text-sm text-gray-600"
      :class="{ 'text-red-500': error }"
      v-if="helperText"
    >
      {{ helperText }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String
    },
    type: {
      type: String,
      default: "text"
    },
    helperText: {
      type: String,
      default: "",
      required: false
    },
    desc: {
      type: String,
      default: "",
      required: false
    },
    error: {
      type: Boolean,
      default: false,
      required: false
    },
    value: {
      type: String,
      default: false,
      required: false
    }
  }
};
</script>

<style scoped land="scss">
.td-label {
  @apply font-bold text-gray-500 dark:text-gray-300;
}

.td-input {
  @apply bg-gray-100 dark:bg-gray-600 dark:text-gray-100 rounded p-3 w-full focus:outline-none focus:border-primary;
}

.has-error {
  @apply border border-red-500 focus:border-red-500;
}
</style>
