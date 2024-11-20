import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import piniaPluginPersistedSate from 'pinia-plugin-persistedstate';
import router from './router';
import vue3GoogleLogin from 'vue3-google-login';

const pinia = createPinia();
pinia.use(piniaPluginPersistedSate);

const app = createApp(App);

app.use(pinia);
app.use(router);
app.user(vue3GoogleLogin, {
	clientId: '',
});
app.mount('#app');
