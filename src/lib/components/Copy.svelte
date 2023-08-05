<script lang="ts">
	import { onMount } from "svelte";

	onMount(() => {
		// will add a children to any <pre> element with class language-*
		let pres: HTMLCollection = document.getElementsByTagName("pre");
		for (let _ of pres) {
			const pre = _ as HTMLPreElement;
			if (![...pre.classList].some((el) => el.startsWith("language-"))) {
				continue;
			}
			const text = pre.innerText;
			pre.className = "relative overflow-x-auto p-4 rounded-md bg-gray-900";
			let copyButton = document.createElement("button");
			copyButton.addEventListener(
				"click",
				() => (navigator.clipboard.writeText(text))
			);
			copyButton.className = "copy";
			copyButton.innerText = "Copy";
			pre.appendChild(copyButton);
		}
	});
</script>

<slot />

