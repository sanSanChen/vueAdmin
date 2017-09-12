<template>
	<section>
		<el-col style="font-size:30px;margin:20px 0;">Radio单选</el-col>
		<el-radio-group v-model="radio" @change="handleChange">
			<el-radio  label="上海">上海</el-radio>
			<el-radio  label="北京">北京</el-radio>
			<el-radio label="山东" disabled>山东</el-radio>
		</el-radio-group>
		<br>
		<br>
		<el-radio-group v-model="radio2" @change="handleChange" size="large">
			<el-radio-button label="上海">上海</el-radio-button>
			<el-radio-button label="北京">北京</el-radio-button>
			<el-radio-button disabled label="天津">天津</el-radio-button>
			<el-radio-button label="山东">山东</el-radio-button>
		</el-radio-group>
		<br>
		<el-col style="font-size:30px;margin:20px 0;">Checkbox复选</el-col>

		<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
  		<div style="margin: 15px 0;"></div>
		<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
			<el-checkbox v-for="citie in cities" :label="citie">{{citie}}</el-checkbox>
		</el-checkbox-group>
		<br>
		<el-checkbox-group v-model="checkedCities2">
			<el-checkbox :disabled="index==3" v-for="(citie,index) in cities2" :label="citie">{{citie}}</el-checkbox>
		</el-checkbox-group>
		<el-col style="font-size:30px;margin: 20px 0;">Select下拉框</el-col>
		<el-select v-model="value" @change="handleChange" clearable multiple :multiple-limit="3" filterable allow-create >
			<el-option-group label="foods">
				<el-option v-for="(option,index) in options" :disabled="index==3" :key="option.value" :label="option.label" :value="option.value">
					<span style="float:left">{{option.value}}</span>
					<span style="float: right;">{{option.label}}</span>
				</el-option>
			</el-option-group>
			<el-option-group label="foods" disabled>
				<el-option v-for="(option,index) in options" :disabled="index==3" :key="option.value" :label="option.label" :value="option.value">
					<span style="float:left">{{option.value}}</span>
					<span style="float: right;">{{option.label}}</span>
				</el-option>
			</el-option-group>
		</el-select>
	</section>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				radio:"北京",
				radio2:"上海",
				isIndeterminate:true,
				checkAll:true,
				checkedCities: ['上海', '北京'],
        		cities: ['上海', '北京', '天津', '山东'],
        		checkedCities2: ['上海', '北京'],
        		cities2: ['上海', '北京', '天津', '山东'],
        		options: [{
		          	value: '选项1',
		          	label: '黄金糕'
		        }, {
		          	value: '选项2',
		          	label: '双皮奶'
		        }, {
		          	value: '选项3',
		          	label: '蚵仔煎'
		        }, {
		          	value: '选项4',
		          	label: '龙须面'
		        }, {
		          	value: '选项5',
		          	label: '北京烤鸭'
		        }],
		        value:''
			}
		},
		methods:{
			handleChange(val){
				console.log(val)
			},
			handleCheckAllChange(event) {
		        this.checkedCities = event.target.checked ? this.cities : [];
		        this.isIndeterminate = false;
	      	},
	      	handleCheckedCitiesChange(value) {
	        	let checkedCount = value.length;
	        	this.checkAll = checkedCount === this.cities.length;
	        	this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
	      	}
		}
	}
</script>
<style type="text/css" scoped>
	/* .el-radio-group{
		margin:10px;
	} */
</style>