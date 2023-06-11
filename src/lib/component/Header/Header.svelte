<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const handleClick = () => {
			const checkbox = document.getElementById('nav-menu') as HTMLInputElement;
			checkbox.checked = false;
		};

		const navLinks = document.querySelectorAll('.nav li a') as NodeListOf<HTMLAnchorElement>;

		navLinks.forEach((link) => {
			link.addEventListener('click', handleClick);
		});

		return () => {
			navLinks.forEach((link) => {
				link.removeEventListener('click', handleClick);
			});
		};
	});
</script>

<header>
	<h1 class="logo">Akshay Kalathil</h1>

	<input type="checkbox" id="nav-menu" />
	<ul class="nav">
		<li><a href="#home">Home</a></li>

		<li><a href="#skill">Skills</a></li>
		<li><a href="#proj">Projects</a></li>
		<li><a href="#exp">Experience</a></li>
		<!-- <li><a href="#"> 
  
   <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg> 
                     </a> 
                  </li> -->
	</ul>
	<div class="resume">
		<a
			href="https://drive.google.com/file/d/132yDbr5WAJNLiVacQvRx0S4rXtEm4z2Z/view?usp=share_link"
			target="_blank"
			id="resume">Resume</a
		>
	</div>

	<!--             <div class="dark"> -->
	<!-- <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg> -->

	<!--             </div> -->
	<label for="nav-menu">
		<div class="navmenu">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="28"
				height="28"
				viewBox="0 0 26 26"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-align-right"
			>
				<line x1="21" y1="10" x2="7" y2="10" />
				<line x1="21" y1="6" x2="3" y2="6" />
				<line x1="21" y1="14" x2="3" y2="14" />
				<line x1="21" y1="18" x2="7" y2="18" />
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="black"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-x"
			>
				<line x1="18" y1="6" x2="6" y2="18" />
				<line x1="6" y1="6" x2="18" y2="18" />
			</svg>
		</div>
	</label>
</header>

<style>
	header {
		display: flex;
		padding: 1rem 1rem;
		/* padding-top: 1rem; */

		justify-content: flex-end;
		align-items: center;
		min-height: 3rem;
		background-color: rgba(white, 0.7);
		backdrop-filter: blur(6px);
		border-bottom: solid 0.2rem black;
		/* position: fixed;
    top: 0; 
    width: 100%; */
		position: sticky;
		top: 0;
		z-index: 15;
	}

	.logo {
		font-size: 2rem;
		margin-right: auto;
		font-weight: 400;
	}

	.nav {
		display: flex;
		height: 100%;
	}

	.nav a {
		font-size: 1.5rem;
		margin-left: 1rem;
		padding: 1rem;
		font-weight: 400;
	}

	.nav li {
		transition: all 0.5s;
	}

	.nav li:hover {
		z-index: 2;

		transform: scale(1.2);
	}

	#nav-menu {
		display: none;
	}

	.resume {
		background-color: black;
		padding: 0.4rem 0.8rem;
		border-radius: 50px;
		margin-left: 1rem;
		transition: all 0.5s;

		box-shadow: 0.2rem 0.2rem 0 hsl(var(--shadowColor));
	}

	.resume:hover {
		z-index: 2;

		transform: scale(1.2);
	}

	#resume {
		font-size: 1.2rem;
		color: whitesmoke;
	}
	.feather-align-right {
		display: none;

		transition: all 1s;
	}

	.feather-x {
		display: none;
		transition: all 1s;
	}

	@media only screen and (max-width: 1111px) {
		.feather-align-right {
			display: block;
			margin-left: 0.8rem;
		}

		.nav {
			display: flex;
			flex-direction: column;
			position: fixed;
			top: 0;
			left: 0;
			z-index: -1;
			width: 100%;
			height: 100vh;
			font-size: 5rem;
			background-color: var(--main);
			align-items: center;
			padding-top: 20%;
			gap: 3rem;
			overflow-y: scroll;

			transition: all 0.5s ease-in;
			transform: translateY(-120%);
		}

		input[type='checkbox']:checked ~ .nav {
			transform: translateY(0%);
		}

		input[type='checkbox']:checked ~ label .navmenu .feather-x {
			transform: rotate(180deg);
			transition: all 0.5s;
			display: block;
			margin-left: 0.8rem;
		}

		input[type='checkbox']:checked ~ label .navmenu .feather-align-right {
			display: none;
		}

		.nav:target {
			transform: translateY(0);
		}

		.nav a {
			font-size: 2rem;
			color: var(--sec);
		}

		.nav li {
			transition: all 1s;
		}

		.nav li:hover {
			transform: scale(1.5);
		}
	}

	@media only screen and (max-width: 550px) {
		.logo {
			font-size: 1.5rem;
		}
	}
</style>
