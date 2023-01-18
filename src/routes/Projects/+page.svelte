<script>
	import Sidebar from '../../components/Sidebar/+page.svelte';
	import { name } from '../../stores/stores';
</script>

<svelte:head>
	<title>Ehub Projects</title>
</svelte:head>

{#if $name}<Sidebar />{/if}

<style>
	* {
		border: 0;
		margin: 0;
		margin: 0;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}
</style>
