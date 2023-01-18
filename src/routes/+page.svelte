<script>
	import { onMount } from 'svelte';
	import Sidebar from '../components/Sidebar/+page.svelte';
	import Footer from '../components/Footer/+page.svelte';
	import { name } from '../stores/stores';

	async function getName() {
		$name = prompt(
			"What's Your Name?. Please Ensure to space your names and begin each name with an upper case alphabet"
		);
	}
	onMount(() => {
		getName();
	});
</script>

<svelte:head>
	<title>Ehub Dashboard | Home</title>
</svelte:head>
<body>
	{#if $name}
		<Sidebar />

		<div id="main-content">
			<div class="acc-img">
				<nav>
					<ul>
						<div class="nav-list">
							<li>
								&nbsp;<img
									src="/Ehub New B.png"
									width="50px"
									height="50px"
									alt="avatar"
									style="border-radius: 100%; padding: 2px; float: right"
								/>
							</li>
							<li>
								<p style="padding: 2px; margin-top: 2px; white-space: pre-wrap;">
									{@html `${$name}`.charAt(0).toUpperCase() +
										`${$name}`.slice(1).replace(' ', '<br>')}
								</p>
							</li>
						</div>
					</ul>
				</nav>
			</div>

			<br />
			<br />
			<div id="home_parent">
				<div id="home">
					<br />
					<img
						class="img1"
						src="/trophy img_prev_ui.png"
						alt="trophy_img"
						width="200"
						height="200"
					/>
					<img class="img2" src="/fireworks.png" alt="trophy_img" width="200" height="200" />
					<br />

					<h2>Welcome</h2>
					<blockquote>
						Welcome to the Ehub's Dashboard. This dashboard is meant to be a central point where all
						members of Ehub can comfortably visit to get the lates updates on
					</blockquote>
					<br />
					<ul>
						<a href="/Projects">
							<li>Projects</li>
						</a>
						<a href="/Dashboard">
							<li>Dashboard</li>
						</a>
						<a href="/Account/{`${$name.replace(' ', '-')}`}">
							<li>Account</li>
						</a>
					</ul>
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<Footer />
		</div>
	{/if}
</body>

<style>
	* {
		border: 0;
		margin: 0;
		padding: 0;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}

	#main-content {
		margin-left: 300px;
		width: auto;
		background-color: whitesmoke;
		height: 100%;
	}
	nav {
		text-align: right;
	}
	.nav-list {
		padding: 15px;
	}

	nav li {
		padding: 20px;
		list-style: none;
	}

	#sidebar li {
		padding: 20px;
		margin-top: 50px;
		font-size: 2rem;
		color: azure;
	}
	.img1 {
		position: absolute;
		z-index: 2;
	}
	.img2 {
		z-index: 1;
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
	#home {
		border-radius: 20px;
		text-align: center;
		align-content: center;
		align-items: center;
	}

	#home a {
		text-decoration: none;
		color: black;
		padding: 10px;
	}

	#home ul li {
		list-style-type: none;
		border: 2px solid gray;
		padding: 20px;
	}

	#home ul li:hover {
		background-color: black;
		color: white;
		transition: 1s;
	}

	#home_parent {
		padding: 30px;
	}
	#home h2 {
		font-family: cursive;
		font-size: 4rem;
		text-align: center;
	}
</style>
