<script lang="ts">
	import '../app.css';
	import Header from '../lib/component/Header/Header.svelte';
	import Footer from '../lib/component/Footer/Footer.svelte';
	import { currentPage, isMenuOpen } from '$lib/assets/js/store';
	import { navItems } from '$lib/config';
	import { preloadCode } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	export let data;

	import { afterUpdate } from 'svelte';
	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };

	/**
	 * Updates the global store with the current path. (Used for highlighting
	 * the current page in the nav, but could be useful for other purposes.)
	 **/
	$: currentPage.set(data.path);

	/**
	 * This pre-fetches all top-level routes on the site in the background for faster loading.
	 * https://kit.svelte.dev/docs/modules#$app-navigation-preloaddata
	 *
	 * Any route added in src/lib/config.js will be preloaded automatically. You can add your
	 * own preloadData() calls here, too.
	 **/

	onMount(() => {
		const navRoutes = navItems.map((item) => item.route);
		preloadCode(...navRoutes);
	});

	let hiddenElements: NodeListOf<Element>;

	afterUpdate(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('show');
					} else {
						entry.target.classList.remove('show');
					}
				});
			},
			{ threshold: 0.1, root: null }
		);

		hiddenElements = document.querySelectorAll('.hidden1');
		hiddenElements.forEach((ele) => observer.observe(ele));
	});
</script>

<div class="h-full">
	<Header />
	{#key data.path}
		<main id="main" tabindex="-1" in:fade={transitionIn} out:fade={transitionOut}>
			<slot />
		</main>
	{/key}
</div>
<Footer />
