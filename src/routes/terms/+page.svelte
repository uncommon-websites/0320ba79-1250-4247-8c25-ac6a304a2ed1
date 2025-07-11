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
<div class="section-px section-py container mx-auto max-w-4xl">
	<div class="mx-auto max-w-3xl">
		<header class="mb-10">
		</header>

		<main>
			<div name="termly-embed" data-id="2bbb5149-297f-4953-b690-10cffbae5ebe"></div>
		</main>
	</div>
</div>