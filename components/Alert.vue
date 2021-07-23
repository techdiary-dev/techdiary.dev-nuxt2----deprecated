<template>
  <div
    class="py-3 pl-5 bg-yellow-100 border-l-4 border-yellow-500 rounded-sm "
    v-bind="$attrs"
  >
    <div class="flex items-center space-x-3">
      <div>
        <svg
          class="w-8 text-yellow-500 stroke-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <div>
        <h3 class="text-lg font-KohinoorBangla"><slot /></h3>
        <p class="font-bold font-KohinoorBangla">
          <slot name="sub-title"></slot>
        </p>
      </div>
    </div>
  </div>
</template>
