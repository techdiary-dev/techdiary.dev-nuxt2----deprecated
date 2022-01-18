<template>
    <div class="inline-block w-full" v-bind="$attrs">
        <!-- <div v-if="isCloudinary">
            <cld-image
                :public-id="getPublicId"
                :alt="alt"
                fetchFormat="auto"
                quality="auto"
                loading="lazy"
                class="w-full"
                :width="width"
            >
                <cld-placeholder type="vectorize" />
            </cld-image>
        </div> -->
        <img :src="src" :alt="alt" class="w-full" :width="width" />
    </div>
</template>

<script>
export default {
    props: {
        src: {
            required: true,
            type: String,
        },
        alt: {
            required: false,
            type: String,
        },
        width: {
            required: false,
            type: String,
        },
    },
    computed: {
        getPublicId() {
            return this.src.split("/").slice(-2).join("/");
        },
        isCloudinary() {
            return this.src.includes("res.cloudinary.com");
        },
    },
};
</script>

<style scoped>
.cld-image {
    width: 100%;
}
</style>
