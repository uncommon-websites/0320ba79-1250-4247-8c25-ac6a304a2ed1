<script lang="ts">
	// Components
	import { CONFIG } from "$lib/content";

	// Props
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title} | {CONFIG.companyName}</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>
<div class="section-px section-py container mx-auto max-w-prose">
	<div class="mx-auto max-w-3xl">
		<header class="mb-20">
			<h1 class="text-title1">{data.meta.title}</h1>
		</header>

		<main>
			<div name="termly-embed" data-id="0472e84d-cf1c-41b0-b79c-54c2286ff5ff"></div>
		</main>
	</div>
</div>