<template>
	<div>
		<ebook-title></ebook-title>
		<ebook-reader></ebook-reader>
	</div>
</template>

<script>
	import EbookReader from '../../components/ebook/EbookReader.vue'
	import EbookTitle from '../../components/ebook/EbookTitle.vue'
	export default {
		components:{
			EbookReader,
			EbookTitle
		}
	}
</script>

<style>
</style>
