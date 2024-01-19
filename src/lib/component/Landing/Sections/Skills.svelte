<script lang="ts">
	// Object containing data for each skill category
	let skills = [
		{
			title: 'FrontEnd',
			items: ['NextJs', 'React', 'TypeScript', 'Angular', 'SvelteKit']
		},
		{
			title: 'Backend',
			items: ['Nodejs', 'Django', 'Postgres', 'MySQL', 'MongoDB', 'Servlet', 'JSP']
		},
		{
			title: 'Programing & Scripting',
			items: ['Java', 'C/C++', 'Python', 'JavaScript', 'Bash', 'Markdown']
		},
		{
			title: 'Machine Learning',
			items: ['Python', 'Scikit-learn', 'Numpy', 'Pandas']
		},
		{
			title: 'Android',
			items: ['Android Studio', 'Kotlin', 'Java', 'Jetpack Compose', 'XML']
		},
		{
			title: 'Tools & Tech',
			items: ['Linux', 'AWS', 'Azure', 'Git & Github', 'Docker', 'Kubernetes', 'Scrapy']
		}
	];

	function getBadgeClass(word: string) {
		switch (word) {
			case 'React':
				return 'bg-gray-100 text-gray-800 border-gray-800 border ';

			case 'Java':
				return 'bg-red-100 text-red-800 border-red-800 border ';
			case 'Angular':
				return 'bg-red-100 text-red-800 border-red-800 border ';
			case 'Javascript':
				return 'bg-yellow-100 text-yellow-800 border-yellow-800 border ';
			case 'Python':
				return 'bg-yellow-100 text-yellow-800 border-yellow-800 border ';
			case 'Android':
				return 'bg-green-100 text-green-800 border-green-800 border ';
			case 'React':
				return 'bg-blue-100 text-blue-800 	border-blue-800 border ';

			case 'TypeScript':
				return 'bg-blue-100 text-blue-800 	border-blue-800 border ';
			case 'NodeJS':
				return 'bg-indigo-100 text-indigo-800 border-indigo-800 border ';
			case '.Net':
				return 'bg-purple-100 text-purple-800 border-purple-800 border ';

			case 'sveltekit':
				return 'bg-orange-100 text-orange-800 border-orange-800 border ';
			case 'AI':
				return 'bg-white/[.1] text-gray-600 dark:text-gray-400 border-gray-800 border ';
			default:
				return 'bg-gray-100 text-gray-800 border-gray-800 border';
		}
	}
</script>

<div class="pg2 section" id="skill">
	<h1 class="text-foreground" id="skills">
		<center>Tech</center>
	</h1>
	<div class="skills">
		{#each skills as skill}
			<div class="skill bg-custom-background text-foreground hidden1">
				<div class="">
					<h2 class="bg-muted py-3 border border-b-[0.3rem] border-black border-x-0 border-t-0">
						{skill.title}
					</h2>
					<ul class="justify-around flex-wrap flex">
						<ul class="flex flex-wrap justify-around max-w-[20rem] mx-auto gap-3 pb-5">
							{#each skill.items as item}
								<li class="">
									<!-- <span
										class="inline-flex items-center mr-3 gap-1.5 py-1 px-3 rounded-full font-medium {getBadgeClass(
											item
										)}"
									> -->
									{item}
									<!-- </span> -->
								</li>
							{/each}
						</ul>
					</ul>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.section {
		padding: 0 1rem;
		width: 100%;

		min-height: calc(100vh - 4.4rem);

		scroll-snap-align: start;
		scroll-snap-stop: always;
		scroll-margin-top: 5rem;
	}

	#skills {
		font-size: 3rem;
	}

	.skills {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 2rem;
		padding: 1rem;
	}

	.skill {
		/* background: hsl(191, 35%, 90%); */
		/* background: whitesmoke; */
		border: 0.3rem solid #000;

		box-shadow: 0.3rem 0.3rem 0 hsl(var(--shadowColor) / 1);
		border-radius: 10px;
		/* padding: 10px 20px; */
		width: 550px;
		text-align: center;
		/* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
	}

	.skill h2 {
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;
		font-size: 2.5rem;
		font-weight: 500;
	}

	.skill li {
		margin-top: 0.5rem;
		font-size: 1.5rem;
		font-weight: 300;
	}

	@media only screen and (max-width: 550px) {
		.skill {
			max-width: 400px;
		}

		.skill h2 {
			font-size: 2rem;
		}
	}
</style>
