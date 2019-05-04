<template>
	<div class="detail">
		<h1>产品详情</h1>
		<h4>{{$route.params.item.p_tit}}</h4>
		<img :src="$route.params.item.img">
		<div class="cont" v-html="$route.params.item.cont">
		</div>
		<router-link to="/list" class="goback"><span class="icon-arrow-left2"></span></router-link>
	</div>
</template>

<script>
	
	
	
</script>

<style>
</style>