<script>
import bnnum from "bnnum";
export default {
    data() {
        return {
            hour: null,
            minute: null,
            second: null,
            day: null,
            countDate: new Date("Feb 31, 2022 00:00:00").getTime(),
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
    render() {
        return this.$scopedSlots.default({
            day: this.day,
            hour: this.hour,
            minute: this.minute,
            second: this.second,
        });
    },
};
</script>
