<!--
@component InspiredHero

A hero section inspired by the provided reference image, featuring a clean layout with 
a prominent headline, descriptive text, and a grid of feature cards.
-->

<script lang="ts">
	// Components
	import AnimateText from "$lib/components/animation/AnimateText.svelte";
	import { onMount } from "svelte";
	import { animate, stagger } from "motion";

	let cards: HTMLElement[] = $state([]);

	// Types
	type FeatureCard = {
		title: string;
		description: string;
		imageSrc: string;
	};

	type Props = {
		title: string;
		subtitle: string;
		features: FeatureCard[];
	};

	let { title, subtitle, features = [], ...rest }: Props = $props();

	onMount(() => {
		animate(
			cards,
			{
				scale: [0.95, 1],
				opacity: [0, 1]
			},
			{
				duration: 0.6,
				ease: "easeOut",
				delay: stagger(0.1, {
					startDelay: 0.3,
					ease: "easeInOut"
				})
			}
		);
	});
</script>

<div class="bg-background section-py" {...rest}>
	<div class="container mx-auto section-px">
		<!-- Header Section -->
		<header class="mx-auto max-w-4xl text-center mb-16" data-enter-container>
			<h1 class="text-display text-balance mb-6" data-enter>
				<AnimateText text={title} />
			</h1>
			
			<p class="text-headline text-muted-foreground max-w-2xl mx-auto text-balance" data-enter>
				{subtitle}
			</p>
		</header>

		<!-- Feature Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
			{#each features as feature, index}
				<div 
					bind:this={cards[index]}
					class="group"
				>
					<div class="aspect-[4/3] mb-4 overflow-hidden rounded-lg bg-card">
						<img 
							src={feature.imageSrc} 
							alt={feature.title}
							class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
						/>
					</div>
					
					<div class="space-y-2">
						<h3 class="text-title3 font-medium text-foreground">
							{feature.title}
						</h3>
						<p class="text-body text-muted-foreground">
							{feature.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>