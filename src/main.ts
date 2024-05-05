import { createApp } from 'vue'
// import './style.css'
import 'virtual:uno.css'
import App from './App.vue'
const app = createApp(App)
//引入路由 
import router from './router'

app.use(router)
app.mount('#app')
