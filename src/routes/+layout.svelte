<script lang="ts">
	import '../app.css';
	import Header from '../lib/component/Header/Header.svelte';
	import Footer from '../lib/component/Footer/Footer.svelte';
	import { currentPage } from '$lib/assets/js/store';
	import { navItems } from '$lib/config';
	import { preloadCode } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	export let data: LayoutData;

	let show=false
	import { afterUpdate } from 'svelte';
	import type { LayoutData } from './$types';
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

		// const navRoutes = navItems.map((item) => item.route);
		// preloadCode(...navRoutes);

	let hiddenElements: NodeListOf<Element>;

	afterUpdate(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('show');
						show=true
					} else {
						entry.target.classList.remove('show');
				show=false
					}
				});
			},
			{ threshold: 0.1, root: null }
		);

		hiddenElements = document.querySelectorAll('.hidden1');
		hiddenElements.forEach((ele) => observer.observe(ele));

		const styleSheet = document.styleSheets[0];

		const keyframes = `
  @keyframes show-animation {
	0% {
	  opacity: 0;
	  filter: blur(5px);
	  transform: translate3d(-75%,0,0);
	}

	100% {
	  opacity: 1;
	  filter: blur(0);
	  transform: translate3d(0,0,0);
	}
  }
`;

		styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

});
</script>

<div class="h-full font-sans">
	<Header />
	{#key data.path}
		<main id="main" tabindex="-1" in:fade={transitionIn} out:fade={transitionOut}>
			<slot />
		</main>
	{/key}
</div>
<Footer />


