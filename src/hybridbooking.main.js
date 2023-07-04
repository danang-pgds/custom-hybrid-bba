// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
// import { createApp } from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler.js'
import './main.css'
import App from './layout.vue'
import Calendar from './calendar.js'
import Step1 from './step1.vue'
import Step234 from './step234.vue'

const app = createApp(App);
app.component('Calendar', Calendar)
app.component('Step1', Step1)
app.component('Step234', Step234)
// app.config.globalProperties.msg = 'hello'
app.mount('#hybridbooking')