import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/main.css'
import router from './router/siteRouter'

const app = createApp(App)

app.use(router)
app.mount('#app')
