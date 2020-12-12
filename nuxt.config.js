export default {
    target: 'static',

    head: {
        title: 'Die Schatzkiste'
    },

    css: [

    ],

    components: true,

    plugins: [],

    modules: [],

    buildModules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts'
    ],

    googleFonts: {
        families: {
            Bilbo: true
        }
    }
}