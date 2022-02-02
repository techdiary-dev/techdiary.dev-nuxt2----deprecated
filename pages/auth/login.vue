<template>
    <div class="w-full lg:w-6/12">
        <h3 class="text-lg font-bold text-gray-600">লগইন করুন</h3>
        <!-- <form
      class="flex flex-col items-baseline gap-3 mt-3"
      action="#"
      @submit.prevent="handleForm"
      method="post"
    >
      <label class="w-full ">
        <p class="text-gray-600 ">ইমেইল</p>
        <input
          type="text"
          v-model="form.email"
          class="w-full border-gray-300 rounded border-1 focus:ring-1 focus:ring-gray-600"
        />
      </label>

      <label class="w-full ">
        <p class="text-gray-600 ">পাসওয়ার্ড</p>
        <input
          type="password"
          v-model="form.password"
          class="w-full border-gray-300 rounded-sm border-1 focus:ring-1 focus:ring-gray-600"
        />
      </label>

       <label class="flex items-center gap-3 ">
        <input type="checkbox" />
        <p>মনে রাখুন</p>
      </label>

      <button class="px-4 py-2 text-white bg-gray-700 rounded">
        লগইন
      </button>
    </form> -->

        <widgets-login-buttons />
    </div>
</template>

<script>
export default {
    layout: "left-sidebar",
    middleware: ["auth"],
    auth: "guest",
    data() {
        return {
            form: {
                email: "",
                password: "",
            },
        };
    },
    methods: {
        async handleForm() {
            this.$auth.loginWith("laravelSanctum", {
                data: this.form,
            });
            // await this.$axios.$post("api/auth/register", this.form);
        },
    },
};
</script>
