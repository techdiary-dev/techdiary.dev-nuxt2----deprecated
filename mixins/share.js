export default {
    methods: {
        copyToClipboard(text, prompt = "লিংক কপি করা হয়েছে") {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text);
            } else {
                const textArea = document.createElement("textarea");
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand("copy");
                textArea.remove();
            }

            this.$toast.success(prompt);
        },
        shareOnFacebook(url) {
            window.open(
                "https://www.facebook.com/sharer/sharer.php?u=" + url,
                "pop",
                "width=600, height=400, scrollbars=no"
            );
        },
        shareOnTwitter(url) {
            window.open(
                "https://twitter.com/intent/tweet?text=Check%20out%20this%20article%20on%20the%20blog techdiary%20" +
                    url,
                "pop",
                "width=600, height=400, scrollbars=no"
            );
        },
    },
};
