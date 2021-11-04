module.exports = {
    purge: [
    ],
    theme: {
        extend: {
            spacing: {
                "72": "18rem",
                "84": "21rem",
                "96": "24rem",
            },
        },
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
    ],
};
