<template>
	<div class="list">
		<h1>产品列表</h1>
		<ul>
			<!--router-link 路由 传参-->
			<!--<li v-for="item in p_list">
				<router-link :to="{'name':'detail',params:{item}}">
					<h4>{{item.p_tit}}</h4>
					<img :src="item.img">
					<p>{{item.desc}}</p>
				</router-link>
			</li>-->
			
			<!--点击事件 路由-->
			<li v-for="item in p_list" @click="show_detail(item)">
				<h4>{{item.p_tit}}</h4>
				<img :src="item.img">
				<p>{{item.desc}}</p>
			</li>
			
			
		</ul>
	</div>
</template>

<script>
	import axios from"axios";
	export default {
		created(){
			axios.get("/static/product.json").then(
				msg=>{
					this.p_list=msg.data;
					console.log(this.p_list)
				},
				()=>{
					alert("连接失败！！");
				}
			)
			console.log(this.$router.currentRoute===this.$route);
		},
		data:()=>({
			p_list:[]
		}),
		methods:{
			//路由到详情组件
			show_detail(item){

				//使用全局的路由钩子 传递参数
				this.$router.beforeEach(function(to,from,next){
					console.log(to,from);
					to.params.item=item;
					next();//一定要记着执行，不然路由不能跳转了
				});
				
				//跳转路由
				this.$router.push({'name':"detail"});
			}
		},
		
		
	}
	
</script>

<style>
</style>