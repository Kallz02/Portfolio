<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
	export let data;

	const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } =
		data.meta;
	const { PostContent } = data;
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
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>

<article class="post flex mx-4 flex-col md:mx-auto max-w-[60rem]">
	<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
	
	<h1 class="text-4xl  md:text-6xl text-center my-10">{title}</h1>
	
	<img
		class="cover-image rounded-md w-[1000px]"
		src={coverImage}
		alt=""
		style="aspect-ratio: {coverWidth} / {coverHeight};"
	/>



	<div class="meta">
		<b>Published:</b>
		{date}
		<br />
		<b>Updated:</b>
		{updated}
	</div>

	<svelte:component this={PostContent} />

	{#if categories}
		<aside class=" my-8">
			<h2 class="text-lg text-medium ">Posted in:</h2>
			<ul class="flex mt-4 text-md  ">
				{#each categories as category}
					<li>
						<a class=" mr-4 py-2 px-3 bg-gray-300 border border-gray-500 rounded-full" href="/blog/category/{category}/">
							{category}
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}
</article>
