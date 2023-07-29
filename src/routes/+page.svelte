<script>
	import Page from './Page.svelte'
	import zoom from './zoom'
	import { fade, slide } from 'svelte/transition'
	import { sineIn, quintInOut } from 'svelte/easing'

	const pages = [
		{
			content:`
					<img src="/page_1_1.jpg" style="display:inline-block; width:50%; float:left" alt="">
					<img src="/page_1_2.jpg" style="display:inline-block; width:50%; float:left" alt="">
				`
		},
		{
			content:`
					<img src="/page_1_4.jpg" style="display:inline-block; width:50%; float:left" alt="">
					<img src="/page_1_3.jpg" style="display:inline-block; width:50%; float:left" alt="">
					<img src="/page_1_6.jpg" style="display:inline-block; width:50%; float:left" alt="">
					<img src="/page_1_5.jpg" style="display:inline-block; width:50%; float:left" alt="">
				`
		},
	]

	let selected = null
	let node

	function toggle(page) {
		selected = selected == page ? null : page
	}
</script>

<main>
	<h1>Our pages</h1>
	<p>Example of a custom Svelte transition that zooms content.</p>
	<div class="container">
		
		{#each pages as page}
			<Page {page} selected={selected == page} on:click={() => toggle(page)}/>
		{/each}
			
	</div>
	
</main>
		
<style>
	:global(body) {
		padding: 1rem;
	}
	
	:global(*) {
		box-sizing: border-box;
	}
	main{
		padding: 100px;
		height: 1250px;
		background-color: #ddd !important;

	}
	h1, p {
		text-align: center;	
	}
	.container{
		background-color: white !important;
		width: 35%;
	}
	
	.flex img {
		display: inline-block;
		width: 50%;
		padding: 0;
		padding: 0;
		margin: 0;
		float: left;
	}
</style>