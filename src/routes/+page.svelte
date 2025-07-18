<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";
	import CustomerCardHero from "$lib/components/layout/hero-sections/CustomerCardHero.svelte";
	import BentoGrid from "$lib/components/layout/BentoGrid.svelte";
</script>

<CustomerCardHero
	centered={true}
	title="Instant design for founders who move fast"
	subtitle="Uncommon generates brands, websites, and pitch decks in hours—not weeks. AI that actually gets startups, so you can skip the $20K designer and launch with confidence."
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

<!-- Simple section with Apple-inspired design -->
<section class="section-py section-px">
	<div class="mx-auto max-w-4xl text-center">
		<h2 class="text-title2 text-emphasis-high mb-4">
			Designed for founders who need to move fast
		</h2>
		<p class="text-callout text-emphasis-medium max-w-2xl mx-auto">
			Skip the months of back-and-forth with designers who don't understand your startup. Get professional design that actually converts, delivered in hours instead of weeks.
		</p>
	</div>
</section>

<BentoGrid />

<Summary
	text="Uncommon is an AI Designer for startups—get your website, deck, and ads done in one tool. Move faster, look sharper, and get everything you need to sell, hire, and raise. Designed for founders who need product market fit."
/>
