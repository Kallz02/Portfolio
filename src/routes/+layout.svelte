<script lang="ts">
	import '../app.css';
	import Header from '../lib/component/Header/Header.svelte';
	import Footer from '../lib/component/Footer/Footer.svelte';

	import { afterUpdate } from 'svelte';

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
	<slot />
</div>
<Footer />
