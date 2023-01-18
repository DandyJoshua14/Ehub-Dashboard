<script>
	import { onMount } from 'svelte';
	import Sidebar from '../../../components/Sidebar/+page.svelte';
	import Footer from '../../../components/Footer/+page.svelte';
	import { name, dateOfBirth, about, userGender } from '../../../stores/stores';
	import { Container, Input, Form, FormGroup, Label, Icon, Button } from 'sveltestrap';
	import { Server } from '@sveltejs/kit';
	let gender = '';
	let DOB = '';
	let aboutUser = '';
	let user = $name.replace('-', ' ');
	let editAcc = false;
	async function getName() {
		$name = prompt(
			"What's Your Name?. Please Ensure to space your names and begin each name with an upper case alphabet"
		);
	}
	onMount(() => {
		getName();
	});
	/** @type {import('./$types').PageData} */
	export let data;
	$name = data.name;
	async function editAccess() {
		editAcc = true;
	}
	async function submitBtn() {
		fetch('../../api/createUser/server.js', {
			method: 'POST'
		});
		editAcc = false;
		console.log(`${gender}`, `${DOB}`);
		data.name = user;
		$name = user;
		$userGender = gender;
		$about = aboutUser;
		$dateOfBirth = DOB;
	}
</script>

<svelte:head>
	{#if editAcc === false}<title>Account Settings</title>{:else}<title>Edit Account</title
		>{/if}</svelte:head
>

<body>
	<Sidebar />
	<div class="main-content">
		<br />
		<br />
		<br />
		<img src="/male-avatar.png" alt="avatar" />
		<br />
		<br />
		<br />
		<b><h1>{`${$name.replace('-', ' ')}`}</h1></b>
		<br />
		<br />
		<Container>
			{#if editAcc === false}
				<div class="acc-details">
					<h3>Account details</h3>
					<br /><br />
					<p style="text-align: right;">
						<Button color="primary" outline on:click={editAccess}
							>&nbsp;&nbsp; Edit &nbsp;&nbsp;</Button
						>
						<Icon name="pencil-fill" />
						<br /><br />
					</p>
					<Form>
						<FormGroup>
							<Label for="name">Name</Label>
							<Input type="text" id="name" disabled value={`${user}`} />
						</FormGroup>
						<FormGroup>
							<Label for="exampleDate">Date</Label>
							<Input type="date" name="date" id="exampleDate" disabled value={`${$dateOfBirth}`} />
						</FormGroup>
						<FormGroup>
							<Label for="exampleSelect">Gender</Label>
							<Input
								type="text"
								name="select"
								id="exampleSelect"
								disabled
								value={`${$userGender}`}
							/>
						</FormGroup>
						<FormGroup>
							<Label for="exampleText">Bio</Label>
							<Input type="textarea" name="text" disabled id="exampleText" value={`${$about}`} />
						</FormGroup>
					</Form>
					<br />
				</div>
			{:else}
				<div class="acc-details">
					<h3>Edit Account details</h3>
					<br />
					<br />
					<br />
					<br />
					<Form on:submit={submitBtn}>
						<FormGroup>
							<Label for="name">Name</Label>
							<Input
								type="text"
								id="name"
								placeholder={`${$name.replace('-', ' ')}`}
								bind:value={user}
							/>
						</FormGroup>
						<FormGroup>
							<Label for="exampleDate">Date</Label>
							<Input
								type="date"
								name="date"
								id="exampleDate"
								placeholder="date placeholder"
								bind:value={DOB}
							/>
						</FormGroup>
						<FormGroup>
							<Label for="exampleSelect">Gender</Label>
							<Input type="select" name="select" id="exampleSelect" bind:value={gender}>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</Input>
						</FormGroup>
						<FormGroup>
							<Label for="exampleText">Bio</Label>
							<Input type="textarea" name="text" id="exampleText" bind:value={aboutUser} />
						</FormGroup>
						<Button color="success" block outline>Submit</Button>
					</Form>
					<br />
				</div>
			{/if}
			<!-- <marquee direction="right">Hi</marquee> -->
		</Container>
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
	</div>
	<Footer />
</body>

<style>
	* {
		margin: 0;
		padding: 0;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}
	.main-content {
		margin-left: 300px;
		background-color: whitesmoke;
		height: 100%;
		width: auto;
		transition: 1s;
		text-align: center;
	}
	.main-content img {
		border-radius: 100%;
		width: 140px;
		height: 130px;
	}
	h1 {
		text-align: center;
	}
	.acc-details {
		padding: 100px;
	}
</style>
