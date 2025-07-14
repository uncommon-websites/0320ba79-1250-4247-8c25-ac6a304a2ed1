<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";
	import InspiredHero from "$lib/components/layout/hero-sections/InspiredHero.svelte";
	import BentoGrid from "$lib/components/layout/BentoGrid.svelte";
</script>

<InspiredHero
	title="We focus on founders, not just projects"
	subtitle="In a world of endless design agencies, we value founder-first solutions. Our culture is built on speed, precision, and support, fostering rapid growth and collaboration that goes beyond just completing tasks—it's about accelerating your journey to product-market fit."
	features={[
		{
			title: "Only the best tools",
			description: "We provide top-tier AI technology, ensuring you have what you need to excel.",
			imageSrc: "/generated/image-a-founder-sitting-at-a-modern-minimalist.webp"
		},
		{
			title: "Work, anywhere",
			description: "Whether in the office or remote, flexibility is key—work where you're most inspired.",
			imageSrc: "/generated/image-a-designer-engaged-in-creating-website-m.webp"
		},
		{
			title: "Where work meets play",
			description: "Offsites and team events help us connect, collaborate, and recharge as a group.",
			imageSrc: "/generated/image-a-small-team-collaborating-in-a-modern-o.webp"
		},
		{
			title: "Warm and inviting spaces",
			description: "Designed to foster creativity and collaboration in a comfortable, welcoming environment.",
			imageSrc: "/generated/image-a-startup-founder-presenting-to-a-small-.webp"
		}
	]}
/>

<BentoGrid />

<Summary
	text="Uncommon is an AI Designer for startups—get your website, deck, and ads done in one tool. Move faster, look sharper, and get everything you need to sell, hire, and raise. Designed for founders who need product market fit."
/>
