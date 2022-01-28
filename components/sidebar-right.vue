<template>
    <div class="flex flex-col gap-6">
        <widgets-login-buttons v-if="!$auth.loggedIn" />
        <!-- <widgets-top-writters /> -->
        <widgets-social-links />
        <widgets-links />
        <widgets-vuejs-bootcamp />
        <!-- <widgets-discord /> -->
        <widgets-sponsor />
        <widgets-latest-registered-users />
    </div>
</template>
