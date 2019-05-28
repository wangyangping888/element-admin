<template>

	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>radio</span>
			<el-button style="float: right; padding: 3px 0" type="text">+</el-button>
		</div>
		
		
		<h1 >{{radio}} {{typeof radio}} </h1>
		 <el-radio-group v-model="radio">
		    <el-radio label="3">备选项</el-radio>
		    <el-radio :label="6">备选项</el-radio>
		    <el-radio :label="9">备选项</el-radio>
		  </el-radio-group>
		
	</el-card>

</template>

<script>
	
	export default {
		data(){
			return {
				radio:3
			}
		}
	}
	
</script>

<style>

</style>