<script lang="ts">
	// Components
	import UseCases from "$lib/components/layout/UseCases.svelte";
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import CustomerCardHero from "$lib/components/layout/hero-sections/CustomerCardHero.svelte";
</script>

<CustomerCardHero
	centered={true}
	title="Launch faster. Look sharper."
	subtitle="Your website, deck, ads and more—all in one tool built to help founders sell, hire and raise."
	customers={[
		{
			name: "Asterix Health Sign",
			position: "UK-registered remote doctors, 60% lower staffing costs.",
			imageSrc: "/uploaded/uploaded-image-20250523-235122.png"
		},
		{
			name: "Bill Murphy",
			position: "Safety & Training Manager, Berkshire Hathaway Energy",
			imageSrc: "/uploaded/uploaded-image-20250523-200943.webp"
		},
		{
			name: "Industrial Step-by-Step App",
			position: "On-the-job guide",
			imageSrc: "/uploaded/uploaded-image-20250523-200943.webp"
		},
		{
			name: "AR Procedures Guide",
			position: "Interactive machine instructions",
			imageSrc: "/uploaded/uploaded-image-20250523-200943.webp"
		},
		{
			name: "Insight Tablet Display",
			position: "Industrial process dashboard",
			imageSrc: "/uploaded/uploaded-image-20250523-200943.webp"
		}
	]}
/>

<Summary
	text="Uncommon is an AI Designer for startups—get your website, deck, and ads done in one tool. Move faster, look sharper, and get everything you need to sell, hire, and raise. Designed for founders who need product market fit."
/>

<Testimonials
	testimonials={[
		{
			name: "Hassan Tariq",
			position: "CEO",
			company: "nsave",
			quote:
				"Uncommon cut three weeks off our launch timeline. We had a site, deck, and ad set ready before we’d even staffed up design. It felt like cheating — in the best way.",
			image: "/generated/image-a-confident-male-startup-ceo-in-a-modern.webp"
		},
		{
			name: "Lina Breck",
			position: "Co-founder",
			company: "Squint",
			quote:
				"We went from briefing agencies to shipping campaigns in a day. Uncommon handles brand, visuals, layouts. Everything I’d normally hire out. It slashed our burn on design by 60%.",
			image: "/generated/image-a-focused-female-startup-founder-immerse.webp"
		},
		{
			name: "Devika Hossain",
			position: "Co-founder & COO",
			company: "TradeFam",
			quote:
				"Our pitch deck used to change 5 times a week and never felt right. With Uncommon, we had fundraise-ready output in hours — tight, consistent, and bold. It helped de-risk a key part of our raise.",
			image: "/generated/image-a-determined-female-startup-coo-in-a-gla.webp"
		}
	]}
/>

<Features
	title="Designed to sell, hire and raise"
	subtitle="No designers or agencies needed."
	features={[
		{
			title: "Websites, decks & ads in minutes",
			description: "Go from idea to launch—Uncommon builds it all for you, instantly."
		},
		{
			title: "Built for founders, not designers",
			description:
				"No fiddling with Figma or slides—just tell Uncommon what you need and get results."
		},
		{
			title: "Conversion-focused by default",
			description: "Each page is designed to help you attract users, investors, and top talent."
		},
		{
			title: "Sequoia-trusted frameworks",
			description: "Used by Squint and nsave, so you know it works when it counts."
		},
		{
			title: "Brand grows as you grow",
			description: "Start lean and update your brand whenever your company evolves."
		},
		{
			title: "Less time briefing, more time building",
			description: "Spend your energy on the product, not on project calls and feedback cycles."
		}
	]}
/>

<UseCases
	title="Use Cases"
	subtitle="Real-world applications for your business needs"
	useCases={[
		{
			title: "Find early traction",
			description:
				"Launch messaging and landing pages to validate your idea and get real signal fast.",
			image: "/generated/image-a-diverse-startup-founder-team-collabora.webp",
			link: {
				href: "/use-cases/product-market-fit",
				label: "Learn more"
			}
		},
		{
			title: "Raise your next round",
			description:
				"Build investor decks that tell a sharp story — clearly, visually and confidently.",
			image: "/generated/image-a-confident-startup-founder-delivering-a.webp",
			link: {
				href: "/use-cases/fundraising",
				label: "Learn more"
			}
		},
		{
			title: "Attract great talent",
			description:
				"Design branded job pages that help you pitch your mission and convert top candidates.",
			image: "/generated/image-a-small-tech-team-welcoming-new-hires-in.webp",
			link: {
				href: "/use-cases/team-recruiting",
				label: "Learn more"
			}
		}
	]}
/>

<AboutTeaser />
<CallToAction
	title="Built to get you to product market fit"
	subtitle="Everything a startup needs. Done for you."
	description="Uncommon helps you launch faster with AI-built websites, decks, ads and more — all in one place. Move fast, impress investors, and start selling sooner."
	imageSrc="/generated/image-a-diverse-group-of-startup-founders-each.webp"
	callsToAction={[
		{ href: "/get-started", label: "Try Uncommon", variant: "primary" },
		{ href: "/contact", label: "See how it works", variant: "secondary" }
	]}
/>
