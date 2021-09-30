<template>
  <div>
    <h3 class="text-sm font-semibold text-gray-600">
      লগইন করুন
    </h3>

    <div class="flex flex-col gap-3 mt-3">
      <label>
        <p class="text-gray-600">ইউজারনেম / ইমেইল</p>
        <input
          type="text"
          class="w-full border-gray-300 rounded border-1 focus:ring-1 focus:ring-gray-600"
        />
      </label>

      <label>
        <p class="text-gray-600">পাসওয়ার্ড</p>
        <input
          type="password"
          class="w-full border-gray-300 rounded-sm border-1 focus:ring-1 focus:ring-gray-600"
        />
      </label>

      <label class="flex items-center gap-3 ">
        <input type="checkbox" />
        <p>Remember Me</p>
      </label>

      <button class="flex-none py-2 text-white rounded-sm bg-primary">
        লগইন
      </button>
    </div>
  </div>
</template>

<script>
export default {
  layout: "left-sidebar"
};
</script>
