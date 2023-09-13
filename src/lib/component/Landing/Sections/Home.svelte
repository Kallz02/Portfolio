<script>
	import src1 from '$lib/pics/IMG_4296.jpg';
	import { afterUpdate } from 'svelte';
	import { fly } from 'svelte/transition';

	let show = false;
	afterUpdate(() => {
		show = true;
	});
</script>

<div class="border-none pg1 section" id="home">
	<div
		class="lg:bg-[whitesmoke] dark:bg-[#0f191b] xl:my-8 md:pl-6 2xl:pl-16 lg:border-[0.15rem] border-black 2xl:ml-[4rem] lg:mr-[-0.5rem] xl:mr-[-1rem] rounded-md"
	>
		<div class="main-text pt-[1.5rem] md:py-6 2xl:pt-[4rem] dark:text-[#f2f2f2]">
			{#if show}
				<h1
					transition:fly={{ x: -200, duration: 800 }}
					class="text-[4.5rem] hidden2 2xl:text-[6rem]"
				>
					FullStack
				</h1>

				<h1
					transition:fly={{ x: -200, duration: 800 }}
					class="text-[4.5rem] hidden2 2xl:text-[6rem]"
				>
					Web, <br /> Mobile<br /> Developer
				</h1>
				<p transition:fly={{ x: -200, duration: 1000 }} class="mt-20 hidden2">
					Fullstack dev working mainly with Django, Node and NextJS
				</p>
			{/if}
			<div
				class="hidden fixed left-0 z-50 flex-col gap-8 py-4 px-5 rounded-r-md border-black 2xl:flex hidden1 bg-[whitesmoke] top-[10rem] border-t-[0.15rem] border-b-[0.15rem] border-r-[0.15rem]"
			>
				<a href="https://github.com/Kallz02" target="_blank">
					<img
						id="github"
						alt="github logo"
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg=="
						class="dark:invert dark:brigthness-[80%]"
					/>
				</a>
				<a href="https://www.linkedin.com/in/akshay-kalathil/" target="_blank">
					<img
						alt="linkedin logo"
						id="linkdin"
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tMTEgMTloLTN2LTExaDN2MTF6bS0xLjUtMTIuMjY4Yy0uOTY2IDAtMS43NS0uNzktMS43NS0xLjc2NHMuNzg0LTEuNzY0IDEuNzUtMS43NjQgMS43NS43OSAxLjc1IDEuNzY0LS43ODMgMS43NjQtMS43NSAxLjc2NHptMTMuNSAxMi4yNjhoLTN2LTUuNjA0YzAtMy4zNjgtNC0zLjExMy00IDB2NS42MDRoLTN2LTExaDN2MS43NjVjMS4zOTYtMi41ODYgNy0yLjc3NyA3IDIuNDc2djYuNzU5eiIvPjwvc3ZnPg=="
						class="dark:invert dark:brigthness-[80%]"
					/>
				</a>
				<a href="https://www.instagram.com/_akshay_0_o_k/" target="_blank">
					<img
						id="insta"
						alt="instagram logo"
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMi4xNjNjMy4yMDQgMCAzLjU4NC4wMTIgNC44NS4wNyAzLjI1Mi4xNDggNC43NzEgMS42OTEgNC45MTkgNC45MTkuMDU4IDEuMjY1LjA2OSAxLjY0NS4wNjkgNC44NDkgMCAzLjIwNS0uMDEyIDMuNTg0LS4wNjkgNC44NDktLjE0OSAzLjIyNS0xLjY2NCA0Ljc3MS00LjkxOSA0LjkxOS0xLjI2Ni4wNTgtMS42NDQuMDctNC44NS4wNy0zLjIwNCAwLTMuNTg0LS4wMTItNC44NDktLjA3LTMuMjYtLjE0OS00Ljc3MS0xLjY5OS00LjkxOS00LjkyLS4wNTgtMS4yNjUtLjA3LTEuNjQ0LS4wNy00Ljg0OSAwLTMuMjA0LjAxMy0zLjU4My4wNy00Ljg0OS4xNDktMy4yMjcgMS42NjQtNC43NzEgNC45MTktNC45MTkgMS4yNjYtLjA1NyAxLjY0NS0uMDY5IDQuODQ5LS4wNjl6bTAtMi4xNjNjLTMuMjU5IDAtMy42NjcuMDE0LTQuOTQ3LjA3Mi00LjM1OC4yLTYuNzggMi42MTgtNi45OCA2Ljk4LS4wNTkgMS4yODEtLjA3MyAxLjY4OS0uMDczIDQuOTQ4IDAgMy4yNTkuMDE0IDMuNjY4LjA3MiA0Ljk0OC4yIDQuMzU4IDIuNjE4IDYuNzggNi45OCA2Ljk4IDEuMjgxLjA1OCAxLjY4OS4wNzIgNC45NDguMDcyIDMuMjU5IDAgMy42NjgtLjAxNCA0Ljk0OC0uMDcyIDQuMzU0LS4yIDYuNzgyLTIuNjE4IDYuOTc5LTYuOTguMDU5LTEuMjguMDczLTEuNjg5LjA3My00Ljk0OCAwLTMuMjU5LS4wMTQtMy42NjctLjA3Mi00Ljk0Ny0uMTk2LTQuMzU0LTIuNjE3LTYuNzgtNi45NzktNi45OC0xLjI4MS0uMDU5LTEuNjktLjA3My00Ljk0OS0uMDczem0wIDUuODM4Yy0zLjQwMyAwLTYuMTYyIDIuNzU5LTYuMTYyIDYuMTYyczIuNzU5IDYuMTYzIDYuMTYyIDYuMTYzIDYuMTYyLTIuNzU5IDYuMTYyLTYuMTYzYzAtMy40MDMtMi43NTktNi4xNjItNi4xNjItNi4xNjJ6bTAgMTAuMTYyYy0yLjIwOSAwLTQtMS43OS00LTQgMC0yLjIwOSAxLjc5MS00IDQtNHM0IDEuNzkxIDQgNGMwIDIuMjEtMS43OTEgNC00IDR6bTYuNDA2LTExLjg0NWMtLjc5NiAwLTEuNDQxLjY0NS0xLjQ0MSAxLjQ0cy42NDUgMS40NCAxLjQ0MSAxLjQ0Yy43OTUgMCAxLjQzOS0uNjQ1IDEuNDM5LTEuNDRzLS42NDQtMS40NC0xLjQzOS0xLjQ0eiIvPjwvc3ZnPg=="
						class="dark:invert dark:brigthness-[80%]"
					/>
				</a>
			</div>

			<div
				class="h-[3rem] max-w-[30rem] 3xl:max-w-[45rem] rounded-md hidden 2xl:flex bg-green-50 border-[0.15rem] border-black relative left-[1%] 2xl:top-[3rem] 3xl:top-[4.5rem]"
			>
				<div class="mx-auto mt-1 text-3xl font-light text-center">Professional Work</div>
			</div>
		</div>
	</div>
	<div class="border-black social border-[0.2rem]">
		<img
			src={src1}
			class="h-full dark:brightness-[98%] rounded-sm w-full object-cover"
			alt="MyPhoto"
		/>
	</div>
</div>

<style>
	.section {
		padding: 0 1.5rem;
		width: 100%;

		min-height: calc(100vh - 20.4rem);
		/* min-height: calc(100vh - 4.4rem); */

		scroll-snap-align: start;
		scroll-snap-stop: always;
		scroll-margin-top: 5rem;
		color: var(--sec);
	}

	.pg1 {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
		align-items: stretch;
		/* stretch items to fill container height */
		grid-auto-rows: minmax(calc(50vh - 1rem), auto);
		/* set a minimum height for the grid items */
		min-width: 250px;
	}

	.pg1 .social {
		background-color: powderblue;
		border-radius: 5px;
		justify-self: stretch;
		align-self: stretch;
		margin: 1rem 0;

		box-shadow: 0.4rem 0.4rem 0 hsl(var(--shadowColor) / 1);
	}

	.pg1 .main-text {
		/* align-self: center; */
		font-size: 2rem;
		line-height: 1;
		/* background-color: blue; */
		/* font-weight: 300; */
		justify-self: left;
		/* align-self: center; */
	}

	.main-text p {
		margin-top: 1rem;
		font-size: 1.4rem;
		line-height: normal;
		font-weight: 300;
	}

	/* .socialLinks {
		margin-top: 1rem;
	} */
	/* .socialLinks a img {
		filter: invert(1) brightness(0.8);
	} */

	@media only screen and (max-width: 1111px) {
		.section {
			padding: 0 1rem;
		}

		.pg1 {
			grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
		}

		/* .pg1 {
			color: var(--main);
		} */

		.pg1 .social {
			background-color: powderblue;
			border-radius: 5px;
		}

		.main-text {
			/* align-self: center; */

			justify-self: left;
			font-size: 3.5rem;
			max-width: 80%;

			/* background-color: blue; */
		}
		.main-text p {
			font-size: 1.2rem;
		}
	}

	@media only screen and (max-width: 550px) {
		.pg1 {
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		}
		.main-text p {
			font-size: 1.2rem;
		}
	}
</style>
