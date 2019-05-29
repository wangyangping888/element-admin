import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		collapse: true,
		// 定义顶部的tab标签
		tabs: [{
			title: '首页',
			icon: 'fa-home',
			path: '/admin/'
		}],
		activeTab: '/admin'
	},
	mutations: {
		changeCollapse(state, flag) {
			state.collapse = flag;
		},
		// 添加一个tab
		addTabs(state, tab) {
			// 遍历查找tab是否已经在数组中
			let flag = false;
			state.tabs.forEach((item, index) => {
				if(item.path == tab.path) {
					flag = true;
				}
			});
			// 如果不再则push进去，再就什么都不做
			if(!flag) {
				state.tabs.push(tab);
			}
			// 设置当前tab
			state.activeTab = tab.path;
			router.push(state.activeTab);
		},
		// 关闭一个tab
		removeTabs(state, path) {
			// 查找要删除的索引
			let inx = 0;
			state.tabs.forEach((item, index) => {
				if(item.path == path) {
					inx = index;
				}
			});
			// 删除操作
			state.tabs.splice(inx, 1);
			// 设置当前tab
			state.activeTab = state.tabs[inx - 1].path;
			router.push(state.activeTab);
		}
	},
	actions: {

	}
})