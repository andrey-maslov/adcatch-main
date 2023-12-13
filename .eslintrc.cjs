module.exports = {
    root: true,
    parserOptions: {
        sourceType: "module"
    },
    extends: ["@nuxt/eslint-config"],
    rules: {
        "vue/multi-word-component-names": "off",
        "vue/max-attributes-per-line": [
            "error",
            {
                singleline: 3, // Maximum number of attributes allowed on a single line
            },
        ],
    }
};
