/** @format */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import EventManager from './assets/js/EventManager'

Vue.config.productionTip = false
window.EventManager = new EventManager()
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
