<template>

	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>添加客户</span>
			<el-button style="float: right; padding: 3px 0" type="text">+</el-button>
		</div>

		<el-form ref="client" :rules="rules" :model="client" label-width="80px">
			<el-form-item label="客户姓名" prop='name'>
				<el-input v-model="client.name" placeholder="请输入姓名"></el-input>
			</el-form-item>

			<el-form-item label="联系方式" prop='phone'>
				<el-input v-model="client.phone" placeholder="请输入手机号"></el-input>
			</el-form-item>

			<el-form-item label="意向课程" prop='course'>
				<el-select v-model="client.course" placeholder="请选择">
					<el-option v-for="item in course" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</el-form-item>

			<el-form-item label="地址">
				<el-cascader :options="address" v-model="client.address">
				</el-cascader>
			</el-form-item>

			<el-form-item label="街道">
				<el-input v-model="client.street" placeholder="请输入详细地址"></el-input>
			</el-form-item>
			<el-form-item label="备注">
				<el-input type="textarea" v-model="client.desc" placeholder="请输入详细地址"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit('client')">立即创建</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>

	</el-card>

</template>

<script>
	export default {
		data() {
			return {
				course: [{
					value: 1,
					label: '网页前端'
				}, {
					value: 2,
					label: '网页设计'
				}, {
					value: 3,
					label: '室内设计'
				}],
				address: [],
				client: {
					name: '',
					phone: '',
					course: 1,
					address: [0, 0, 0],
					street: '',
					desc: ''
				},
				rules: {
					name: [{
							required: true,
							message: '客户姓名不能为空！',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 10,
							message: '长度必须在 3 到 10 个字符之间',
							trigger: 'blur'
						}
					],
					phone: [{
						required: true,
						message: '手机号不能为空！',
						trigger: 'blur'
					}, {
						validator: (rule, value, callback) => {
							if(/^1[3578]\d{9}$/.test(value)) {
								callback();
							} else {
								callback(new Error('手机号格式错误！'));
							}
						},
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			onSubmit(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			}
		},
		created() {
			this.address = require("@/assets/region.json");
		}
	}
</script>

<style>

</style>