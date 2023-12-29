import { createApp } from 'vue'
import { createPinia } from 'pinia'

import persist from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

import vant from 'vant'
import 'vant/lib/index.css';

// element暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'
// vant桌面端适配
import '@vant/touch-emulator'

const app = createApp(App)

app.use(createPinia().use(persist))
app.use(router)
app.use(vant)

app.mount('#app')
