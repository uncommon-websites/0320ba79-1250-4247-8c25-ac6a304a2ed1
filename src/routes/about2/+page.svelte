<script lang="ts">
	import { onMount } from 'svelte';

	let isVisible = $state(false);

	onMount(() => {
		// Trigger animation after component mounts
		setTimeout(() => {
			isVisible = true;
		}, 100);
	});
</script>

<svelte:head>
	<title>About 2 - Uncommon</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center section-px">
	<div class="container mx-auto text-center">
		<h1 
			class={[
				'text-display text-foreground transition-all duration-1000 ease-out',
				isVisible ? 'blur-none opacity-100 translate-y-0' : 'blur-sm opacity-0 translate-y-4'
			]}
		>
			We believe every startup deserves to look and sound like the company they're becoming, not the company they are today.
		</h1>
		
		<p 
			class={[
				'text-title2 text-muted-foreground mt-8 transition-all duration-1000 ease-out delay-300',
				isVisible ? 'blur-none opacity-100 translate-y-0' : 'blur-sm opacity-0 translate-y-4'
			]}
		>
			Uncommon transforms how founders communicate their vision—turning weeks of design work into minutes of focused input.
		</p>
		
		<p 
			class={[
				'text-headline text-muted-foreground mt-6 transition-all duration-1000 ease-out delay-500',
				isVisible ? 'blur-none opacity-100 translate-y-0' : 'blur-sm opacity-0 translate-y-4'
			]}
		>
			Because when you're building the future, your tools should work as fast as your ideas.
		</p>
	</div>
</div>