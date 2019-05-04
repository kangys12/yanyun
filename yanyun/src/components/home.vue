<template>
  <div class="home">
				<h1>首页</h1>
				<div class="swiper-container">
				    <div class="swiper-wrapper">
				        <div v-for="img_src in slide_list" class="swiper-slide"><img :src="img_src"></div>
				    </div>
				    <!-- 如果需要分页器 -->
				    <div class="swiper-pagination"></div>
				</div>
				<div class="desc">
					<img src="../assets/images/20130625130149610.jpg">北京燕云气象仪器设备销售中心隶属于北京市气象探测中心(原北京市气象技术装备中心)，经北京市气象局批准，于1999年正式成立，是一家面向社会，提供优质气象服务的专业仪器设备销售部门。

中心主要从事气象仪器及气象观测设备的开发、建设安装、销售和租赁。销售产品广泛应用于气象、民航、国防、军事、工农业生产和科研等众多领域，一直以来，中心以专业、真诚、高效的服务理念得到客户的肯定、业界的推崇以及消费者的好评。
					
				</div>
			</div>
</template>

<script>
	import axios from"axios";
	import Swiper from"swiper";
	
	import "swiper/dist/css/swiper.min.css";
export default {
  name: 'home',
  data:()=>({
			slide_list:[], //轮播图数组
		}),
		created(){
			console.log(location.href);
			axios.get("/static/slide.json").then(
				msg=>{
					this.slide_list=msg.data;
					console.log(11111);  //异步操作
				},
				()=>{
					alert("连接失败");
				}
			)
		},
		//ajax 触发的dom变化
		updated(){
			//dom挂载后
			var mySwiper = new Swiper ('.swiper-container',{
				pagination: { //分页器
			    	el: '.swiper-pagination',
			  	},
			  	loop : true, //循环轮播
			});
		},
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
