import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import demoCom from 'demoCom'

const app = createApp(App)

app.use(router)

app.mount('#app')
