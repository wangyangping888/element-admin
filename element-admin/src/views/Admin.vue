<template>

	<el-container class="element-admin">
		<el-aside width="200px">
			
				<Aside/>
			
		</el-aside>
		<el-container>
			<el-header>
				
			
				
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
	
	
	export default{
		components:{
			Aside
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