<template></template>

<script>
export default {
  layout: "dashboard",
  asyncData({ redirect }) {
    return redirect("/dashboard/diaries");
  }
};
</script>
