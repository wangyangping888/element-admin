<template>

	<el-menu default-active="/admin/button" :collapse="collapse" class="el-menu-vertical-demo" @select="handleSelect" @open="handleOpen" @close="handleClose" background-color="#20222A" text-color="#fff" active-text-color="#3a8ee6">
		<el-submenu index="1">
			<template slot="title">
				<i class="el-icon-location"></i>
				<span>Basic</span>
			</template>
			<el-menu-item-group>
				<el-menu-item index="/admin/button">按钮</el-menu-item>
				<el-menu-item index="/admin/table">表格</el-menu-item>
			</el-menu-item-group>

		</el-submenu>

	</el-menu>

</template>

<script>
	export default {
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