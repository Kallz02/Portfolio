<script>
	import insta from '$lib/pics/instaReact-min.png';
	import arch from '$lib/pics/arch.webp';
	import websock from '$lib/pics/websock-min.webp';
	import instang from '$lib/pics/instang-min.png';
	import instadroid from '$lib/pics/instadroid-min.webp';
	import port from '$lib/pics/port.webp';
	// Array of objects containing data for each article
	let articles = [
		{
			imgSrc: insta,
			imgAlt: 'Insta React',
			title: 'InstafakeDetectAPI',
			subtitle: 'BackEnd',
			githubLink: 'https://github.com/Kallz02/InstaFakeDetectAPI',
			liveLink: 'https://instareact.akshayk.dev/',
			desc: 'An  API to detect fake Instagram accounts using ML'
		},
		{
			imgSrc: arch,
			imgAlt: 'Arch Startup',
			title: 'Arch_setup.sh',
			subtitle: 'Arch Dev Environment Script',
			githubLink: 'https://github.com/Kallz02/arch',
			knowMoreLink: 'https://github.com/Kallz02/arch',
			desc: 'A script to setup my arch dev environment'
		},
		{
			imgSrc: websock,
			imgAlt: 'Bluetit',
			title: 'WebsocketBallGame',
			subtitle: 'Game Using WebSockets',
			githubLink: 'https://github.com/Kallz02/',
			liveLink: 'https://wsbg.akshayk.dev/',
			desc: 'A game using websockets'
		},
		{
			imgSrc: port,
			imgAlt: 'Bluetit',
			title: 'Personal Portfolio',
			subtitle: 'Portfolio Website',
			githubLink: 'https://github.com/Kallz02/Portfolio/',
			liveLink: 'https://akshayk.dev/',
			desc: 'My personal portfolio website'
		},
		{
			imgSrc: instang,
			imgAlt: 'Bluetit',
			title: 'InstafakeAngular',
			subtitle: 'Angular Client',
			githubLink: 'https://github.com/Kallz02/InstaAng',
			liveLink: 'https://instang.akshayk.dev/',
			desc: 'An Angular client for InstaFakeDetectAPI'
		},
		{
			imgSrc: instadroid,
			imgAlt: 'Bluetit',
			title: 'InstaDroid',
			subtitle: 'Android Client',
			githubLink: 'https://github.com/Kallz02/InstaDroid',
			demoVideoLink:
				'https://drive.google.com/file/d/1dg4ygBhyaDIAOZvBG0EKrM7pxbre2ZML/view?usp=sharing',
			desc: 'An Android client for InstaFakeDetectAPI'
		}
	];
</script>

<div class="pg3 section" id="proj">
	<h2>
		<center>Projects</center>
	</h2>

	<div class="cont1">
		{#each articles as article}
			<article class="cta hidden1">
				<img src={article.imgSrc} alt={article.imgAlt} loading="lazy" />
				<div class="cta__text-column">
					<h2>{article.title}</h2>
					<h3>{article.subtitle}</h3>
					<h4 class="mt-4 text-lg">{article.desc}</h4>

					<div class="butn">
						<a href={article.githubLink} target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path
									d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
								/>
							</svg>
						</a>
						{#if article.liveLink}
							<a href={article.liveLink} target="_blank">Live</a>
						{/if}
						{#if article.knowMoreLink}
							<a href={article.knowMoreLink} target="_blank">Know more</a>
						{/if}
						{#if article.demoVideoLink}
							<a href={article.demoVideoLink} target="_blank">Demo Video</a>
						{/if}
					</div>
				</div>
			</article>
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

	.pg3 h2 {
		font-size: 4rem;
	}

	.pg3 {
		display: flex;
		flex-direction: column;
	}

	.pg3 .cont1 {
		margin-top: 1rem;
		margin-bottom: 1rem;
		display: flex;
		gap: 2rem;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}

	.cta img {
		display: block;
		width: 100%;
	}

	.cta h2 {
		margin: 0;
		font-size: 2rem;
	}

	.cta .butn {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	@media (min-width<=1111px) {
		.cta h2 {
			font-size: 1.8rem;
		}
	}

	.cta {
		display: flex;
		flex-wrap: wrap;
		/* background: hsl(191, 35%, 90%); */
		background: whitesmoke;
		max-width: 35rem;
		width: 100%;
		box-shadow: 0.65rem 0.65rem 0 hsl(var(--shadowColor) / 1);
		border-radius: 0.8rem;
		overflow: hidden;
		border: 0.3rem solid;
	}

	.cta img {
		aspect-ratio: 16 / 9;
		object-fit: cover;
		flex: 1 1 300px;
		outline: 0.5rem solid;
	}

	.cta__text-column {
		padding: min(1rem, 5vw) min(1rem, 5vw) min(2rem, 5vw);
		flex: 1 0 50%;
	}

	.cta__text-column > * + * {
		margin: 1rem 0;
	}

	/* .cta__text-column li {
		margin-top: 1rem;
	} */

	.cta a {
		display: inline-block;
		color: black;
		padding: 0.5rem 1rem;
		text-decoration: none;
		background: hsl(187 75% 64%);
		border-radius: 0.6rem;
		font-weight: 700;
		border: 0.35rem solid;
	}

	/* .cta li {
		font-size: 1.2rem;
		font-weight: 200;
	}

	.cta li b {
		font-weight: 600;
	} */

	.cta h3 {
		margin-top: 0;
		font-weight: 300;
		font-size: 1.5rem;
	}
</style>
