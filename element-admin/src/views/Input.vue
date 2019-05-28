<template>

	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>Input</span>
			<el-button style="float: right; padding: 3px 0" type="text">+</el-button>
		</div>
		
		<el-input
		  type="textarea"
		  :rows="2"
		  placeholder="请输入内容"
		  v-model="input">
		</el-input>
		
		<el-input v-model="input"  suffix-icon="el-icon-date"  show-password  clearable placeholder="请输入内容"></el-input>

	</el-card>

</template>

<script>
	export default {
		data() {
			return {
				input: 'hello'
			};
		}
	}
</script>

<style>

</style>