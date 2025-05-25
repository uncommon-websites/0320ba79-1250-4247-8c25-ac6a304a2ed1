<script lang="ts">
	// Components
	import CustomerCardHero from "$lib/components/layout/hero-sections/CustomerCardHero.svelte";
	
	// State for the prompt input
	let promptValue = $state("");
	
	function handlePromptSubmit(event: CustomEvent<{ value: string }>) {
		console.log('Submitted:', event.detail.value);
		// Here you can add logic to handle the form submission
		// For example, redirect to a signup page or show a modal
	}
</script>

<CustomerCardHero
	centered={true}
	title="Designed to sell, hire, raise."
	subtitle="Founders "
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

<!-- Sleek Apple and Swiss Design Prompt Input -->
<section class="bg-background py-16">
	<div class="container mx-auto section-px">
		{#snippet promptInput()}
			{@const isHovered = false}
			{@const isFocused = false}
			<div 
				class="relative mx-auto w-full max-w-2xl"
			>
				<div 
					class={[
						"relative flex items-center rounded-2xl border transition-all duration-300 ease-out",
						"bg-white/80 backdrop-blur-sm shadow-sm border-gray-200 hover:border-gray-300 hover:shadow-md",
						"focus-within:border-gray-300 focus-within:shadow-lg focus-within:ring-4 focus-within:ring-black/5"
					]}
				>
					<input
						bind:value={promptValue}
						placeholder="What does your company do?"
						type="text"
						class={[
							"flex-1 bg-transparent px-6 py-4 text-base leading-relaxed",
							"placeholder:text-gray-400 text-gray-900",
							"border-none outline-none resize-none",
							"font-medium tracking-tight"
						]}
						onkeydown={(event) => {
							if (event.key === 'Enter' && !event.shiftKey) {
								event.preventDefault();
								if (promptValue.trim()) {
									handlePromptSubmit(new CustomEvent('submit', { detail: { value: promptValue.trim() } }));
								}
							}
						}}
					/>
					
					<button
						type="button"
						onclick={() => {
							if (promptValue.trim()) {
								handlePromptSubmit(new CustomEvent('submit', { detail: { value: promptValue.trim() } }));
							}
						}}
						class={[
							"mr-3 flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200",
							promptValue.trim()
								? "bg-gray-900 text-white shadow-sm hover:bg-gray-800 active:scale-95"
								: "bg-gray-100 text-gray-400 cursor-not-allowed",
							"group"
						]}
						aria-label="Submit"
					>
						<svg 
							class={[
								"h-4 w-4 transition-transform duration-200",
								promptValue.trim() && "group-hover:translate-x-0.5"
							]}
							fill="none" 
							viewBox="0 0 24 24" 
							stroke="currentColor" 
							stroke-width="2.5"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
						</svg>
					</button>
				</div>
				
				<!-- Subtle gradient overlay for depth -->
				<div 
					class="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 bg-gradient-to-b from-white/20 to-transparent opacity-0 focus-within:opacity-100"
				></div>
			</div>
		{/snippet}
		
		{@render promptInput()}
	</div>
</section>

<!-- Components removed for clean homepage -->
				" . We had a site, deck, and ad set ready before we’d even staffed up design. It felt like cheating — in the best way.",
			 
		},
		{
	 
	 
	 
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

<!-- Features removed -->
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

<!-- UseCases removed -->
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

<!-- AboutTeaser removed -->
<!-- CallToAction removed -->
	title="Built to get you to product market fit"
	subtitle="Everything a startup needs. Done for you."
	description="Uncommon helps you launch faster with AI-built websites, decks, ads and more — all in one place. Move fast, impress investors, and start selling sooner."
	imageSrc="/generated/image-a-diverse-group-of-startup-founders-each.webp"
	callsToAction={[
		{ href: "/get-started", label: "Try Uncommon", variant: "primary" },
		{ href: "/contact", label: "See how it works", variant: "secondary" }
	]}
/>
