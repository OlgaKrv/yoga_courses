// default
import Vue from 'vue'
import Router from 'vue-router'

// Pages
import MainPage from './pages/MainPage.vue'
import Programs from './pages/Programs.vue'
import Trainers from './pages/Trainers.vue'
import Prices from './pages/Prices.vue'
import Schedule from './pages/Schedule.vue'
import AboutUs from './pages/AboutUs.vue'
import Contacts from './pages/Contacts.vue'

Vue.use(Router)

// Routering
export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'main',
			component: MainPage,
		},
		{
			path: '/programs',
			name: 'programs',
			component: Programs,
		},
		{
			path: '/trainers',
			name: 'trainers',
			component: Trainers,
		},
		{
			path: '/prices',
			name: 'prices',
			component: Prices,
		},
		{
			path: '/schedule',
			name: 'schedule',
			component: Schedule,
		},
		{
			path: '/about_us',
			name: 'about_us',
			component: AboutUs,
		},
		{
			path: '/contacts',
			name: 'contacts',
			component: Contacts,
		},
	],
})
