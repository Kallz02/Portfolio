<div class="pg2 section" id="skill">
	<h1 id="skills">
		<center>Skills</center>
	</h1>
	<div class="skills">
		<div class="skill hidden1">
			<h2>FrontEnd</h2>
			<ul>
				<li>HTML</li>
				<li>CSS</li>
				<li>JavaScript</li>
				<li>Angular</li>
				<li>React</li>
				<li />
			</ul>
		</div>

		<div class="skill hidden1">
			<h2>Backend</h2>
			<ul>
				<li>Nodejs</li>
				<li>Flask</li>
				<li>Servlet</li>
				<li>JSP</li>
			</ul>
		</div>
		<div class="skill hidden1">
			<h2>Programing & Scripting</h2>
			<ul>
				<li>Java</li>
				<li>C</li>
				<li>Python</li>
				<li>JavaScript</li>
				<li>bash</li>
				<li>Markdown</li>
			</ul>
		</div>
		<div class="skill hidden1">
			<h2>Machine Learning</h2>
			<ul>
				<li>Python</li>
				<li>Scikit-learn</li>
				<li>Numpy</li>
				<li>Pandas</li>
			</ul>
		</div>
		<div class="skill hidden1">
			<h2>Android</h2>
			<ul>
				<li>Android Studio</li>
				<li>Java</li>
				<li>XML</li>
			</ul>
		</div>
		<div class="skill hidden1">
			<h2>Tools & Tech</h2>
			<ul>
				<li>Linux</li>
				<li>Cloud</li>
				<li>Scrapy</li>
				<li>Git & Github</li>
				<li>Docker</li>
			</ul>
		</div>
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
		background: hsl(191, 35%, 90%);
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

	.skill ul {
		margin-bottom: 0.5rem;
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
