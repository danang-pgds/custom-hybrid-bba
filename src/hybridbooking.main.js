// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import { createApp } from 'vue'
import App from './layout.js'
import Calendar from './calendar.js'
import Step1 from './step1.js'
import Step234 from './step234.js'

const app = createApp(App);
app.component('Calendar', Calendar)
app.component('Step1', Step1)
app.component('Step234', Step234)
app.mount('#hybridbooking')