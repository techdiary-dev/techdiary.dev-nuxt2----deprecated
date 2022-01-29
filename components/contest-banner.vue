<template>
    <section class="py-10" v-if="visible">
        <button
            @click="visible = false"
            class="absolute top-0 text-4xl right-2"
        >
            &times;
        </button>
        <div class="flex justify-between wrapper">
            <div class="transform font-boshonto">
                <p class="text-3xl">ডেভ আর্টিকেল</p>
                <p class="text-4xl">কন্টেস্ট</p>
                <p class="text-2xl">Session 2</p>
            </div>
            <div>
                <count-down-wrapper
                    v-slot:default="{ day, hour, minute, second }"
                >
                    <div class="flex gap-4">
                        <div class="flex flex-col items-center">
                            <p class="text-4xl font-boshonto">{{ day }}</p>
                            <p>দিন</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <p class="text-4xl font-boshonto">{{ hour }}</p>
                            <p>ঘণ্টা</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <p class="text-4xl font-boshonto">{{ minute }}</p>
                            <p>মিনিট</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <p class="text-4xl font-boshonto">{{ second }}</p>
                            <p>সেকেন্ড</p>
                        </div>
                    </div>
                </count-down-wrapper>
                <nuxt-link
                    to="/contest"
                    class="inline-block p-1 px-5 mt-2 bg-orange-400 text-dark"
                >
                    বিস্তারিত
                </nuxt-link>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            visible: true,
        };
    },
};
</script>
<style scoped lang="scss">
section {
    // background-image: url("~/static/images/hero.svg");
    // background-position: left center;
    @apply bg-no-repeat text-white;
    background-position: left;

    background-image: url("/images/hero.png"),
        linear-gradient(205.5deg, #321b50 10.82%, rgba(19, 30, 63, 0.88) 84.93%);
}
</style>
