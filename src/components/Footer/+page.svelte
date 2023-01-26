<script>
	import { name } from '../../stores/stores';
	import { Input, Button } from 'sveltestrap';
	async function submitQuery() {}
</script>

<body>
	<div class="footer">
		<div class="footer-nav" />

		<div class="footer-nav">
			<b>
				<ul>
					<a href="/"><li>Home</li></a>
					<a href="/Projects"><li>Account</li></a>
					<a href="/Account"><li>Home</li></a>
					<a href="/Chats"><li>Home</li></a>
				</ul>
			</b>
		</div>
		<div class="footer-nav" />
		<div class="footer-nav">
			<b>
				<h2>Support</h2>
			</b>
			<blockquote>
				If you have any issues and would like to contact any of the admins on help with your account
				or any other information<br /> kindly put down your complaint in the text area below and hit
				the send button. Once your complaint has been recieved you will recieve and email.
				<br /><br />
				<form on:submit|preventDefault={submitQuery}>
					<Input
						type="textarea"
						placeholder="Send Message"
						style="width: 686px; height: 125px; border-radius: 5px"
					/><br /><br />
					<Button color="primary">Submit</Button>
					<br />
					<br />
				</form>
			</blockquote>
		</div>
		<div class="footer-nav" />
		<div class="footer-nav" />
	</div>
</body>

<style>
	* {
		margin: 0;
		padding: 0;
		overflow: hidden;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}
	.footer {
		color: white;
		margin-left: auto;
		height: fit-content;
		background-color: #262627;
		display: flex;
		justify-content: space-between;
	}
	.footer-nav {
		padding: 5px;
	}
	.footer-nav li {
		padding: 5px;
		list-style-type: none;
	}
	a {
		text-decoration: none;
		color: white;
	}
</style>
