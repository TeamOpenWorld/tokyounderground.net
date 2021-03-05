module.exports = {
    purge: [
        './static/release/**/*.html',
        './static/release/**/*.vue',
        './static/release/**/*.jsx',
      ],
    theme: {
        extend: {
            spacing: {
                "72": "18rem",
                "84": "21rem",
                "96": "24rem",
            },
        },
        aspectRatio: {
            "none": 0,
            "square": [1, 1],
            "16/9": [16, 9],
            "4/3": [4, 3],
            "21/9": [21, 9],
        },
    },
    variants: { aspectRatio: ["responsive"] },
    plugins: [require("tailwindcss-aspect-ratio")],
};
