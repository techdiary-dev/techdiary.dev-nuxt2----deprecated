const plugin = require("tailwindcss/plugin");

const isFirefoxPlugin = plugin(function({ addVariant, e, postcss }) {
  addVariant("firefox", ({ container, separator }) => {
    const isFirefoxRule = postcss.atRule({
      name: "-moz-document",
      params: "url-prefix()"
    });
    isFirefoxRule.append(container.nodes);
    container.append(isFirefoxRule);
    isFirefoxRule.walkRules(rule => {
      rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`;
    });
  });
});

module.exports = {
  mode: "jit",
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./components/**/*.{vue,js}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}"
    ]
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#58D4E1",
        secondary: "#FDF9F3"
      },
      fontFamily: {
        KohinoorBangla: ["KohinoorBangla", "Nunito", "Arial"],
        siliguri: ["Hind Siliguri", "Nunito", "Arial"],
        mono: ["Fira Code", "techdiary-bangla", "monospace"]
      },
      zIndex: {
        "-1": "-1"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    isFirefoxPlugin
  ]
};
