<template>

	<el-container class="element-admin">
		<el-aside :width="collapse?'64px':'200px'">
			<Aside/>
		</el-aside>
		<el-container>
			<el-header>
				<Header/>
			</el-header>
			<el-main>
				<!-- 子路由出口   -->
				<router-view/>
			</el-main>
			<el-footer>Footer</el-footer>
		</el-container>
	</el-container>

</template>

<script>
	import Aside from "@/components/Aside";
	import Header from "@/components/Header";

	export default {
		components: {
			Aside,
			Header
		},
		computed: {
			collapse() {
				return this.$store.state.collapse;
			}
		}
	}
</script>

<style lang="less">
	.element-admin {
		background-color: #f2f2f2;
		&.el-container {
			height: 100%;
		}
		.el-aside {
			background-color: #20222A;
			transition: width 0.3s linear;
		}
		.el-header {
			background-color: #fff;
			box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .1);
		}
		.el-footer {
			background-color: #fff;
			box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, .1);
		}
	}
</style>