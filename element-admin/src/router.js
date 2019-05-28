import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Admin from './views/Admin.vue'
import Table from './views/Table.vue'
import Button from './views/Button.vue'
import Radio from './views/Radio.vue'
import Input from './views/Input.vue'
import addClient from './views/addClient.vue'



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
			},{
				path: 'radio',
				name: 'radio',
				component: Radio
			},{
				path: 'input',
				name: 'input',
				component: Input
			},{
				path: 'addclient',
				name: 'addclient',
				component: addClient
			}]
		}
	]
})