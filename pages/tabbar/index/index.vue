<template>
	<view class="content">
		<!-- 自定义导航栏 -->
		<navbar></navbar>
		<tab :list="tabList" @tab="tab"></tab>
	</view>
</template>

<script>
	import navbar from '@/components/navbar/navbar.vue'
	import tab from '@/components/tab/tab.vue'
	export default {
		components:{
			navbar,
			tab
		},
		data() {
			return {
				title: 'Hello',
				tabList:[]
			}
		},
		onLoad() {
			this.getLabel()
		},
		methods: {
			tab({data,index}){
				console.log(data,index)
			},
			getLabel() {
				console.log(this.$api)
				this.$api.get_label({
					name:'get_label',
				}).then((res)=>{
					console.log(res)
					const {data} = res
					this.tabList = data
					console.log(this.tabList)
				})
			}
		}
	}
</script>

<style lang="scss">
	
</style>
