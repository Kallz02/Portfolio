<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script lang="ts">
	export let data;
	import Copy from '$lib/components/Copy.svelte';
	import { lazyLoad } from '$lib/assets/js/lazyLoad.js';
	const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } =
		data.meta;
	const Posts = data.PostContent;
	const len = data.length1;

	const wordsPerMinute = 200; // Adjust the reading speed as needed

	// Calculate the minutes to read the blog post
	let minutesToRead = Math.max(Math.ceil(len / (wordsPerMinute * 60)), 1);

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

<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<meta property="og:image" content={coverImage} />
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<meta name="twitter:image" content={coverImage} />
</svelte:head>

<article class="flex flex-col mx-2 md:mx-auto post max-w-[1020px]">
	<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->

	<figure>
		<img
			class="mt-4 mb-5 rounded-md border-black md:mt-6 md:mb-10 cover-image border-[0.2rem] w-[1000px]"
			use:lazyLoad={coverImage}
			alt={title}
			style="box-shadow: 0.3rem 0.3rem 0 hsl(var(--shadowColor) / 1);"
		/>
	</figure>
	<h1 class="mx-2 text-4xl text-foreground text-left md:text-6xl">{title}</h1>

	<div
		class="flex flex-col justify-between items-start mx-2 mt-4 w-full md:flex-row md:items-center md:mt-6 dark:text-gray-400"
	>
		<div class="flex items-center space-x-3">
			<img
				loading="lazy"
				src="/profile.jpg"
				alt="profile"
				class="w-10 h-10 rounded-full border border-black dark:bg-gray-500 dark:border-gray-700"
			/>
			<p class="md:text-lg text-md">
				Akshay Kalathil • {updated} • {minutesToRead} min{minutesToRead !== 1 ? 's' : ''}
			</p>
			<p class="flex-shrink-0 mt-3 text-lg md:mt-0" />
		</div>
		<!-- <p class="flex-shrink-0 mt-3 text-lg md:mt-0">4 min read • 1,570 views</p> -->
		<button />
	</div>

	<!-- {#each categories as category}
			<span
				class="inline-flex items-center mr-1 gap-1.5 py-1 px-2 rounded-full text-xs font-medium {getBadgeClass(category)}"
			>
				{category}
			</span>
		{/each} -->

	<!-- <div class="mx-2">
		<b>Published:</b>
		{date}
		<br /
		<b>Updated:</b>
		{updated}
	</div> -->

	<div class="relative mx-2 mt-4 blog">
		<Copy>
			<Posts />
		</Copy>
	</div>

	{#if categories}
		<aside class="my-8 mx-2">
			<h2 class="text-lg text-foreground text-bold">Posted in:</h2>
			<ul class="flex mt-4 text-sm">
				{#each categories as category}
					<li>
						<span
							class="inline-flex items-center mr-3 gap-1.5 py-1 px-2 rounded-full text-xs font-medium {getBadgeClass(category)}">
							<a class="" href="/blog/category/{category}/">
								{category}
							</a>
						</span>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}
</article>

<style>
	.cover-image {
		box-shadow: 0.3rem 0.3rem 0 hsl(var(--shadowColor) / 1);
		opacity: 0;
		transition: all 0.5s ease;
	}
</style>

