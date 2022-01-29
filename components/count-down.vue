<template>
    <section class="countdown">
        <div class="countdown__box">
            <h3 class="countdown__time">{{ day }}</h3>
            <p class="countdown__label">দিন</p>
        </div>
        <div class="countdown__box">
            <h3 class="countdown__time">{{ hour }}</h3>
            <p class="countdown__label">ঘণ্টা</p>
        </div>
        <div class="countdown__box">
            <h3 class="countdown__time">{{ minute }}</h3>
            <p class="countdown__label">মিনিট</p>
        </div>
        <div class="countdown__box">
            <h3 class="countdown__time">{{ second }}</h3>
            <p class="countdown__label">সেকেন্ড</p>
        </div>
    </section>
</template>

<style scoped lang="scss">
.countdown {
    @apply py-4 flex space-x-3 lg:space-x-12 justify-center font-boshonto;

    &__box {
        @apply text-center w-16;
    }
    &__time {
        @apply text-3xl lg:text-7xl;
    }

    &__label {
        @apply text-gray-500;
    }
}
</style>

<script>
import bnnum from "bnnum";
export default {
    data() {
        return {
            hour: null,
            minute: null,
            second: null,
            day: null,
            countDate: new Date("Feb 30, 2022 00:00:00").getTime(),
        };
    },
    mounted() {
        setInterval(() => {
            this.countDown();
        }, 1000);
    },
    methods: {
        countDown() {
            const now = new Date().getTime(),
                gap = this.countDate - now;

            const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;

            this.day = bnnum(Math.floor(gap / day));
            this.hour = bnnum(Math.floor((gap % day) / hour));
            this.minute = bnnum(Math.floor((gap % hour) / minute));
            this.second = bnnum(Math.floor((gap % minute) / second));
        },
    },
};
</script>

<style>
.countdown-bg-gradient {
    background: linear-gradient(
        205.5deg,
        #321b50 10.82%,
        rgba(19, 30, 63, 0.88) 84.93%
    );
}
</style>
