<template>

	<el-tabs v-model="activeTab" @tab-click="handleClick" @tab-remove="handleRemove">
		<el-tab-pane :closable="index!=0" v-for="(tab,index) in tabs" :name="tab.path">
			<span slot="label"><i class="fa" :class="tab.icon"></i> {{tab.title}}</span>
		</el-tab-pane>

	</el-tabs>

</template>

<script>
	export default {
		data() {
			return {};
		},
		computed: {
			tabs() {
				return this.$store.state.tabs;
			},
			activeTab: {
				set(val) {
					console.log(val);
				},
				get() {
					return this.$store.state.activeTab;
				}
			}
		},
		methods: {
			// 点击切换页面
			handleClick(tab) {
				console.log(tab);
				this.$router.push(tab.name);
			},
			handleRemove(name) {
				console.log(name);
			},
			handleRemove(path) {
				console.log(path);
				this.$store.commit('removeTabs',path);
			}
		}
	}
</script>

<style>
	.el-tabs__nav-wrap::after {
		height: 0px!important;
	}
</style>