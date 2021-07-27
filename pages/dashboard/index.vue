<template>
  <h1>Dashboard</h1>
</template>
<script>
export default {
  middleware: ["auth"],
  layout: "dashboard"
};
</script>
