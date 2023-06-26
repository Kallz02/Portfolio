<script lang="ts">
	export let posts: any = [];
</script>

<ul class="posts-list">
	{#each posts as post}
		<li class="my-5">
			<article>
				<a href="/blog/{post.slug}" class="flex flex-wrap justify-center">
					<img
						src={post.coverImage}
						alt=""
						style="ratio: {post.coverWidth} / {post.coverHeight}"
						class="w-[500px] border border-black"
					/>
					<div class="">
						<h2>
							{post.title}
						</h2>
						<h3>{post.categories}</h3>
						<p>{post.excerpt}</p>
					</div>
				</a>
			</article>
		</li>
	{/each}
</ul>
