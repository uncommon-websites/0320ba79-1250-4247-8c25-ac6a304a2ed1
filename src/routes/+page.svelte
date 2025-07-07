<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";
	import CustomerCardHero from "$lib/components/layout/hero-sections/CustomerCardHero.svelte";
</script>

<CustomerCardHero
	centered={true}
	title="Designed to sell, hire, raise."
	subtitle="Your website, deck, ads and more—all in one tool built to help founders sell, hire and raise."
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
	labels={["", "", "", "", "Merch"]}
/>

<Summary
	text="Uncommon is an AI Designer for startups—get your website, deck, and ads done in one tool. Move faster, look sharper, and get everything you need to sell, hire, and raise. Designed for founders who need product market fit."
/>
