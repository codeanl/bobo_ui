import { createApp } from 'vue'
// import './style.css'
import 'virtual:uno.css'
import App from './App.vue'
const app = createApp(App)
//引入路由 
import router from './router'

//引入pinia
import pinia from './store'
app.use(pinia)

app.use(router)
app.mount('#app')
