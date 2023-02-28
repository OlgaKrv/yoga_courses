import Vue from 'vue'
import VueCarousel from 'vue-carousel'

import App from './App.vue'
import 'material-design-icons-iconfont'
import './assets/tailwind.css'

import router from './routes'

// Plagins

Vue.use(VueCarousel)

Vue.config.productionTip = false

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app')
