<template>
  <div class="flex flex-col space-y-4">
    <dashboard-profile-photo />
    <dashboard-profile-tabs />
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  head: {
    title: "সেটিং",
  },
  data() {
    return {
      activeTab: "profile",
    };
  },
};
</script>
