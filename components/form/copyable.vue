<template>
    <div
        class="flex items-center justify-between p-2 border rounded app-border-color w-max bg-slate-100 dark:bg-slate-600"
    >
        <span>{{ text }}</span>
        <button
            class="pl-2 hover:text-slate-600 hover:dark:text-slate-400"
            @click="copyToClipBoard"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 fill-current"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path
                    d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"
                />
            </svg>
        </button>
    </div>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            default: "text",
        },
    },
    methods: {
        copyToClipBoard() {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(this.text);
            } else {
                const textArea = document.createElement("textarea");
                textArea.value = this.text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand("copy");
                textArea.remove();
            }

            this.$toast.success("Copied to clipboard");
        },
    },
};
</script>
