<template>
	<div class="home">
		<!-- <div id="read"></div> -->
		<div class="icon-bookmark">11</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	// rem = w/375 就是最后设置的竖直要乘以,375是给的尺寸的宽
	document.addEventListener('DOMContentLoaded', () => {
		const html = document.querySelector('html')
		let fontSize = window.innerWidth / 10
		fontSize = fontSize > 50 ? 50:fontSize
		html.style.fontSize = fontSize + 'px'
	})
	const textObj = {
		a: () => 1,
		b: () => 2
	}
	function fc(newArray) {
		let data = {}
		newArray.forEach((key) => {
			if(textObj.hasOwnProperty(key)){
				data[key] = textObj[key]
			}
			
		})
		console.log(data)
		return data
	}
	import Epub from 'epubjs'
	global.Epub = Epub
	export default {
		name: 'Home',
		computed:{
			...mapGetters(['text']),
			...fc(['a','b','c'])
		},
		mounted() {
			console.log(this.a,this.b,this.c)
			this.$store.dispatch('setTest',9).then(() => {
				console.log(this.text)
			})
			console.log(this.text)
			// this.book = new Epub('/2014_Book_Self-ReportedPopulationHealthA.epub')
			// this.book.renderTo('read',{
			// 	width:window.innerWidth,
			// 	height:window.innerHeight
			// }).display()
		}
	}
</script>
<style lang="scss" scoped>
	@import '../assets/styles/global.scss';
	.icon-bookmark {
		width: px2rem(10);
	}
</style>
