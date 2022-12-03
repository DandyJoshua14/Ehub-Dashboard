<script>
	import { onMount } from 'svelte';
	import Sidebar from '../components/Sidebar/+page.svelte';

	/**
	 * @type {string | null}
	 */
	let name;
	async function getName() {
		name = prompt("What's Your Name?. Please Ensure to space you names");
	}
	onMount(() => {
		getName();
	});
</script>

<svelte:head>
	<title>Ehub Dashboard</title>
</svelte:head>
<body>
	{#if name}
		<div id="main-content">
			<div id="sidebar">
				<Sidebar />
			</div>
			<div class="acc-img">
				<span style="display: flex; justify-content: flex-end; width: 85vw;">
					<div class="img">
						<img
							src="/Ehub New B.png"
							width="50px"
							height="50px"
							alt="avatar"
							style="border-radius: 100%; padding: 2px; float: right"
						/>
						<p style="padding: 2px; margin-top: 2px; white-space: pre-wrap;">
							{@html `${name}`.charAt(0).toUpperCase() + `${name}`.slice(1).replace(' ', '<br>')}
						</p>
					</div>
				</span>
			</div>
		</div>
	{/if}
</body>

<style>
	* {
		border: 0;
		margin: 0;
	}
	body {
		display: flex;
	}
	#sidebar {
		position: fixed;
		z-index: 1000;
		height: 100vh;
		/* background-image: linear-gradient(royalblue, skyblue, royalblue); */
		background-color: darkseagreen;
		width: 300px;
	}
	#main-content {
		margin-left: 251px;
	}
	#sidebar li {
		padding: 20px;
		margin-top: 50px;
		font-size: 2rem;
		color: azure;
	}
	#sidebar li:hover {
		background-color: gray;
		color: white;
		transition: 1s;
	}
	.img:hover {
		background-color: gray;
		transition: 1s;
	}
	a {
		text-decoration: none;
	}
</style>
