<!--

@component CustomerCardHero

This hero displays a row of customers. If used, we don't need a testimonial section on the same page.

It should ALWAYS have between 3 and 5 customers!
-->

<script lang="ts">
	// Components
	import AnimateText from "$lib/components/animation/AnimateText.svelte";
	import Button from "$lib/components/ui/Button.svelte";

	// Constants
	import { cta } from "$lib/navigation";
	import { onMount } from "svelte";
	import StakeholderCard from "../sub/StakeholderCard.svelte";
	import { animate, stagger } from "motion";

	let cards: HTMLElement[] = $state([]);

	// Types
	type Props = {
		centered?: boolean;
		title: string;
		subtitle: string;
		customers: Array<{
			name: string;
			position?: string;
			imageSrc: string;
		}>;
		callsToAction?: Array<{
			href: string;
			label: string;
		}>; // A maximum of two calls to action, with the first one being primary and the second one being secondary
	};

	let {
		title,
		subtitle,
		customers = [],
		callsToAction = [cta],
		centered = false,
		...rest
	}: Props = $props();

	onMount(() => {
		animate(
			cards,
			{
				// y: ["50%", 0],
				scale: [0.9, 1],
				filter: ["blur(4px)", "blur(0px)"],
				opacity: [0, 1]
			},
			{
				duration: 0.5,
				ease: "easeOut",
				delay: stagger(0.1, {
					startDelay: 0.5,
					ease: "easeInOut"
				})
			}
		);
	});
</script>

<div class="bg-background" {...rest}>
	<header
		class={[
			"section-px container mx-auto grid items-end gap-16 gap-y-9 text-balance",
			centered ? "place-items-center py-16 text-center" : "mb-12 pt-24 xl:grid-cols-[1fr_auto]"
		]}
		data-enter-container
	>
		<div class="grid max-w-prose gap-6">
			<h1 class="text-display w-full text-balance" data-enter>
				<span class="block"><AnimateText text={title} /></span>
			</h1>

			<p
				data-enter
				class={[
					"text-muted-foreground text-headline block  max-w-[45ch] text-pretty transition duration-500 ease-out",
					centered && "mx-auto"
					// isTitleComplete ? "opacity-100" : "translate-y-2 opacity-0 blur-sm"
				]}
			>
				The company building tool for founders.
			</p>

    <div class="mx-auto mt-8 max-w-[50ch] group" data-enter>
      <div class="relative overflow-hidden">
        <!-- Swiss-inspired geometric accent -->
        <div class="absolute -top-px left-0 h-px w-0 bg-gradient-to-r from-foreground/20 via-foreground/60 to-foreground/20 transition-all duration-700 ease-out group-focus-within:w-full"></div>
        
        <!-- Main input container -->
        <div class="relative bg-background/80 backdrop-blur-sm border border-border/40 transition-all duration-500 ease-out group-focus-within:border-foreground/30 group-focus-within:bg-background/95 group-focus-within:shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_8px_32px_rgba(0,0,0,0.08)] group-hover:border-foreground/20">
          
          <!-- Subtle inner glow -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-focus-within:opacity-100"></div>
          
          <!-- Input field -->
          <input
            type="text"
            placeholder="What does your company do?"
            class="relative z-10 w-full bg-transparent px-6 py-4 text-base font-medium text-foreground placeholder:text-muted-foreground/60 placeholder:font-normal outline-none transition-all duration-300 ease-out focus:placeholder:text-muted-foreground/40 focus:placeholder:translate-x-1"
          />
          
          <!-- Micro-interaction indicator -->
          <div class="absolute bottom-0 left-6 h-px w-0 bg-foreground/60 transition-all duration-500 ease-out group-focus-within:w-[calc(100%-3rem)]"></div>
        </div>
        
        <!-- Swiss precision corner detail -->
        <div class="absolute -bottom-px -right-px h-2 w-2 border-b border-r border-foreground/10 transition-all duration-500 group-focus-within:border-foreground/30"></div>
        
        <!-- Subtle bottom accent -->
        <div class="absolute -bottom-px left-0 h-px w-0 bg-gradient-to-r from-transparent via-foreground/30 to-transparent transition-all duration-700 ease-out delay-100 group-focus-within:w-full"></div>
      </div>
      
      <!-- Swiss-inspired helper text -->
      <div class="mt-3 flex items-center justify-between text-xs font-medium tracking-wide text-muted-foreground/50 transition-all duration-300 group-focus-within:text-muted-foreground/70">
        <span class="translate-y-1 opacity-0 transition-all duration-300 delay-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
          Press Enter to continue
        </span>
        <span class="font-mono text-[10px] tracking-wider opacity-0 transition-all duration-300 delay-200 group-focus-within:opacity-60">
          01/01
        </span>
      </div>
    </div>
		</div>

		{#if callsToAction.length > 0}
			<div class="flex gap-4" data-enter>
				{#each callsToAction as cta, index}
					<Button
						href={cta.href}
						size="lg"
						variant={index % 2 === 0 ? "primary" : "secondary"}
						class="max-lg:hidden">{cta.label}</Button
					>
					<Button
						href={cta.href}
						size="md"
						variant={index % 2 === 0 ? "primary" : "secondary"}
						class="lg:hidden">{cta.label}</Button
					>
				{/each}
			</div>
		{/if}
	</header>

	<div
		class="mt-4 grid flex-nowrap gap-(--card-gap) overflow-x-auto px-(--card-gap) whitespace-nowrap [--card-gap:calc(var(--radius)/2)] [--gap:--spacing(5)] max-lg:auto-cols-max max-lg:grid-flow-col md:whitespace-normal lg:grid-cols-[var(--cols)] lg:flex-wrap"
		style:--cols="repeat({customers.length},1fr)"
	>
		{#each customers as customer, index}
			<div class="h-full overflow-clip">
				<StakeholderCard bind:cards {...customer} {index} />
			</div>
		{/each}
	</div>
</div>
