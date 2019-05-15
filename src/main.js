import Vue from 'vue'
import App from './App.vue'

// import VueGoodTablePlugin from 'vue-good-table'
Vue.config.productionTip = false;

// import the styles
// import 'vue-good-table/dist/vue-good-table.css'
// Глобальная регистрация компонента. Доступен во всём проеткте.
// Vue.use(VueGoodTablePlugin);
new Vue({
  render: h => h(App),
}).$mount('#app');
