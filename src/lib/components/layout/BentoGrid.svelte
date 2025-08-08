<script lang="ts">
	type BentoCard = {
		title: string;
		description: string;
		icon: string;
		imageSrc: string;
		size: 'small' | 'medium' | 'large';
		accent?: boolean;
	};

	const bentoCards: BentoCard[] = [
		{
			title: "AI-powered design",
			description: "Get professional designs in minutes, not months. Our AI understands startup needs.",
			icon: "🧠",
			imageSrc: "/generated/image-a-creative-professional-designing-on-a-c.webp",
			size: 'large',
			accent: true
		},
		{
			title: "Built for speed",
			description: "Launch faster with designs that convert from day one.",
			icon: "⚡",
			imageSrc: "/generated/image-a-professional-startup-founder-working-o.webp",
			size: 'medium'
		},
		{
			title: "Startup focused",
			description: "Designed specifically for pre-seed to Series A founders.",
			icon: "🎯",
			imageSrc: "/generated/image-a-tech-startup-office-with-a-modern-work.webp",
			size: 'medium'
		},
		{
			title: "Scale with confidence",
			description: "From pitch deck to website, everything you need to grow.",
			icon: "🚀",
			imageSrc: "/generated/image-an-entrepreneur-presenting-to-investors-.webp",
			size: 'small'
		},
		{
			title: "Team collaboration",
			description: "Work together seamlessly with your team and stakeholders.",
			icon: "👥",
			imageSrc: "/generated/image-a-modern-design-team-collaborating-on-a-.webp",
			size: 'small'
		},
		{
			title: "Proven results",
			description: "Join founders who've raised millions with our designs.",
			icon: "📈",
			imageSrc: "/generated/image-a-business-meeting-with-a-startup-team-i.webp",
			size: 'medium'
		}
	];
</script>

<section class="section-py section-px">
	<div class="mx-auto max-w-7xl">
		<!-- Header -->
		<div class="text-center mb-16">
			<h2 class="text-display text-emphasis-high mb-4">
				Everything you need to build, sell, and hire.
			</h2>
			<p class="text-callout text-emphasis-medium max-w-2xl mx-auto">
				From brand identity to pitch decks, get all your design needs covered in one powerful platform built specifically for startup founders.
			</p>
		</div>

		<!-- Bento Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
			{#each bentoCards as card}
				<div class={[
					'group relative overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:border-gray-300',
					card.size === 'large' ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : '',
					card.size === 'medium' ? 'md:col-span-1 lg:col-span-2' : '',
					card.size === 'small' ? 'md:col-span-1 lg:col-span-1' : '',
					card.accent ? 'ring-1 ring-primary-200' : ''
				]}>
					<!-- Background Image -->
					<div class="absolute inset-0 overflow-hidden">
						<img 
							src={card.imageSrc} 
							alt={card.title}
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
					</div>

					<!-- Content -->
					<div class="relative z-10 flex h-full flex-col justify-end p-6 text-white">
						<div class={[
							'mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors text-2xl',
							card.accent ? 'bg-primary-600' : 'bg-white/20 backdrop-blur-sm'
						]}>
							{card.icon}
						</div>
						
						<h3 class="text-title3 font-medium mb-2">
							{card.title}
						</h3>
						
						<p class="text-body text-white/90 leading-relaxed">
							{card.description}
						</p>
					</div>

					<!-- Hover Effect -->
					<div class="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
				</div>
			{/each}
		</div>

		<!-- Bottom CTA -->
		<div class="text-center mt-16">
			<p class="text-callout text-emphasis-medium mb-6">
				Ready to transform your startup's design?
			</p>
			<button 
				data-button-root 
				data-variant="primary" 
				data-size="lg"
				class="inline-flex items-center gap-2"
			>
				🚀 Get started today
			</button>
		</div>
	</div>
</section>