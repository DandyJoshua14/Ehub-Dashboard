<script>
	import { name } from '../../stores/stores';
</script>

<div id="sidebar">
	<center>
		<a href="/">
			<img
				src="/Ehub New B.png"
				width="150px"
				height="150px"
				alt="avatar"
				style="border-radius: 100%; padding: 20px;"
			/></a
		><br />
	</center>
	<a href="/Dashboard"><li>Dashboard</li></a>
	<a href="/Projects"><li>Projects</li></a>
	<a href="/Chats"><li>Chats</li></a>
	<a href="/Account/{$name.replace(' ', '-')}"><li>Account</li></a>
	<p style="color: gray;text-align: center;padding: 60px">&copy Copyright of Ehub 2022</p>
</div>

<style>
	* {
		border: 0;
		margin: 0;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}
	#sidebar {
		position: fixed;
		display: block;
		z-index: 1000;
		height: 100vh;
		/* background-image: linear-gradient(royalblue, skyblue, royalblue); */
		background-color: #282c34;
		width: 300px;
	}
	@media screen and (max-width: 700px) {
		#sidebar {
			width: 100%;
			height: auto;
			position: relative;
		}
		#sidebar a {
			float: left;
		}
	}

	@media screen and (max-width: 400px) {
		#sidebar a {
			text-align: center;
			float: none;
		}
	}
	#sidebar li {
		padding: 20px;
		margin-top: 50px;
		font-size: 2rem;
		color: azure;
		list-style-type: none;
	}
	#sidebar li:hover {
		background-color: black;
		color: white;
		transition: 1s;
	}
	a {
		text-decoration: none;
	}
</style>
