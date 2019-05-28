<template>

	<el-row type="flex" class="admin-header" justify="space-between">
		<el-col style="width: 80px;">
			<el-button type="primary" @click="changeCollapse" size="mini" icon="el-icon-menu"></el-button>
		</el-col>
		<el-col :span="4">
			<el-input placeholder="请输入内容" size="small">
				<i slot="prefix" class="el-input__icon el-icon-search"></i>
			</el-input>

		</el-col>
		<el-col :span="12">

			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				<el-menu-item index="1">处理中心</el-menu-item>
				<el-submenu index="2">
					<template slot="title">我的工作台</template>
					<el-menu-item index="2-1">选项1</el-menu-item>
					<el-menu-item index="2-2">选项2</el-menu-item>
					<el-menu-item index="2-3">选项3</el-menu-item>
					<el-submenu index="2-4">
						<template slot="title">选项4</template>
						<el-menu-item index="2-4-1">选项1</el-menu-item>
						<el-menu-item index="2-4-2">选项2</el-menu-item>
						<el-menu-item index="2-4-3">选项3</el-menu-item>
					</el-submenu>
				</el-submenu>
				<el-menu-item index="3" disabled>消息中心</el-menu-item>
				<el-menu-item index="4">
					<a href="https://www.ele.me" target="_blank">订单管理</a>
				</el-menu-item>
			</el-menu>

		</el-col>
		<el-col style="width: 100px;">

			<el-dropdown>
				<span>
				    管理员<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>通知消息</el-dropdown-item>
					<el-dropdown-item>修改头像</el-dropdown-item>
					<el-dropdown-item>系统管理</el-dropdown-item>

				</el-dropdown-menu>
			</el-dropdown>

		</el-col>
	</el-row>

</template>

<script>
	
	export default{
		methods:{
			changeCollapse(){
				this.$store.commit('changeCollapse',!this.collapse);
			}
		},
		computed:{
			collapse(){
				return this.$store.state.collapse;
			}
		}
	}
	
	
</script>

<style>
	.admin-header {
		height: 60px;
		line-height: 60px;
	}
</style>