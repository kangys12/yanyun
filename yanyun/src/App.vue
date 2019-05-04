<template>
  <div id="app">
    <header>
			<img src="./assets/images/logo.jpg" />        		
		</header>
    <router-view name="home"></router-view>
		<router-view name="list"></router-view>
		<router-view name="comment"></router-view>
		<router-view name="detail"></router-view>
		<router-view name="tabBar"></router-view>
  </div>
</template>

<script>
	//引入样式
	import "@/assets/css/ico.css";
	import "@/assets/css/style.css";
export default {
  name: 'App'
}
</script>

<style>

</style>
