import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
        theme:{
            defaultTheme: 'light',
            themes: {
                light: {
                    colors:{
                        background: '#079267',
                        secondary: '#e6d4c1',
                    }
                }
            }
        }
    })

    nuxtApp.vueApp.use(vuetify)
})
