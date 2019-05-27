import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Admin from './views/Admin.vue'
import Table from './views/Table.vue'
import Button from './views/Button.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/admin',
			name: 'admin',
			component: Admin,
			children: [{
				path: 'table',
				name: 'table',
				component: Table
			},{
				path: 'button',
				name: 'button',
				component: Button
			}]
		}
	]
})