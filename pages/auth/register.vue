<template>
  <div class="w-full lg:w-6/12 ">
    <h3 class="text-lg font-bold text-gray-600">
      রেজিস্ট্রেশন
    </h3>
    <form
      class="flex flex-col items-baseline gap-3 mt-3"
      action="#"
      @submit.prevent="handleRegister"
      method="post"
    >
      <label class="w-full ">
        <p class="text-gray-600 ">আপনার নাম</p>
        <input
          type="text"
          v-model="form.name"
          class="w-full border-gray-300 rounded border-1 focus:ring-1 focus:ring-gray-600"
        />
      </label>

      <label class="w-full ">
        <p class="text-gray-600 ">ইউজারনেম</p>
        <input
          type="text"
          v-model="form.username"
          class="w-full border-gray-300 rounded border-1 focus:ring-1 focus:ring-gray-600"
        />
      </label>

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

      <label class="w-full ">
        <p class="text-gray-600 ">পাসওয়ার্ড নিশ্চিত করুন</p>
        <input
          type="password"
          v-model="form.password_confirmation"
          class="w-full border-gray-300 rounded-sm border-1 focus:ring-1 focus:ring-gray-600"
        />
      </label>

      <button class="px-2 py-2 text-white bg-gray-700 rounded">
        রেজিস্ট্রেশন করুন
      </button>

      <div>
        <p class="text-sm text-gray-600 ">
          ইতিমধ্যেই একাউন্ট আছে? তাহলে
          <nuxt-link :to="{ name: 'auth-login' }">লগইন করুন</nuxt-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: "left-sidebar",
  async mounted() {
    // await this.$axios.$get("/sanctum/csrf-cookie");
    // try {
    //   await this.$axios.$post("/api/auth/register");
    // } catch (error) {
    //   console.log(error.response.data);
    // }
  },
  data() {
    return {
      form: {
        name: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  },
  methods: {
    async handleRegister() {
      await this.$axios.$post("api/auth/register", this.form);
    }
  }
};
</script>
