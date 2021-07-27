<template>
  <div class="flex flex-col gap-6 ">
    <widgets-login-buttons v-if="!$auth.loggedIn" />
    <widgets-top-writters />
    <widgets-latest-registered-users />
  </div>
</template>
