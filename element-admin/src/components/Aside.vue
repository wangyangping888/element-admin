<template>

	<el-menu default-active="/admin/button" :collapse="collapse" class="el-menu-vertical-demo" @select="handleSelect" @open="handleOpen" @close="handleClose" background-color="#20222A" text-color="#fff" active-text-color="#3a8ee6">
		
		<el-submenu :index="index" :key="index"  v-for="(item,index) in nav" >
			<template slot="title">
				<i  :class="item.icon"></i>
				<span v-text="item.title"></span>
			</template>
			<el-menu-item-group>
				<el-menu-item  :index="sub.path" v-for="(sub,inx) in item.items" > <i :class="sub.icon"></i> <span v-text="sub.title"></span>  </el-menu-item>
			</el-menu-item-group>

		</el-submenu>

	</el-menu>

</template>

<script>
	export default {
		data() {
			return {

				nav: [{
					title: 'Basic',
					icon: 'el-icon-location',
					items: [{
						title: '按钮',
						icon: '',
						path: '/admin/button'
					},{
						title: '表格',
						icon: '',
						path: '/admin/table'
					},{
						title: '添加客户',
						icon: '',
						path: '/admin/addclient'
					}]
				},{
					title: 'Form',
					icon: 'el-icon-location',
					items: [{
						title: '单选',
						icon: '',
						path: '/admin/radio'
					},{
						title: '多选',
						icon: '',
						path: '/admin/checkbox'
					},{
						title: '输入框',
						icon: '',
						path: '/admin/input'
					}]
				}]

			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			handleSelect(path) {
				this.$router.push(path);
			}
		},
		computed: {
			collapse() {
				return this.$store.state.collapse;
			}
		}
	}
</script>

<style>
	.el-aside .is-opened ul.el-menu {
		border-left: 4px solid #3a8ee6!important;
		border-right: none;
	}
</style>