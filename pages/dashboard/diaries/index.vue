<template>
  <div>
    <nav class="flex space-x-4">
      <button class="text-lg font-bold ">My Articles(11)</button>
      <button class="text-lg">Drafts(5)</button>
      <button class="text-lg">Pending(2)</button>
      <button class="text-lg">Rejected(1)</button>
    </nav>

    <div class="flex flex-col mt-10 space-y-6 ">
      <article class="flex items-center justify-between">
        <div>
          <p class="text-xl">Lorem ipsum dolor sit amet.</p>
          <p class="mt-2 text-xs font-semibold text-gray-60">
            14 days ago
          </p>
        </div>

        <div class="flex space-x-4 ">
          <button class="font-semibold text-green-500">Edit</button>
          <button class="font-semibold text-red-500">Delete</button>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  layout: "dashboard"
};
</script>
