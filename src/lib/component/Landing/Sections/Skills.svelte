<script>
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
  </script>
  
  <div class="pg2 section" id="skill">
	<h1 id="skills">
	  <center>Tech</center>
	</h1>
	<div class="skills">
	  {#each skills as skill}
		<div class="skill hidden1">
		  <h2>{skill.title}</h2>
		  <!-- <ul class="justify-around  flex-wrap flex "> -->
		  <ul class=" ">
			{#each skill.items as item}
			  <li>{item}</li>
			{/each}
		  </ul>
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
		color: var(--sec);
	}

	#skills {
		font-size: 4rem;
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
		background: whitesmoke;
		border: 0.3rem solid #000;

		box-shadow: 0.3rem 0.3rem 0 hsl(var(--shadowColor) / 1);
		border-radius: 10px;
		padding: 10px 20px;
		width: 550px;
		text-align: center;
		/* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
	}

	.skill h2 {
		font-size: 2.5rem;
		font-weight: 500;
	}


	.skill li {
		margin-top: 0.5rem;
		font-size: 1.5rem;
		font-weight: 400;
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
