<!--
@component Pricing

Please update features according to the company's product offering. Do not remove this comment.
-->
<script lang="ts">
	// Types
	type PricingTier = {
		name: string;
		monthlyPrice?: number | null;
		yearlyPrice?: number | null;
		description: string;
		features: string[];
		cta: {
			label: string;
			href: string;
		};
		highlight?: boolean;
	};

	type PricingFeature = {
		name: string;
		description: string;
		tiers: {
			[key: string]: boolean | string;
		};
	};

	// Components
	import Button from "$lib/components/ui/Button.svelte";
	import SectionHeader from "./SectionHeader.svelte";
	// import IconCheck from "~icons/lucide/check";
	// import IconX from "~icons/lucide/x";
	import NumberFlow from "@number-flow/svelte";

	// Props
	const {
		title = "Onboard to first draft in two minutes. ",
		subtitle = "Refine to go live in two hours.",
		features = [
	{
		name: "Context",
		description: "Deep Research your company, customers & competitors\nMonitor your competition\nUpload deck & memo\nScrape existing website\nForms the base for all assets",
		tiers: {
			Plus: "Limited edits",
			Pro: "Unlimited edits"
		}
	},
	{
		name: "Brand",
		description: "Add Brand Inspiration\nFull brandbook including colors & typography",
		tiers: {
			Plus: "Limited edits",
			Pro: "Unlimited edits"
		}
	},
	{
		name: "Website",
		description: "Design that fits your brand\nRefine with feedback\nFrom teaser pages to websites with 100+ pages\nEdit text directly\nComment on the canvas\nUpload your images\nAdjust designs according to images you upload\nLive Preview of your drafts\nAdd Custom Domain\nVersioning, go back indefinitely\nHosting for your website\nCustom Code\nAdd Analytics\nCode Export (on Annual Plan)",
		tiers: {
			Plus: "Limited edits",
			Pro: "Unlimited edits"
		}
	},
	{
		name: "Logo",
		description: "Design that fits your brand\nRefine with feedback\nFull logopack including wordmark & logomark\nMockups that include your logo\nUpload your existing logo\nPNG & SVG export",
		tiers: {
			Plus: "Limited edits",
			Pro: "Unlimited edits"
		}
	},
	{
		name: "Decks",
		description: "Google Slides master template\nRefine with feedback\nPDF & PPT export\nUse as base for sales and fundraising decks",
		tiers: {
			Plus: "Limited edits",
			Pro: "Unlimited edits"
		}
	},
	{
		name: "Snippets",
		description: "Text blocks to use for fundraising & growth\nEmail, Twitter & Linkedin DM templates\nRefine with feedback\nApplications for YC & Arc",
		tiers: {
			Plus: "Limited edits",
			Pro: "Unlimited edits"
		}
	},
	{
		name: "Story",
		description: "Writes your founding story\nRefine with feedback\nExport to use in deck or website",
		tiers: {
			Plus: "Limited edits",
			Pro: "Unlimited edits"
		}
	},
	{
		name: "Socials",
		description: "Headers, Icons & all assets for Linkedin\nHeaders, Icons & all assets for Twitter\nRefine with feedback",
		tiers: {
			Plus: "Limited edits",
			Pro: "Unlimited edits"
		}
	},
	{
		name: "Announcements (Soon)",
		description: "Generate Hiring posts\nGenerate Fundraise Announcements\nRefine with feedback",
		tiers: {
			Plus: "Coming soon",
			Pro: "Coming soon"
		}
	},
	{
		name: "Merch (Soon)",
		description: "Designs shirts, hoodies & more\nRefine with feedback\nOrder directly",
		tiers: {
			Plus: "Coming soon",
			Pro: "Coming soon"
		}
	},
	{
		name: "Other",
		description: "Collaborate with your team",
		tiers: {
			Plus: "Limited edits",
			Pro: "Unlimited edits"
		}
	}
],
		tiers = [
	{
		name: "Plus",
		monthlyPrice: 79,
		yearlyPrice: 59, // $59/mo paid yearly
		description: "Limited edits to go fast",
		features: [
			"Designs brand with deep context on your company, customers & competitors",
			"Generates your website, logo, decks, snippets, story & socials",
			"Hosts your website"
		],
		cta: {
			label: "Get started",
			href: "https://www.unc.mn/"
		}
	},
	{
		name: "Pro",
		monthlyPrice: 249,
		yearlyPrice: 199, // $199/mo paid yearly
		description: "Unlimited edits to go far",
		features: [
			"Designs brand with deep context on your company, customers & competitors",
			"Generates your website, logo, decks, snippets, story & socials",
			"Hosts your website"
		],
		cta: {
			label: "Get started",
			href: "https://www.unc.mn/"
		},
		highlight: true
	}
]
	}: {
		title?: string;
		subtitle?: string;
		tiers?: PricingTier[];
		features?: PricingFeature[];
	} = $props();

	// State
	let annual = $state(true);
	// LogoScroller component has been completely removed
</script>

<section class="section-py section-px container mx-auto">
	<div class="flex flex-col items-baseline justify-between lg:flex-row">
		<SectionHeader {title} {subtitle} />

		<div class="mb-8 flex justify-center">
			<div class="inline-flex items-center rounded-full bg-gray-100 p-0.5 dark:bg-gray-800">
				<Button
					variant="ghost"
					size="sm"
					class={[
						"rounded-full",
						!annual ? 'bg-white shadow-sm dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-700' : ''
					]}
					onclick={() => (annual = false)}
				>
					Monthly
				</Button>
				<Button
					variant="ghost"
					size="sm"
					class={[
						"rounded-full",
						annual ? "bg-white shadow-sm dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-700" : ""
					]}
					onclick={() => (annual = true)}
				>
					Annual <span class="text-primary-600 dark:text-primary-400 text-footnote">Save 20%</span>
				</Button>
			</div>
		</div>
	</div>

	<div class="bb grid gap-6 md:grid-cols-2">
		{#each tiers as tier}
			<div
				class="flex flex-col rounded-xl bg-white p-6 ring ring-gray-200 transition-all duration-300 dark:bg-gray-800 dark:ring-gray-700"
				class:ring-2={tier.highlight}
				class:ring-primary={tier.highlight}
				class:dark:ring-primary-700={tier.highlight}
				class:translate-y-[-4px]={tier.highlight}
			>
				<div class="mb-8">
					<h3 class="text-title3 mb-4 dark:text-white">{tier.name}</h3>
					<div class="mt-2 flex items-baseline">
						{#if tier.monthlyPrice === null && tier.yearlyPrice === null}
							<span class="text-title2 dark:text-white">Custom</span>
						{:else}
							<NumberFlow
								class="text-title2 [&::part\(suffix\)]:text-caption dark:text-white"
								format={{
									style: "currency",
									currency: "USD",
									trailingZeroDisplay: "stripIfInteger"
								}}
								value={annual ? tier.yearlyPrice : tier.monthlyPrice}
								suffix="/month"
							/>
						{/if}
					</div>
					<p class="text-callout text-emphasis-medium mt-3 dark:text-gray-300">
						{tier.description}
					</p>
				</div>

				<div class="mb-8 flex-grow">
					<ul class="space-y-3">
						{#each tier.features as feature}
							<li class="flex items-center gap-2">
								<span class="text-primary-600 dark:text-primary-400 size-5 flex-shrink-0">✓</span>
								<span class="text-body text-emphasis-medium dark:text-gray-300">{feature}</span>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Buttons removed as requested -->
			</div>
		{/each}
	</div>
	<div class="mt-32">
		<!-- Responsive table wrapper with horizontal scroll on mobile -->
		<!-- <div class=" hidden overflow-x-auto px-4 sm:mx-0 sm:block sm:px-0">
			<table
				class="w-full min-w-full border-separate border-spacing-0 border-gray-200 text-left dark:border-gray-700"
			>
				<thead>
					<tr>
						<th
							class="sticky left-0 min-w-[120px] border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
						>
							<span class="sr-only">Feature</span>
						</th>
						{#each tierNames as tierName}
							<th
								class="text-headline min-w-[100px] border-b border-gray-200 p-4 text-start font-normal dark:border-gray-700"
							>
								{tierName}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each features as feature}
						<tr>
							<td class="text-caption">
								{feature.name}
							</td>
							{#each tierNames as tierName}
								<td
									class="min-w-[100px] border-b border-gray-200 p-4 text-start text-gray-600 dark:border-gray-700 dark:text-gray-300"
								>
									{#if typeof feature.tiers[tierName] === "boolean"}
										{#if feature.tiers[tierName]}
											<IconCheck
												class="text-primary-600 dark:text-primary-400 mx-auto size-5 sm:mx-0"
											/>
										{:else}
											<IconX class="mx-auto size-5 text-gray-400 sm:mx-0" />
										{/if}
									{:else}
										{feature.tiers[tierName]}
									{/if}
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div> -->

		<!-- Feature comparison grouped by category -->
		<div>
			<div class="overflow-x-auto">
				<table class="w-full border-collapse">
					<tbody>
						{#each features as feature, featureIndex}
							<!-- Category header row -->
							<tr class="border-b border-gray-100 dark:border-gray-800">
								<td class="py-3 pr-8 lg:pr-0">
									<h4 class="text-body font-semibold text-gray-900 dark:text-white">
										{feature.name}
									</h4>
								</td>
								{#each tiers as tier}
									<td class="py-3">
										<span class="text-base font-medium text-gray-700 dark:text-gray-300">
											{tier.name}
										</span>
									</td>
								{/each}
							</tr>
							
							<!-- Feature items for this category -->
							{#each feature.description.split('\n') as line, lineIndex}
								<tr class="border-b border-gray-100 dark:border-gray-800">
									<td class="py-3 pr-8 lg:pr-0">
										<div class="flex items-center gap-2">
											<span class="text-primary-600 dark:text-primary-400 flex-shrink-0">✓</span>
											<span class="text-base text-gray-600 dark:text-gray-400">{line}</span>
										</div>
									</td>
									{#each tiers as tier, i}
										<td class="py-3">
											<span class="text-base text-gray-700 dark:text-gray-300">
												{feature.tiers[tier.name] === "Limited edits" ? "Limited" : 
												 feature.tiers[tier.name] === "Unlimited edits" ? "Unlimited" : 
												 feature.tiers[tier.name]}
											</span>
										</td>
									{/each}
								</tr>
							{/each}
							
							<!-- Add spacing between categories (70% increase from py-2 to py-3.5) -->
							{#if featureIndex < features.length - 1}
								<tr>
									<td colspan={tiers.length + 1} class="py-3.5"></td>
								</tr>
							{/if}
						{/each}
					</tbody>
				</table>
			</div>
		</div>
		
		<!-- Fair Use notice -->
		<div class="mt-12 text-center">
			<p class="text-sm text-gray-400 dark:text-gray-500">Fair Use applies</p>
		</div>
	</div>
</section>

<style lang="postcss">
	@reference '../../../app.css';

	:global(number-flow-svelte)::part(suffix) {
		@apply text-sm text-gray-400 dark:text-gray-500;
	}
</style>
