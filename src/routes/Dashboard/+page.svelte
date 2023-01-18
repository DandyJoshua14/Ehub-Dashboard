<script>
	import { onMount } from 'svelte';
	import Sidebar from '../../components/Sidebar/+page.svelte';
	import { name } from '../../stores/stores';

	async function getName() {
		$name = prompt(
			"What's Your Name?. Please Ensure to space your names and begin each name with an upper case alphabet"
		);
	}
	onMount(() => {
		getName();
	});
</script>

<svelte:head><title>Dashboard</title></svelte:head>

<body>
	{#if $name}
		<Sidebar />
		<div class="main-content" />
	{/if}
</body>

<style>
	* {
		margin: 0;
		padding: 0;
		margin: 0;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}
	.main-content {
		margin-left: 300px;
		background-color: whitesmoke;
		height: 100%;
		width: 101.5rem;
	}
</style>
