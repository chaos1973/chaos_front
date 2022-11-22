import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import * as axios from './utils/index'
const app = createApp(App).use(axios).mount('#app')

