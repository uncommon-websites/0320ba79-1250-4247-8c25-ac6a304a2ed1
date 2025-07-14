<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";
	import CustomerCardHero from "$lib/components/layout/hero-sections/CustomerCardHero.svelte";
	import BentoGrid from "$lib/components/layout/BentoGrid.svelte";
</script>

<CustomerCardHero
	centered={true}
	title="Instant design that actually sells"
	subtitle="Uncommon turns your pitch into a brand, website, and deck that feel custom—without the cost, delays, or guesswork of traditional designers."
	customers={[
		{
			name: "Brand",
			imageSrc: "/uploaded/uploaded-image-20250523-235122.png"
		},
		{
			name: "Website",
			imageSrc: "/uploaded/uploaded-image-20250523-235333.png"
		},
		{
			name: "Logo",
			imageSrc: "/uploaded/uploaded-image-20250523-235435.png"
		},
		{
			name: "Deck",
			imageSrc: "/uploaded/uploaded-image-20250523-235532.png"
		},
		{
			name: "Merch",
			imageSrc: "/uploaded/uploaded-image-20250524-003800.png"
		}
	]}
/>

<BentoGrid />

<Summary
	text="Uncommon is an AI Designer for startups—get your website, deck, and ads done in one tool. Move faster, look sharper, and get everything you need to sell, hire, and raise. Designed for founders who need product market fit."
/>
