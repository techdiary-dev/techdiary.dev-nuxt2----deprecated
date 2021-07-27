<template>
  <div>
    <Navbar />

    <div class="grid grid-cols-12 gap-10 wrapper">
      <aside
        class="sticky top-0 col-span-3 pt-6 lg:col-span-2"
        style="align-self: start; top: 50px"
      >
        <widgets-action-links />
        <div class="mt-4 ">
          <!-- <widgets-tags /> -->
        </div>
      </aside>

      <main
        class="px-4 pt-2 border-l border-gray-200 lg:col-span-10 md:col-span-9"
      >
        <Nuxt />
      </main>
    </div>
  </div>
</template>
