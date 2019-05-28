<template>

	<div id="table">
		<el-table  v-loading="loading" :data="student" border stripe style="width: 100%" :row-class-name="tableRowClassName" @selection-change="handleSelectionChange">
			<el-table-column fixed type="selection" width="55">
			</el-table-column>
			<el-table-column type="index">
			</el-table-column>
			<el-table-column prop="date" label="日期"></el-table-column>
			<el-table-column prop="name" label="姓名"></el-table-column>
			<el-table-column prop="phone" label="手机号"></el-table-column>
			<el-table-column prop="address" label="地址"></el-table-column>

			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>

		</el-table>
		
		<el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="page"
		      :page-sizes="[10, 20, 30, 40]"
		      :page-size="size"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="total">
		    </el-pagination>

		<el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
			<el-form ref="client"  :model="editData" label-width="80px">
				<el-form-item label="姓名" >
					<el-input v-model="editData.name" placeholder="请输入姓名"></el-input>
				</el-form-item>
				<el-form-item label="联系方式" prop='phone'>
					<el-input v-model="editData.phone" placeholder="请输入手机号"></el-input>
				</el-form-item>
				<el-form-item label="日期" >
					<el-input v-model="editData.date" placeholder="请输入姓名"></el-input>
				</el-form-item>
				<el-form-item label="地址" prop='address'>
					<el-input v-model="editData.address" placeholder="请输入手机号"></el-input>
				</el-form-item>
			
			</el-form>
			<span slot="footer" class="dialog-footer">
			    <el-button @click="dialogVisible = false">取 消</el-button>
			    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>

	</div>

</template>

<script>
	
	import Student from "@/assets/student.js";
	
	
	export default {

		data() {
			return {
				dialogVisible:false,
				
				editData:{
					date: '',
					name: '',
					phone: '',
					address: ''
				},
				
				student: [],
				size:10,
				page:1,
				total:100,
				loading:true
			};
		},
		methods: {

			tableRowClassName({
				row,
				rowIndex
			}) {

				if(rowIndex % 2 == 0) {
					return 'row-success';
				} else {
					return 'row-warning';
				}

			},
			handleSelectionChange() {},
			handleEdit(index,row){
				this.dialogVisible = true;
				
				this.editData = {...this.student[index]};
				
			},
			handleDelete(index, row) {
				this.$confirm('此操作将永久删除该学生, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.student.splice(index, 1);
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			handleClose(){
				this.dialogVisible = false;
			},
			handleSizeChange(val){
				this.size = val;
				// 数据获取前让它loading
				this.loading = true;
				
				setTimeout(()=>{
					// 成功后取消loading
					this.student = Student(this.size,1);
					this.loading = false;
				},3000);
			},
			handleCurrentChange(val){
				this.page = val;
				// 数据获取前让它loading
			this.loading = true;
			
			setTimeout(()=>{
				// 成功后取消loading
				this.student = Student(this.size,1);
				this.loading = false;
			},3000);
			}
		},
		created(){
			
			// 数据获取前让它loading
			this.loading = true;
			
			setTimeout(()=>{
				// 成功后取消loading
				this.student = Student(this.size,1);
				this.loading = false;
			},3000);
			
			
			
		}
	}
</script>

<style>
	.row-success {
		background-color: #f0f9eb!important;
	}
	
	.row-warning {
		background-color: oldlace!important;
	}
</style>