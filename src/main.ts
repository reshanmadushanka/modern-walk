import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@fontsource/roboto' // Defaults to weight 400
import '@fontsource/roboto/400.css' // Specify weight
import '@fontsource/roboto/400-italic.css' // Specify weight and style
import './assets/main.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
