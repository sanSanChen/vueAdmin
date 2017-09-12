<template>
	<section>
		<el-col style="font-size:30px;text-align: center" >Input输入框样式</el-col>
		<el-input v-model="input" placeholder="普通输入框large" size="large"></el-input>
		<el-input v-model="input" placeholder="普通输入框small" size="small"></el-input>
		<el-input v-model="input" placeholder="普通输入框mini 禁用状态" size="mini" :disabled="true"></el-input>
		<el-input v-model="input" placeholder="带图标的输入框icon" icon="search" :on-icon-click="iconClick"></el-input>
		<el-input v-model="input" placeholder="复合输入框">
			<el-select class="select" slot="prepend"  v-model="select" placeholder="请选择" @change="selected">
				<el-option label="餐厅名" value="v餐厅名"></el-option>
				<el-option label="订单号" value="v订单号"></el-option>
				<el-option label="用户电话" value="v用户电话"></el-option>
			</el-select>
			<el-button icon="search" slot="append" @click="iconClick"></el-button>
		</el-input>
		<el-autocomplete  @select="handleSelected" v-model="autocomplete" :fetch-suggestions="querySearch" placeholder="带输入建议的autocomplete"></el-autocomplete>
		<el-input-number @change="numChange" v-model="num" :min="1" :max="15" :step="2"></el-input-number>
	</section>
</template>
<script type="text/javascript">
import {Users} from '../../mock/data/user.js';
	export default {
		data(){
			return {
				input:"",
				select:"",
				states:[],
				autocomplete:"",
				num:3
			}
		},
		created(){
			for (let i = 0; i < Users.length; i++) {
				this.states.push({
					value:Users[i].addr
				});
			}
		},
		methods:{
			iconClick(ev){
				console.log(ev)
			},
			selected(val){
				console.log(val)
			},
			handleSelected(obj){
				this.autocomplete=obj.value;
			},
			querySearch(queryString, cb) {

		        var states = this.states;
		        var results = queryString ? states.filter(this.createFilter(queryString)) : states;
		        // 调用 callback 返回建议列表的数据
		        cb(results);
		      },
	      	createFilter(queryString) {
	        	return (restaurant) => {
	          		return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
	        };
	      },
	      numChange(val){
	      	console.log(val)
	      }
		}
	}
</script>
<style type="text/css" scoped>
	.el-input{
		margin: 10px 0;
	}
</style>