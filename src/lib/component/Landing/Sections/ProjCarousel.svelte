<script lang="ts">
	import insta from '$lib/pics/pro/fin2.webp';
	import arch from '$lib/pics/pro/tune.webp';
	import websock from '$lib/pics/pro/fin1.webp';
	import instadroid from '$lib/pics/pro/zeal.webp';
	import port from '$lib/pics/pro/lej1.webp';
	import { lazyLoad } from '$lib/assets/js/lazyLoad';
	let projects = [
		{
			image: insta,
			title: 'Fintract Global',
			description: 'NextJS | Django | NodeJS | MongoDB',
			img: '/exp/fg.jpg',
			link: 'https://fintractglobal.com/openBanking'
		},
		{
			image: arch,
			title: 'Tuning Thoughts',
			description: 'React | NodeJS',
			img: '/exp/fg.jpg',
			link: 'https://tuning-thoughts.com'
		},
		{
			image: websock,
			title: 'Fintract Global',
			description: 'NextJS | Django | NodeJS | MogoDB',
			img: '/exp/fg.jpg',

			link: 'https://fintractglobal.com'
		},
		{
			image: instadroid,
			title: 'Zealyug',
			description: 'MongoDB | React | Redux | NodeJS',
			img: '/exp/zeal.jpeg',

			link: 'https://zealyug.com'
		},
		{
			image: port,
			title: 'Lejhro',
			description: 'NextJS | React | NodeJS',
			img: '/exp/lej.png',

			link: 'https://lejhro.com'
		}
	];
	function getBadgeClass(word: string) {
		switch (word) {
			case 'React':
				return 'bg-blue-100 text-blue-800 border-blue-800 border ';

			case 'Java':
				return 'bg-red-100 text-red-800 border-red-800 border ';
			case 'Angular':
				return 'bg-red-100 text-red-800 border-red-800 border ';
			case 'JavaScript':
				return 'bg-yellow-100 text-yellow-800 border-yellow-800 border ';
			case 'Python':
				return 'bg-yellow-100 text-yellow-800 border-yellow-800 border ';
			case 'Django':
				return 'bg-yellow-100 text-yellow-800 border-yellow-800 border ';
			case 'Android':
				return 'bg-green-100 text-green-800 border-green-800 border ';
			case 'MongoDB':
				return 'bg-green-100 text-green-800 border-green-800 border ';
			case 'TypeScript':
				return 'bg-blue-100 text-blue-800 border-blue-800 border ';
			case 'NodeJS':
				return 'bg-indigo-100 text-indigo-800 border-indigo-800 border ';
			case '.Net':
				return 'bg-purple-100 text-purple-800 border-purple-800 border ';
			case 'Redux':
				return 'bg-purple-100 text-purple-800 border-purple-800 border ';
			case 'Bash':
				return 'bg-black-100 text-black-800 border-black border ';
			case 'Arch Linux':
				return 'bg-blue-100 text-blue-800 border-blue-800 border ';
			case 'SvelteKit':
				return 'bg-orange-100 text-orange-800 border-orange-800 border ';
			case 'AI':
				return 'bg-white/[.1] text-gray-600 dark:text-gray-400 border-gray-800 border ';
			default:
				return 'bg-gray-100 text-gray-800 border-gray-800 border';
		}
	}
</script>

<div class=" overflow-hidden relative bg-[hsla(191, 35%, 85%);]">
	<!-- <div class=" overflow-hidden relative bg-[hsla(191, 35%, 85%);] dark:bg-[#1A282D]"> -->
	<div class="flex projcar w-[1750px] animate-marquee overflow-x-clip gap-[2rem]">
		{#each projects as project}
			<a href={project.link} target="_blank" class="cta">
				<img width="350" class="aspect-video" use:lazyLoad={project.image} alt="ProjectImage" />
				<!-- <div class="cta__text-column dark:text-[#f2f2f2]"> -->

				<div class="text-foreground cta__text-column">
					<div class="flex items-center">
						<!-- <img
					src={project.img}
					alt=""
					loading="lazy"
					class="my-2 ml-2 rounded-full border-2 border-black w-[35px] h-[35px]"
				/>	 -->
						<h2 class="px-2">{project.title}</h2>
					</div>
					<p class="pb-2 pl-2">
						{#each project.description.split(' | ') as word}
							<span
								class="
					inline-flex items-center gap-1.5 py-1 mr-1 px-2 rounded-full text-xs font-medium
					{getBadgeClass(word)}
				  ">{word}</span
							>
						{/each}
					</p>
				</div>
			</a>
		{/each}
	</div>

	<div class="flex absolute top-0 projcar w-[1750px] animate-marquee2 overflow-x-clip gap-[2rem]">
		{#each projects as project}
			<a href={project.link} target="_blank" class="cta">
				<figure>
					<img
						width="350"
						class="aspect-video"
						loading="eager"
						src={project.image}
						alt="ProjectImage"
					/>
					<!-- <div class="cta__text-column dark:text-[#f2f2f2]"> -->
				</figure>
				<div class="text-foreground cta__text-column">
					<h2 class="px-2">{project.title}</h2>
					<p class="pb-2 pl-2">
						{#each project.description.split(' | ') as word}
							<span
								class="
					inline-flex items-center gap-1.5 py-1 mr-1 px-2 rounded-full text-xs font-medium
					{getBadgeClass(word)}
				  ">{word}</span
							>
						{/each}
					</p>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.projcar {
		min-height: 16rem;
		padding-bottom: 0.4rem;
		padding-top: 0.4rem;
	}

	.cta h2 {
		margin: 0;
		font-size: 1.5rem;
		font-weight: 500;
	}

	@media (min-width<=1111px) {
		.cta h2 {
			font-size: 1.8rem;
		}
	}

	.lala {
		opacity: 0;
		transition: all 0.5s ease;
	}

	.cta {
		display: flex;
		flex-wrap: wrap;
		width: 20rem;
		box-shadow: 0.3rem 0.3rem 0 hsl(var(--shadowColor) / 1);
		border-radius: 0.8rem;
		overflow: hidden;
		border: 0.3rem solid;
		/* animation: slide 15s linear infinite; */
	}

	.cta__text-column {
		/* flex: 1 0 50%; */
		/* position: absolute;
		bottom: 0.3rem;
		width: 19.5rem; */
		border-top: 0.3rem solid;
		border-color: black;
		width: 100%;
		/* background: hsla(191, 35%, 90%); */
		/* background: whitesmoke; */
		/* backdrop-filter: blur(8px); */
	}
</style>
