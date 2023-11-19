import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'normalize.css'
// import './assets/app.ab6f983.css'

import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import '@/assets/common.scss'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css'


import App from './App.vue'
import router from './router'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.use(createPinia())
app.use(ElementPlus)
app.use(VueAwesomeSwiper)
app.use(router)

app.mount('#app')
