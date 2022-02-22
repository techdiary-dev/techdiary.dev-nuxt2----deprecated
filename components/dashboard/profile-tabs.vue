<template>
    <div class="flex flex-col border border-gray-200 space-y-2 md:space-y-4">
        <div class="flex justify-between items-center">
            <button
                class="btn"
                @click="changeTab('general')"
                :class="{
                    'btn-active': activeTab === 'general',
                }"
            >
                General Info
            </button>
            <button
                class="btn"
                :class="{
                    'btn-active': activeTab === 'social',
                }"
                @click="changeTab('social')"
            >
                Social Links
            </button>
            <button
                class="btn"
                :class="{
                    'btn-active': activeTab === 'profile',
                }"
                @click="changeTab('profile')"
            >
                Profile README
            </button>
        </div>
        <Transition name="tab">
            <dashboard-profile-info v-if="activeTab === 'general'" />
            <dashboard-profile-social v-else-if="activeTab === 'social'" />
            <dashboard-profile-readme v-else-if="activeTab === 'profile'" />
        </Transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeTab: "general",
        };
    },
    methods: {
        changeTab($tab) {
            this.activeTab = $tab;
        },
    },
};
</script>
<style scoped>
.btn {
    background-color: rgb(229 231 235);
    border: 1px solid rgb(209 213 219);
    flex-grow: 1;
    padding: 0.5rem;
}

.btn:hover:not(.btn-active) {
    background-color: rgb(30, 41, 59);
    color: white;
    transition: all 0.3s ease-in-out;
}

.btn-active {
    background-color: white;
    pointer-events: none;
    cursor: not-allowed;
    border: 0;
}

/* tab transiton */
.tab-enter-active,
.tab-leave-active {
    transition: all 0.5s ease-in-out;
}

.tab-enter-from,
.tab-leave-to {
    opacity: 0.5;
}
</style>
