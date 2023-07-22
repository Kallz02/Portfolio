<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script lang="ts">
	export let data;

	const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } = data.meta;
	const { PostContent } = data;

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

<article class="post flex  mx-2 flex-col md:mx-auto max-w-[10201px]">
	<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
	
	
	<img
		class="cover-image rounded-md mt-5 md:mt-16 border-[0.15rem] border-black mb-5 md:mb-10 w-[1000px]"
		src={coverImage}
		alt=""
		style="aspect-ratio: {coverWidth} / {coverHeight};"
	
	/>
	<h1 class="text-4xl  md:text-5xl text-left mx-2  ">{title}</h1>

	<div class="flex flex-col mt-4 md:mt-12 items-start justify-between w-full mx-2 md:flex-row md:items-center dark:text-gray-400">
		<div class="flex items-center space-x-3">
			<img loading="lazy" src="/profile.jpg" alt="profile" class="w-10 h-10 border border-black rounded-full dark:bg-gray-500 dark:border-gray-700">
			<p class="text-lg ">Akshay Kalathil • {updated} </p>
			<p class="flex-shrink-0 mt-3 text-lg md:mt-0"></p>
		</div>
		<!-- <p class="flex-shrink-0 mt-3 text-lg md:mt-0">4 min read • 1,570 views</p> -->
		<button>

		</button>
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

	<div class="mx-2 blog mt-4 ">
	<svelte:component this={PostContent}  />
</div>


	{#if categories}
		<aside class=" mx-2 my-8">
			<h2 class="text-lg text-medium ">Posted in:</h2>
			<ul class="flex mt-4 text-sm  ">

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

	.cover-image{
		box-shadow: 0.3rem 0.3rem 0 hsl(var(--shadowColor) / 1);
	}

	

</style>