// import 'normalize.css'
import './assets/app.ab6f983.css'

import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
// import './assets/common.scss'


import { createPinia } from 'pinia'
import App from './App.vue'


const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.use(ElementPlus)
app.use(createPinia())

app.mount('#app')
