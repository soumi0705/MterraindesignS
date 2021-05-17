module.exports = {
    purge: {
        enabled: true,
        content: ['./views/**/*.ejs '],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            spacing: {
                '108': '25rem',
                '116': '26rem',
                '124': '27rem',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}