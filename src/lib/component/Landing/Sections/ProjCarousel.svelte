<script lang="ts">
	import insta from '$lib/pics/instaReact-min.png';
	import arch from '$lib/pics/arch.webp';
	import websock from '$lib/pics/websock-min.webp';
	import instadroid from '$lib/pics/instadroid-min.webp';
	import port from '$lib/pics/port.webp';
	import { Image } from "@unpic/svelte";
	let projects = [
		{
			image: insta,
			title: 'InstafakeDetectAPI',
			description: 'React | Angular | Android | Python'
		},
		{
			image: arch,
			title: 'AchLinuxScripts',
			description: 'Bash | Arch Linux'
		},
		{
			image: websock,
			title: 'InstafakeDetectAPI',
			description: 'NodeJS | JavaScript'
		},
		{
			image: instadroid,
			title: 'InstafakeDetectAPI',
			description: 'Android | Python | Java | AI'
		},
		{
			image: port,
			title: 'Akshayk.dev',
			description: 'SvelteKit | TailwindCSS | TypeScript'
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
			case 'JavaScript':
				return 'bg-yellow-100 text-yellow-800 border-yellow-800 border ';
			case 'Python':
				return 'bg-yellow-100 text-yellow-800 border-yellow-800 border ';
			case 'Android':
				return 'bg-green-100 text-green-800 border-green-800 border ';
			case 'React':
				return 'bg-blue-100 text-blue-800 border-blue-800 border ';
			case 'TypeScript':
				return 'bg-blue-100 text-blue-800 border-blue-800 border ';
			case 'NodeJS':
				return 'bg-indigo-100 text-indigo-800 border-indigo-800 border ';
			case '.Net':
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
	<div class="projcar flex w-[1770px] animate-marquee overflow-x-clip gap-[2rem]">
		{#each projects as project}
			<div class="cta">
				<Image src={project.image} width="800" alt="ProjectImage" />
				<!-- <div class="cta__text-column dark:text-[#f2f2f2]"> -->
				<div class="cta__text-column">
					<h2 class="px-2">{project.title}</h2>
					<p class="pl-2 pb-2">
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
			</div>
		{/each}
	</div>

	<div class="projcar absolute top-0 flex w-[1770px] animate-marquee2 overflow-x-clip gap-[2rem]">
		{#each projects as project}
			<div class="cta">
				<img src={project.image} loading="lazy" alt="ProjectImage" />
				<div class="cta__text-column">
					<h2 class="px-2">{project.title}</h2>
					<p class="pl-2 pb-2">
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
			</div>
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

	.cta img {
		aspect-ratio: 16/9;
		/* object-fit: cover; */
		/* flex: 1 1 300px; */
		width: 350px;
		/* height: 100%; */
		outline: 0.3rem solid;
	}

	.cta__text-column {
		/* flex: 1 0 50%; */
		/* position: absolute;
		bottom: 0.3rem;
		width: 19.5rem; */
		border-top: 0.3rem solid;
		width: 100%;
		/* background: hsla(191, 35%, 90%); */
		background: whitesmoke;
		/* backdrop-filter: blur(8px); */
	}
</style>
