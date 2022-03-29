import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import router from './router'

// createApp(App).use(router).mount('#app')
let app = createApp(App)
app.config.globalProperties.$test = true
app.use(router).mount('#app')
