<script lang="ts">
	export let posts: any = [];

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

<ul class="posts-list mx-2 md:ml-[12rem] flex flex-col  items-start">
	{#each posts as post}
		<li class="my-5 max-w-[100rem]">
			<article>
				<a href="/blog/{post.slug}" class="flex flex-wrap justify-start gap-5">
					<img
						src={post.coverImage}
						alt=""
						style="ratio: {post.coverWidth} / {post.coverHeight}"
						class="w-[500px] border-2 rounded-md border-black"
						loading="lazy"
					/>
					<div class="max-w-[30rem] 2xl:max-w-[50rem] md:mt-6 px-2 md:px-3">
						<h2 class=" text-[2rem] leading-[2.2rem] md:text-[2.6rem] md:leading-[3rem]">
							{post.title}
						</h2>
						<h3 class=" my-1 md:my-4">
							{#each post.categories as word}
								<span
									class="
					inline-flex items-center mr-1 gap-1.5 py-1 px-2 rounded-full text-xs font-medium
					{getBadgeClass(word)}
				  ">{word}</span
								>
							{/each}
						</h3>
						<p class="mt-2 text-[1.2rem]">{post.excerpt}</p>
					</div>
				</a>
			</article>
		</li>
	{/each}
</ul>

<style>
	img {
		box-shadow: 0.45rem 0.45rem 0 hsl(var(--shadowColor) / 1);
	}
</style>
