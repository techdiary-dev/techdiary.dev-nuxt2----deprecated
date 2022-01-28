const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

const isFirefoxPlugin = plugin(function ({ addVariant, e, postcss }) {
    addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
            name: "-moz-document",
            params: "url-prefix()",
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
            rule.selector = `.${e(
                `firefox${separator}${rule.selector.slice(1)}`
            )}`;
        });
    });
});

module.exports = {
    mode: "jit",
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#8A9CFE",
                secondary: "#FDF9F3",
                slate: colors.slate,
            },
            fontFamily: {
                KohinoorBangla: ["KohinoorBangla", "Nunito", "Arial"],
                siliguri: ["Hind Siliguri", "Nunito", "Arial"],
                mono: ["Fira Code", "techdiary-bangla", "monospace"],
                boshonto: ["Boshonto", "Kohinoor Bangla"],
            },
            zIndex: {
                "-1": "-1",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/line-clamp"),
        isFirefoxPlugin,
    ],
};
