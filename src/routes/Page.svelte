<script>
	import zoom from './zoom'
	import { fade, slide } from 'svelte/transition'
	import { sineIn, quintInOut } from 'svelte/easing'
	
	export let page
	export let selected
	
	let node
</script>

<div  class:selected on:click bind:this={node}>
	<div class="flex">
		{@html page.content}
	</div>
</div>

{#if selected}
<div  in:zoom={{node, delay: 0, easing: quintInOut}} out:zoom={{node, delay: 400, easing: quintInOut}}  on:click>
	<div class="flex">
		{@html page.content}
	</div>
</div>
{/if}

<style>
	.flex img {
		display: inline-block;
		width: 50%;
		padding: 0;
		padding: 0;
		margin: 0;
		float: left;
	}
</style>