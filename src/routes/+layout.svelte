<script>
	import Sidebar from '../components/Sidebar/+page.svelte';
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
	/>
</svelte:head>
<slot><Sidebar /></slot>

<style>
	* {
		border: 0;
		margin: 0;
		margin: 0;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}
</style>
