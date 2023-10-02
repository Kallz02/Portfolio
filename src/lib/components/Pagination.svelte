<script lang="ts">
	import { postsPerPage } from '$lib/config';

	export let currentPage: number;
	export let totalPosts: number;
	export let path = '/blog/page';

	let pagesAvailable: number;
	$: pagesAvailable = Math.ceil(totalPosts / postsPerPage);

	const isCurrentPage = (page: any) => page == currentPage;
</script>

<!-- For some reason, the pagination wasn't re-rendering properly during navigation without the #key block -->
{#key currentPage}
	{#if pagesAvailable > 1}
		<nav aria-label="Pagination navigation" class="pagination my-3 mx-auto">
			<ul class="flex text-foreground justiify-center">
				{#each Array.from({ length: pagesAvailable }, (_, i) => i + 1) as page}
					<li class="border-2 text-center rounded-md w-8 mr-2">
						<a href="{path}/{page}" aria-current={isCurrentPage(page)}>
							<!-- <span class="sr-only">
								{#if isCurrentPage(page)}
									Current page:
								{:else}
									Go to page
								{/if}
							</span> -->
							{page}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
{/key}
