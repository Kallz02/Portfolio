<script lang="ts">
	import '../app.css';
	import Header from '../lib/component/Header/Header.svelte';
	import Footer from '../lib/component/Footer/Footer.svelte';
	import { currentPage } from '$lib/assets/js/store';
	import { navItems } from '$lib/config';
	// import { preloadCode } from '$app/navigation';
	import { fade } from 'svelte/transition';
	export let data: any;
	let show = false;
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

	// const navRoutes = navItems.map((item) => item.route);
	// preloadCode(...navRoutes);

	let hiddenElements: NodeListOf<Element>;

	afterUpdate(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('show');
						show = true;
					} else {
						entry.target.classList.remove('show');
						show = false;
					}
				});
			},
			{ threshold: 0.1, root: null }
		);

		hiddenElements = document.querySelectorAll('.hidden1');
		hiddenElements.forEach((ele) => observer.observe(ele));

		// const styleSheet = document.styleSheets[0];

		//		const keyframes = ` @keyframes show-animation {0% {opacity: 0;filter: blur(5px);transform: translate3d(-75%,0,0);}100% {opacity: 1;filter: blur(0);transform: translate3d(0,0,0);}}`;

		// styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
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
<!-- <BottomNav position="fixed"  classInner="grid-cols-3 border-black border-t-[0.15rem] "  >
	{#each navItems as item}
	<a href={item.route} class="flex flex-col justify-center items-center h-full">
		<BottomNavItem btnName={item.title}  
			active={item.route === data.path}
			route={item.route}
			activeClass="bg-gray-800 hover:bg-gray-900 text-white "
			
			aria-current={item.route === data.path ? 'page' : undefined}
			
		/>
	</a>
	
		
	
	
	{/each}
</BottomNav> -->

<Footer />
<div
	class="fixed bottom-0 left-0 z-50 w-full h-14 border-black md:hidden dark:border-gray-600 bg-custom-background backdrop-blur-md border-t-[0.1rem]"
>
	<div class="grid grid-cols-3 mx-auto max-w-lg h-full font-medium group-hover:bg-gray-800">
		{#each navItems as item, index}
			<a
				href={item.route}
				type="button"
				class="inline-flex flex-col dark:invert justify-around items-center px-5 pt-2 dark:border-gray-600 group dark:hover:bg-gray-800 hover:bg-gray-100/80 hover:backdrop-blur-md"
			>
				{#if index === 0}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
						><path
							d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z"
						/></svg
					>
				{:else if index === 1}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
						><path
							d="M12 4.707c-2.938-1.83-7.416-2.567-12-2.707v17.714c3.937.12 7.795.681 10.667 1.995.846.388 1.817.388 2.667 0 2.872-1.314 6.729-1.875 10.666-1.995v-17.714c-4.584.14-9.062.877-12 2.707zm-1 14.902c-1.525-.546-4.716-1.505-9-1.799v-13.703c5.156.389 7.527 1.463 9 2.334v13.168zm11-1.798c-4.283.293-7.475 1.252-9 1.799v-13.171c.868-.515 2.072-1.107 4-1.584v6.145l1.5-1.5 1.5 1.5v-6.691c.617-.079 1.279-.148 2-.202v13.704z"
						/></svg
					>
				{:else if index === 2}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
						><path
							d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"
						/></svg
					>
				{/if}
				<span
					class="text-sm text-black dark:text-gray-400 group-hover:text-cyan-900 dark:group-hover:text-blue-500"
					>{item.title}</span
				>
			</a>
		{/each}
	</div>
</div>
