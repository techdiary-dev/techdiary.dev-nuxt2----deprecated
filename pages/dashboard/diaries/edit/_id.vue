<template>
    <client-only>
        <article-editor />
    </client-only>
</template>
<script>
export default {
    layout: "blank",
    middleware: ["auth"],
    colorMode: "light",
    head: {
        title: "Edit ডায়েরি",
    },
};
</script>
