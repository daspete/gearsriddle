export default {
    target: 'static',

    head: {
        title: 'Die Schatzkiste',
        meta: [
            { charset: 'utf-8' },
            // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Das Zahlenschlossrätsel für die Schatzkiste' }
        ]
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