<script lang="ts">
	// Types
	import type { PageProps } from "./$types";

	// Components
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import Pricing from "$lib/components/layout/Pricing.svelte";

	// Props
	const { data }: PageProps = $props();
</script>

<Pricing />

<Testimonials
  testimonials={[
    {
      name: "Elham Tavakol",
      position: "CEO",
      company: "nsave",
      quote:
        "We cut our time to launch by at least three weeks. No designers, no back-and-forth—just results. Best $300 we ever spent.",
      image: "/generated/image-a-middle-eastern-woman-in-an-office-sett.webp"
    },
    {
      name: "Devin Mancuso",
      position: "Co-founder",
      company: "Squint",
      quote:
        "One week after updating our deck with Uncommon, we started real investor conversations and closed $2.8 million. It paid for itself instantly.",
      image: "/generated/image-a-mixed-race-man-in-a-contemporary-works.webp"
    },
    {
      name: "Chanel Olaniyan",
      position: "Product Lead",
      company: "Zevra",
      quote:
        "We were skeptical at first, but Uncommon was up and running in under an hour and our site was live the next day. Zero hand-holding needed.",
      image: "/generated/image-a-black-woman-seated-at-a-desk-in-a-brig.webp"
    }
  ]}
/>

<CallToAction
  title="Startup design, done for you"
  subtitle="The fastest way to launch, look great, and grow"
  description="Make your startup look the way it should from day one—like it’s already working. Websites, decks, ads—all built for you so you can focus on building, not designing."
  imageSrc="/generated/image-a-cheerful-early-stage-founder-in-a-cont.webp"
  callsToAction={[
    { href: '/get-started', label: 'Get started now', variant: 'primary' },
    { href: '/contact', label: 'Talk to sales', variant: 'secondary' }
  ]}
/>
