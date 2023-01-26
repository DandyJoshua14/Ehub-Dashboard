<script>
	import Sidebar from '../../components/Sidebar/+page.svelte';
	import Footer from '../../components/Footer/+page.svelte';
	import { name } from '../../stores/stores';
	import { onMount } from 'svelte';
	import { Card, Icon, Button } from 'sveltestrap';
	let view = false;
	async function toggleDropdown() {
		if (view === true) {
			view = false;
		} else {
			view = true;
		}
	}
	/**
	 * @type {{ result: any; }}
	 */
	export let data;
	onMount(() => {
		console.log(data);
	});
	let projects = data.result;
</script>

<svelte:head>
	<title>Ehub Projects</title>
</svelte:head>
{#if $name}
	<Sidebar />
	<body>
		<div class="main-content">
			<div class="cards">
				{#each projects as d}
					<div class="card">
						<div class="card-header">
							<h3 style="text-align: left;"><b>{d.id}&nbsp;&nbsp;{d.name}</b></h3>
							<span style="text-align: right;"
								><Button color="primary" on:click={toggleDropdown}>Show More</Button></span
							>
						</div>
						{#if view === true}
							<div class="view">
								<p>{d.description}</p>
							</div>
						{/if}
					</div>
					<br />
				{/each}
				<div class="card">
					<div class="card-header">
						<h3 style="text-align: left;"><b>&nbsp;&nbsp;Project 1</b></h3>
						<span style="text-align: right;"
							><Button color="primary" on:click={toggleDropdown}>Show More</Button></span
						>
					</div>
					{#if view === true}
						<div class="view">
							<p>I Am a paragraph</p>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</body>
	<div class="footer">
		<Footer />
	</div>
{/if}

<style>
	body {
		margin: 0px;
		padding: 0px;
		border: 0px;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}

	.main-content {
		margin-left: 300px;
		margin-top: 0px;
		background-color: whitesmoke;
		height: auto;
		width: auto;
		transition: 1s;
		text-align: center;
	}

	.card {
		height: auto;
		border-radius: 10px;
		border: 2px solid black;
		padding: 10px;
		background-color: rgb(65, 62, 62);
		color: white;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
	}
	.cards {
		padding: 50px;
	}

	.view {
		transition: 1s;
	}
	.footer {
		margin-left: 300px;
		width: auto;
	}
</style>
