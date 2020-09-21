<template>
	<div>
		<div id="read" style="touch-action: none">
			
		</div>
	</div>
</template>

<script>
	import Epub from 'epubjs'
	import { mapGetters } from 'vuex'
	global.ePub = Epub
	export default {
		methods:{
			prevPage() {
				if(this.rendition) {
					console.log('cccc')
					console.log(this.rendition)
					this.rendition.prev()
				}
			},
			nextPage() {
				if(this.rendition) {
					console.log('ttt')
					this.rendition.next()
				}
			},
			showTitleAndMenu() {
				
			},
			initEpub() {	
				let url = 'http://192.168.0.112:8086/epub/' + this.fileName + '.ePub'
				console.log(url)
				//url = './2014_Book_Self-ReportedPopulationHealthA.epub'
				this.book = new Epub(url)
				this.rendition = this.book.renderTo('read',{
					width:innerWidth,
					height:innerHeight,
					method:'default'
				})
				this.rendition.display()
				this.rendition.on('touchstart',event => {
					console.log(event)
					this.touchStartX = event.changedTouches[0].clientX
					this.touchStartTime = event.timeStamp
				})
				this.rendition.on('touchend',event => {
					let offsetX = event.changedTouches[0].clientX - this.touchStartX
					let offsetTime = event.timeStamp - this.touchStartTime
					if(offsetTime < 500 && offsetX > 40) {
						console.log('prev')
						this.prevPage()
					}else if(offsetTime < 500 && offsetX < -40) {
						this.nextPage()
					}else{
						this.showTitleAndMenu()
					}
				})
				console.log(this.book)
			}
		},
		computed:{
			...mapGetters(['fileName'])
		},
		mounted() {
			//http://192.168.0.109:9000/epub/BusinessandManagement/2014_Book_LibraryAndInformationSciences.epub
			
			const fileName = this.$route.params.fileName.split('|').join('/')
			this.$store.dispatch('setFileName',fileName).then(() => {
				this.initEpub()
			})
		}
	}
</script>

<style>
</style>
