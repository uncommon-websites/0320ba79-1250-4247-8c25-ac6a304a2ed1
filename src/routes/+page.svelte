<script lang="ts">
	import "../app.css";

	const portfolio = [
		"Mercor", "Delphi", "Squint", "Dash0", "CrewAI", "GradientLabs", "Build", "Fleet", "Medra", "nsave", "Ironbridge", "DiligenceSquared", "Lemni", "Morphic", "Compile", "Lapel", "Orbit", "Sensmore", "Nolla", "Luo", "Hero", "Popcorn", "Partykit", "Guided Energy", "Commerce Systems", "Claim", "Structify", "Snaptrude", "Superlinked", "Tilebox", "Amperecloud", "Equipme", "Documenso", "Era"
	];

	const features = [
		{ title: "Brand System", description: "Typography, colors, tone of voice, and Tailwind export." },
		{ title: "Website", description: "Full design, code, and hosting with custom domain." },
		{ title: "Decks", description: "Sales and fundraising presentations in Google Slides." },
		{ title: "Snippets", description: "Pre-written YC/Arc applications and social templates." },
		{ title: "Portraits", description: "Unified team headshots in 30+ professional styles." },
		{ title: "Story", description: "Compelling narratives for fundraising and sales." },
		{ title: "Socials", description: "X and LinkedIn headers, icons, and optimized bios." },
		{ title: "Ads", description: "Marketing creative generation for growth." },
		{ title: "Competition", description: "Continuous monitoring of your competitive landscape." }
	];

	const successStories = [
		{ name: "Delphi", amount: "$20M", investor: "Sequoia" },
		{ name: "Squint", amount: "Raised", investor: "Sequoia" },
		{ name: "nsave", amount: "Raised", investor: "Sequoia" }
	];
</script>

<div class="min-h-screen bg-white text-black font-sans selection:bg-gray-200">
	<!-- Header -->
	<header class="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
		<div class="flex items-center gap-2">
			<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M9.09008 8.58393C9.59857 9.09971 10.4308 9.09971 10.9393 8.58393L14.8489 4.61827C15.3562 4.11093 15.6413 3.42283 15.6413 2.70534C15.6413 1.98786 15.3562 1.29976 14.8489 0.79242C14.3416 0.285081 13.6535 6.10352e-05 12.936 6.10352e-05C12.2185 6.10352e-05 11.5304 0.285081 11.0231 0.79242L10.8995 0.907454C10.401 1.37177 9.62834 1.37177 9.12979 0.907454L9.00627 0.79242C8.49893 0.285081 7.81083 6.10352e-05 7.09334 6.10352e-05C6.37586 6.10352e-05 5.68776 0.285081 5.18042 0.79242C4.67308 1.29976 4.38806 1.98786 4.38806 2.70534C4.38806 3.42283 4.67308 4.11093 5.18042 4.61827L9.09008 8.58393Z" fill="currentColor"/>
				<path d="M11.4161 8.96379C10.9004 9.47229 10.9004 10.3045 11.4161 10.813L15.3818 14.7226C15.8891 15.23 16.5772 15.515 17.2947 15.515C18.0122 15.515 18.7003 15.23 19.2076 14.7226C19.715 14.2153 20 13.5272 20 12.8097C20 12.0922 19.715 11.4041 19.2076 10.8968L19.0926 10.7733C18.6283 10.2747 18.6283 9.50206 19.0926 9.0035L19.2076 8.87999C19.715 8.37265 20 7.68455 20 6.96706C20 6.24958 19.715 5.56148 19.2076 5.05414C18.7003 4.5468 18.0122 4.26178 17.2947 4.26178C16.5772 4.26178 15.8891 4.5468 15.3818 5.05414L11.4161 8.96379Z" fill="currentColor"/>
				<path d="M10.9099 11.1935C10.4014 10.6778 9.56924 10.6778 9.06075 11.1935L5.15109 15.1592C4.64375 15.6665 4.35873 16.3546 4.35873 17.0721C4.35873 17.7896 4.64375 18.4777 5.15109 18.985C5.65843 19.4924 6.34653 19.7774 7.06401 19.7774C7.7815 19.7774 8.4696 19.4924 8.97694 18.985L9.10045 18.87C9.59901 18.4057 10.3717 18.4057 10.8702 18.87L10.9937 18.985C11.5011 19.4924 12.1892 19.7774 12.9067 19.7774C13.6241 19.7774 14.3122 19.4924 14.8196 18.985C15.3269 18.4777 15.6119 17.7896 15.6119 17.0721C15.6119 16.3546 15.3269 15.6665 14.8196 15.1592L10.9099 11.1935Z" fill="currentColor"/>
				<path d="M8.58387 10.8137C9.09965 10.3052 9.09965 9.47299 8.58387 8.9645L4.61821 5.05484C4.11087 4.5475 3.42277 4.26248 2.70528 4.26248C1.9878 4.26248 1.2997 4.5475 0.79236 5.05484C0.285021 5.56218 1.21501e-06 6.25028 1.12093e-06 6.96776C1.02684e-06 7.68525 0.285021 8.37335 0.79236 8.88069L0.907394 9.0042C1.37171 9.50276 1.37171 10.2754 0.907394 10.774L0.79236 10.8975C0.285021 11.4048 4.48842e-07 12.0929 3.54755e-07 12.8104C2.60668e-07 13.5279 0.28502 14.216 0.792359 14.7233C1.2997 15.2307 1.9878 15.5157 2.70528 15.5157C3.42277 15.5157 4.11087 15.2307 4.61821 14.7233L8.58387 10.8137Z" fill="currentColor"/>
			</svg>
			<span class="text-xl font-bold tracking-tight">Uncommon</span>
		</div>
		<nav class="hidden md:flex gap-8 text-sm font-medium text-gray-500">
			<a href="#features" class="hover:text-black transition-colors">Features</a>
			<a href="#pricing" class="hover:text-black transition-colors">Pricing</a>
			<a href="#about" class="hover:text-black transition-colors">About</a>
		</nav>
		<a href="https://uncommon.sh" class="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
			Get Started
		</a>
	</header>

	<!-- Hero Section -->
	<section class="max-w-7xl mx-auto px-6 pt-20 pb-32 grid lg:grid-cols-2 gap-16 items-center">
		<div>
			<h1 class="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-purple-600">
				Look like the company you're building
			</h1>
			<p class="text-xl text-gray-500 leading-relaxed mb-10 max-w-lg">
				Your idea feels like a billion-dollar business. Uncommon helps it look the part—instantly. Generate a complete brand and website in minutes, not months.
			</p>
			<div class="flex flex-col sm:flex-row gap-4">
				<button class="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
					Start Building
				</button>
				<div class="flex items-center gap-3 px-2">
					<div class="flex -space-x-2">
						{#each [1, 2, 3] as i}
							<div class="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
						{/each}
					</div>
					<span class="text-sm text-gray-500 font-medium">Joined by 100+ Sequoia founders</span>
				</div>
			</div>
		</div>
		<div class="relative">
			<img 
				src="/generated/image-a-minimalist-high-end-design-studio-work-1768413760903-0.webp" 
				alt="Uncommon Brand Identity System" 
				class="rounded-3xl shadow-2xl w-full object-cover aspect-[16/9]"
			/>
			<div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-gray-100">
				<div class="flex items-center gap-4 mb-2">
					<div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
					</div>
					<div>
						<p class="text-sm font-bold">Brand System</p>
						<p class="text-xs text-gray-400">Generated in 14s</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Social Proof -->
	<section class="bg-gray-50 py-20 border-y border-gray-100">
		<div class="max-w-7xl mx-auto px-6 text-center">
			<p class="text-sm font-bold uppercase tracking-widest text-gray-400 mb-12">Trusted by founders from</p>
			<div class="flex flex-wrap justify-center gap-x-16 gap-y-10 opacity-40 grayscale">
				<span class="text-2xl font-bold">Sequoia</span>
				<span class="text-2xl font-bold">Airbnb</span>
				<span class="text-2xl font-bold">Y Combinator</span>
				<span class="text-2xl font-bold">Arc</span>
			</div>
		</div>
	</section>

	<!-- Problem/Solution -->
	<section class="max-w-7xl mx-auto px-6 py-32">
		<div class="grid lg:grid-cols-2 gap-24 items-center">
			<div>
				<h2 class="text-4xl font-bold tracking-tight mb-8">The Vision-Perception Gap</h2>
				<p class="text-lg text-gray-500 leading-relaxed mb-6">
					Founders envision their company as a billion-dollar business, but external perception—from customers, candidates, and investors—often doesn't match that ambition.
				</p>
				<p class="text-lg text-gray-500 leading-relaxed mb-8">
					Traditional branding takes months and thousands of dollars. By the time it's done, you've already pivoted twice. Uncommon compresses this timeline to seconds.
				</p>
				<div class="space-y-4">
					{#each ["Designed to raise, hire, and sell", "Automated competitive analysis", "Instant professional presence"] as item}
						<div class="flex items-center gap-3">
							<div class="w-5 h-5 bg-black rounded-full flex items-center justify-center">
								<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
							</div>
							<span class="font-medium">{item}</span>
						</div>
					{/each}
				</div>
			</div>
			<div class="grid grid-cols-2 gap-4">
				<img src="/generated/image-a-diverse-group-of-young-ambitious-start-1768413774835-1.webp" alt="Founders collaborating" class="rounded-2xl w-full aspect-square object-cover" />
				<div class="bg-black text-white p-8 rounded-2xl flex flex-col justify-end">
					<p class="text-3xl font-bold mb-2">$50B</p>
					<p class="text-sm text-gray-400">Design market being disrupted by automation</p>
				</div>
				<div class="bg-gray-100 p-8 rounded-2xl">
					<p class="text-3xl font-bold mb-2">30+</p>
					<p class="text-sm text-gray-500">Companies advised by our founding team</p>
				</div>
				<img src="/generated/image-a-professional-authentic-portrait-of-a-t-1768413787009-2.webp" alt="Founder portrait" class="rounded-2xl w-full aspect-square object-cover" />
			</div>
		</div>
	</section>

	<!-- Features Grid -->
	<section id="features" class="max-w-7xl mx-auto px-6 py-32 border-t border-gray-100">
		<div class="text-center mb-20">
			<h2 class="text-4xl font-bold tracking-tight mb-4">A Complete Asset Suite</h2>
			<p class="text-xl text-gray-500">Everything you need to launch and scale your identity.</p>
		</div>
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each features as feature}
				<div class="p-8 rounded-3xl border border-gray-100 hover:border-black transition-colors group">
					<div class="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/></svg>
					</div>
					<h3 class="text-xl font-bold mb-3">{feature.title}</h3>
					<p class="text-gray-500 leading-relaxed">{feature.description}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Portfolio -->
	<section class="bg-black text-white py-32 overflow-hidden">
		<div class="max-w-7xl mx-auto px-6 mb-16">
			<h2 class="text-4xl font-bold tracking-tight mb-4">The Uncommon Network</h2>
			<p class="text-xl text-gray-400">Our founders have raised from Sequoia, Benchmark, and more.</p>
		</div>
		
		<div class="max-w-7xl mx-auto px-6 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each successStories as story}
				<div class="bg-white/5 border border-white/10 p-8 rounded-3xl">
					<p class="text-sm text-gray-400 uppercase tracking-widest mb-2">{story.investor} Backed</p>
					<h4 class="text-2xl font-bold mb-1">{story.name}</h4>
					<p class="text-gray-500">{story.amount} following Uncommon</p>
				</div>
			{/each}
		</div>

		<div class="flex flex-wrap gap-3 px-6 max-w-7xl mx-auto opacity-50">
			{#each portfolio as company}
				<span class="px-4 py-2 bg-white/10 rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-default">
					{company}
				</span>
			{/each}
		</div>
	</section>

	<!-- Pricing -->
	<section id="pricing" class="max-w-7xl mx-auto px-6 py-32">
		<div class="text-center mb-20">
			<h2 class="text-4xl font-bold tracking-tight mb-4">Simple, transparent pricing</h2>
			<p class="text-xl text-gray-500">Choose the tier that fits your growth stage.</p>
		</div>
		<div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
			<!-- Plus -->
			<div class="p-10 rounded-3xl border border-gray-100 flex flex-col">
				<h3 class="text-2xl font-bold mb-2">Plus</h3>
				<p class="text-gray-500 mb-8">Perfect for early pre-seed exploration.</p>
				<div class="mb-8">
					<span class="text-5xl font-bold">$199</span>
					<span class="text-gray-400">/mo</span>
				</div>
				<ul class="space-y-4 mb-10 flex-1">
					<li class="flex items-center gap-3 text-gray-600">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
						Limited generations
					</li>
					<li class="flex items-center gap-3 text-gray-600">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
						All platform features
					</li>
					<li class="flex items-center gap-3 text-gray-600">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
						Competition monitoring
					</li>
				</ul>
				<button class="w-full py-4 rounded-full border border-black font-bold hover:bg-black hover:text-white transition-all">Get Started</button>
			</div>
			<!-- Pro -->
			<div class="p-10 rounded-3xl bg-black text-white flex flex-col relative overflow-hidden">
				<div class="absolute top-6 right-6 bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
				<h3 class="text-2xl font-bold mb-2">Pro</h3>
				<p class="text-gray-400 mb-8">For founders ready to scale their presence.</p>
				<div class="mb-8">
					<span class="text-5xl font-bold">$499</span>
					<span class="text-gray-400">/mo</span>
				</div>
				<ul class="space-y-4 mb-10 flex-1">
					<li class="flex items-center gap-3 text-gray-300">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
						Maximum generations
					</li>
					<li class="flex items-center gap-3 text-gray-300">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
						Code export (Annual plans)
					</li>
					<li class="flex items-center gap-3 text-gray-300">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
						Team collaboration
					</li>
				</ul>
				<button class="w-full py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all">Get Started</button>
			</div>
		</div>
		<p class="text-center text-gray-400 text-sm mt-12">Fair use policy applies to generation limits. Monthly and annual billing options available.</p>
	</section>

	<!-- About / Founder -->
	<section id="about" class="max-w-7xl mx-auto px-6 py-32 border-t border-gray-100">
		<div class="grid lg:grid-cols-2 gap-24 items-center">
			<div class="order-2 lg:order-1">
				<div class="bg-gray-50 p-12 rounded-[40px]">
					<h2 class="text-3xl font-bold mb-6">Built by Thilo Konzok</h2>
					<p class="text-lg text-gray-600 mb-6 leading-relaxed">
						Thilo designed at Airbnb during its hypergrowth phase (2011) and has since advised over 30 startups on positioning. He experienced firsthand how founders struggle to match their vision with external perception.
					</p>
					<p class="text-lg text-gray-600 mb-8 leading-relaxed">
						As a General Partner and Sequoia Arc Advisor, he built Uncommon to solve branding for the next generation of founders. He previously founded Home.
					</p>
					<div class="flex items-center gap-6">
						<div class="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
							<img src="/generated/image-a-professional-authentic-portrait-of-a-t-1768413787009-2.webp" alt="Thilo Konzok" class="w-full h-full object-cover" />
						</div>
						<div>
							<p class="font-bold">Thilo Konzok</p>
							<p class="text-sm text-gray-500">Founder & GP, Uncommon</p>
						</div>
					</div>
				</div>
			</div>
			<div class="order-1 lg:order-2">
				<h2 class="text-4xl font-bold tracking-tight mb-8">Backed by a $4M Fund</h2>
				<p class="text-lg text-gray-500 leading-relaxed mb-6">
					Uncommon isn't just a tool; it's an investment partner. We launched with a $4 million fund anchored by Sequoia to invest in the very founders using our platform.
				</p>
				<p class="text-lg text-gray-500 leading-relaxed mb-10">
					We believe that when founders look professional from day one, they are more likely to succeed in raising capital and hiring top talent.
				</p>
				<div class="grid grid-cols-2 gap-8">
					<div>
						<p class="text-4xl font-bold mb-1">$4M</p>
						<p class="text-sm text-gray-400 uppercase font-bold tracking-wider">Fund Size</p>
					</div>
					<div>
						<p class="text-4xl font-bold mb-1">Sequoia</p>
						<p class="text-sm text-gray-400 uppercase font-bold tracking-wider">Anchor Partner</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section class="max-w-7xl mx-auto px-6 py-32">
		<div class="bg-black text-white p-16 md:p-24 rounded-[48px] text-center relative overflow-hidden">
			<div class="relative z-10">
				<h2 class="text-4xl md:text-6xl font-bold tracking-tight mb-8">Ready to look Uncommon?</h2>
				<p class="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
					Join the next generation of Sequoia-backed founders. Generate your brand system, website, and decks today.
				</p>
				<button class="bg-white text-black px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-200 transition-colors">
					Start Your Identity
				</button>
			</div>
			<!-- Subtle background pattern -->
			<div class="absolute inset-0 opacity-10 pointer-events-none">
				<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
					<defs>
						<pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
							<path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" stroke-width="0.5"/>
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#grid)" />
				</svg>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="max-w-7xl mx-auto px-6 py-20 border-t border-gray-100">
		<div class="flex flex-col md:flex-row justify-between items-start gap-12">
			<div>
				<div class="flex items-center gap-2 mb-6">
					<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9.09008 8.58393C9.59857 9.09971 10.4308 9.09971 10.9393 8.58393L14.8489 4.61827C15.3562 4.11093 15.6413 3.42283 15.6413 2.70534C15.6413 1.98786 15.3562 1.29976 14.8489 0.79242C14.3416 0.285081 13.6535 6.10352e-05 12.936 6.10352e-05C12.2185 6.10352e-05 11.5304 0.285081 11.0231 0.79242L10.8995 0.907454C10.401 1.37177 9.62834 1.37177 9.12979 0.907454L9.00627 0.79242C8.49893 0.285081 7.81083 6.10352e-05 7.09334 6.10352e-05C6.37586 6.10352e-05 5.68776 0.285081 5.18042 0.79242C4.67308 1.29976 4.38806 1.98786 4.38806 2.70534C4.38806 3.42283 4.67308 4.11093 5.18042 4.61827L9.09008 8.58393Z" fill="currentColor"/>
						<path d="M11.4161 8.96379C10.9004 9.47229 10.9004 10.3045 11.4161 10.813L15.3818 14.7226C15.8891 15.23 16.5772 15.515 17.2947 15.515C18.0122 15.515 18.7003 15.23 19.2076 14.7226C19.715 14.2153 20 13.5272 20 12.8097C20 12.0922 19.715 11.4041 19.2076 10.8968L19.0926 10.7733C18.6283 10.2747 18.6283 9.50206 19.0926 9.0035L19.2076 8.87999C19.715 8.37265 20 7.68455 20 6.96706C20 6.24958 19.715 5.56148 19.2076 5.05414C18.7003 4.5468 18.0122 4.26178 17.2947 4.26178C16.5772 4.26178 15.8891 4.5468 15.3818 5.05414L11.4161 8.96379Z" fill="currentColor"/>
						<path d="M10.9099 11.1935C10.4014 10.6778 9.56924 10.6778 9.06075 11.1935L5.15109 15.1592C4.64375 15.6665 4.35873 16.3546 4.35873 17.0721C4.35873 17.7896 4.64375 18.4777 5.15109 18.985C5.65843 19.4924 6.34653 19.7774 7.06401 19.7774C7.7815 19.7774 8.4696 19.4924 8.97694 18.985L9.10045 18.87C9.59901 18.4057 10.3717 18.4057 10.8702 18.87L10.9937 18.985C11.5011 19.4924 12.1892 19.7774 12.9067 19.7774C13.6241 19.7774 14.3122 19.4924 14.8196 18.985C15.3269 18.4777 15.6119 17.7896 15.6119 17.0721C15.6119 16.3546 15.3269 15.6665 14.8196 15.1592L10.9099 11.1935Z" fill="currentColor"/>
						<path d="M8.58387 10.8137C9.09965 10.3052 9.09965 9.47299 8.58387 8.9645L4.61821 5.05484C4.11087 4.5475 3.42277 4.26248 2.70528 4.26248C1.9878 4.26248 1.2997 4.5475 0.79236 5.05484C0.285021 5.56218 1.21501e-06 6.25028 1.12093e-06 6.96776C1.02684e-06 7.68525 0.285021 8.37335 0.79236 8.88069L0.907394 9.0042C1.37171 9.50276 1.37171 10.2754 0.907394 10.774L0.79236 10.8975C0.285021 11.4048 4.48842e-07 12.0929 3.54755e-07 12.8104C2.60668e-07 13.5279 0.28502 14.216 0.792359 14.7233C1.2997 15.2307 1.9878 15.5157 2.70528 15.5157C3.42277 15.5157 4.11087 15.2307 4.61821 14.7233L8.58387 10.8137Z" fill="currentColor"/>
					</svg>
					<span class="text-xl font-bold tracking-tight">Uncommon</span>
				</div>
				<p class="text-gray-500 max-w-xs">
					Automated brand systems for pre-seed founders. Built for three outcomes: sell, hire, raise.
				</p>
			</div>
			<div class="grid grid-cols-2 sm:grid-cols-3 gap-16">
				<div>
					<h4 class="font-bold mb-6">Product</h4>
					<ul class="space-y-4 text-gray-500 text-sm">
						<li><a href="#features" class="hover:text-black">Features</a></li>
						<li><a href="#pricing" class="hover:text-black">Pricing</a></li>
						<li><a href="#" class="hover:text-black">Showcase</a></li>
					</ul>
				</div>
				<div>
					<h4 class="font-bold mb-6">Company</h4>
					<ul class="space-y-4 text-gray-500 text-sm">
						<li><a href="#about" class="hover:text-black">About</a></li>
						<li><a href="#" class="hover:text-black">Blog</a></li>
						<li><a href="#" class="hover:text-black">Careers</a></li>
					</ul>
				</div>
				<div>
					<h4 class="font-bold mb-6">Social</h4>
					<ul class="space-y-4 text-gray-500 text-sm">
						<li><a href="#" class="hover:text-black">Twitter</a></li>
						<li><a href="#" class="hover:text-black">LinkedIn</a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
			<p>© 2024 Uncommon. All rights reserved.</p>
			<div class="flex gap-8">
				<a href="#" class="hover:text-black">Privacy Policy</a>
				<a href="#" class="hover:text-black">Terms of Service</a>
			</div>
		</div>
	</footer>
</div>


