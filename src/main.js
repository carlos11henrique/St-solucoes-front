import { createApp } from 'vue';
import "./assets/global.css";
import App from './App.vue';
import router from './router';
import { BootstrapVue3 } from 'bootstrap-vue-3';
import Chart from 'primevue/chart';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

const app = createApp(App);

app.use(router);
app.use(BootstrapVue3);
app.component('Chart', Chart); 

app.mount('#app'); 