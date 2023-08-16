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
			pre.className = "relative overflow-x-auto px-8 text-lg py-14  rounded-md bg-gray-900";
			let copyButton = document.createElement("button");
			copyButton.addEventListener(
				"click",
				async () => {
					try {
						await navigator.clipboard.writeText(text);
						showCopiedText(copyButton);
					} catch (error) {
						console.error("Copy failed:", error);
					}
				}
			);
			copyButton.className = "copy text-md";
			copyButton.innerText = "Copy";
			pre.appendChild(copyButton);
		}
	});

	function showCopiedText(button: HTMLButtonElement) {
		button.innerText = "Copied!";
		setTimeout(() => {
			button.innerText = "Copy";
		}, 1000); // Restore "Copy" text after 1 second
	}
</script>

<slot/>


