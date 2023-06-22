<script>
	import insta from '$lib/pics/instaReact-min.png';
</script>

<div class=" overflow-hidden relative">
	<div
		class="projcar flex w-[1760px] animate-marquee whitespace-nowrap overflow-x-clip gap-[2rem] pb-[0.1rem] bg-slate-300"
	>
		<article class="cta">
			<img src={insta} alt="Insta React" />
			<div class="cta__text-column">
				<h2 class="px-1">InstafakeDetectAPI</h2>
				<p class="pl-2 pb-2">React | Angular | Android | Python</p>
			</div>
		</article>

		<article class="cta">
			<img src={insta} alt="Insta React" />
			<div class="cta__text-column">
				<h2 class="px-1">InstafakeDetectAPI</h2>
				<p class="pl-2 pb-2">React | Angular | Android | Python</p>
			</div>
		</article>
		<article class="cta">
			<img src={insta} alt="Insta React" />
			<div class="cta__text-column">
				<h2 class="px-1">InstafakeDetectAPI</h2>
				<p class="pl-2 pb-2">React | Angular | Android | Python</p>
			</div>
		</article>
		<article class="cta">
			<img src={insta} alt="Insta React" />
			<div class="cta__text-column">
				<h2 class="px-1">InstafakeDetectAPI</h2>
				<p class="pl-2 pb-2">React | Angular | Android | Python</p>
			</div>
		</article>

		<article class="cta">
			<img src={insta} alt="Insta React" />
			<div class="cta__text-column">
				<h2 class="px-1">InstafakeDetectAPI</h2>
				<p class="pl-2 pb-2">React | Angular | Android | Python</p>
			</div>
		</article>
	</div>

	<div
		class="projcar absolute top-0 flex w-[1760px] animate-marquee2 whitespace-nowrap overflow-x-clip gap-[2rem] pb-[0.1rem] bg-slate-300"
	>
		<article class="cta">
			<img src={insta} alt="Insta React" />
			<div class="cta__text-column">
				<h2 class="px-1">InstafakeDetectAPI</h2>
				<p class="pl-2 pb-2">React | Angular | Android | Python</p>
			</div>
		</article>
		<article class="cta">
			<img src={insta} alt="Insta React" />
			<div class="cta__text-column">
				<h2 class="px-1">InstafakeDetectAPI</h2>
				<p class="pl-2 pb-2">React | Angular | Android | Python</p>
			</div>
		</article>

		<article class="cta">
			<img src={insta} alt="Insta React" />
			<div class="cta__text-column">
				<h2 class="px-1">InstafakeDetectAPI</h2>
				<p class="pl-2 pb-2">React | Angular | Android | Python</p>
			</div>
		</article>

		<article class="cta">
			<img src={insta} alt="Insta React" />
			<div class="cta__text-column">
				<h2 class="px-1">InstafakeDetectAPI</h2>
				<p class="pl-2 pb-2">React | Angular | Android | Python</p>
			</div>
		</article>

		<article class="cta">
			<img src={insta} alt="Insta React" />
			<div class="cta__text-column">
				<h2 class="px-1">InstafakeDetectAPI</h2>
				<p class="pl-2 pb-2">React | Angular | Android | Python</p>
			</div>
		</article>
	</div>
</div>

<style>
	.projcar {
		min-height: 17rem;
	}

	.cta h2 {
		margin: 0;
		font-size: 2rem;
	}

	@media (min-width<=1111px) {
		.cta h2 {
			font-size: 1.8rem;
		}
	}

	.cta {
		display: flex;
		flex-wrap: wrap;
		background: hsl(191, 35%, 90%);
		width: 20rem;
		box-shadow: 0.3rem 0.3rem 0 hsl(var(--shadowColor) / 1);
		border-radius: 0.8rem;
		overflow: hidden;
		border: 0.3rem solid;
		/* animation: slide 15s linear infinite; */
	}

	.cta img {
		aspect-ratio: 16 / 9;
		object-fit: cover;
		/* flex: 1 1 300px; */
		width: 320px;
		outline: 0.3rem solid;
	}

	.cta__text-column {
		/* flex: 1 0 50%; */
		width: 100%;

		background: hsl(191, 35%, 90%);
	}
	@keyframes slide {
		0% {
			transform: translate3d(0, 0, 0);
		}
		100% {
			transform: translate3d(-100%, 0, 0); /* The image width */
		}
	}
</style>
