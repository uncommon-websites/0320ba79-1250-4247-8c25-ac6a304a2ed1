<script lang="ts">
	// No script needed for static recreation
</script>

<div class="min-h-screen bg-white text-black font-sans px-6 py-8 md:px-10 md:py-10 selection:bg-gray-200">
	<!-- Header -->
	<header class="grid grid-cols-2 md:grid-cols-12 gap-y-4 text-[15px] leading-tight mb-32 md:mb-48 font-normal">
		<div class="col-span-1 md:col-span-3">
			Christopher Doyle & Co.
		</div>
		
		<div class="col-span-1 md:col-span-2 md:col-start-4">
			<a href="#" class="hover:opacity-60 transition-opacity">Projects</a>
		</div>
		
		<div class="col-span-1 md:col-span-2 md:col-start-6">
			<a href="#" class="hover:opacity-60 transition-opacity">Profile</a>
		</div>
		
		<div class="col-span-1 md:col-span-2 md:col-start-10 text-right md:text-left">
			<button class="hover:opacity-60 transition-opacity cursor-pointer">Lights Off</button>
		</div>
		
		<div class="col-span-1 md:col-span-1 md:col-start-12 text-right">
			<a href="#" class="hover:opacity-60 transition-opacity">Contact</a>
		</div>
	</header>

	<!-- Hero -->
	<section class="grid grid-cols-1 md:grid-cols-12 mb-32 md:mb-48">
		<div class="col-span-1 md:col-span-9 md:col-start-4 text-[28px] md:text-[32px] leading-[1.15] tracking-tight font-normal">
			<p>
				We are a team of independent, globally-recognised, idea-led creatives specialising in brand identity, creative direction, and digital design. We collaborate with leading creatives in a variety of fields to help transform companies, products, and brands.
			</p>
		</div>
	</section>

	<!-- Projects -->
	<section class="flex flex-col gap-24 md:gap-32 mb-32">
		<!-- Project 1 -->
		<article class="grid grid-cols-1 md:grid-cols-12">
			<div class="col-span-1 md:col-span-9 md:col-start-4 grid grid-cols-1 md:grid-cols-12 mb-3 text-[15px] gap-y-1 items-baseline">
				<div class="col-span-1 md:col-span-4 font-normal">
					Tsu Lange Yor
				</div>
				<div class="col-span-1 md:col-span-8 text-gray-400 font-normal">
					Brand identity, art direction, motion, and digital design for elevated homewares and fragrances.
				</div>
			</div>
			<div class="col-span-1 md:col-span-9 md:col-start-4 w-full aspect-[16/10] bg-gray-200 overflow-hidden relative group cursor-pointer">
				<img 
					src="https://images.unsplash.com/photo-1615887023516-9b6c500c9c74?q=80&w=2500&auto=format&fit=crop&sat=-100" 
					alt="Tsu Lange Yor Campaign" 
					class="w-full h-full object-cover grayscale brightness-90 transition-transform duration-700 group-hover:scale-105"
				/>
				<div class="absolute inset-0 flex items-center justify-center pointer-events-none">
					<span class="text-white font-bold text-6xl md:text-8xl tracking-widest opacity-90">TSU LANGE YOR</span>
				</div>
			</div>
		</article>

		<!-- Project 2 -->
		<article class="grid grid-cols-1 md:grid-cols-12">
			<div class="col-span-1 md:col-span-9 md:col-start-4 grid grid-cols-1 md:grid-cols-12 mb-3 text-[15px] gap-y-1 items-baseline">
				<div class="col-span-1 md:col-span-4 font-normal">
					New Aim
				</div>
				<div class="col-span-1 md:col-span-8 text-gray-400 font-normal">
					Brand identity, motion, and illustration for Australia's largest and fastest-growing ecommerce company.
				</div>
			</div>
			<div class="col-span-1 md:col-span-9 md:col-start-4 w-full aspect-[16/10] bg-green-800 overflow-hidden relative group cursor-pointer">
				<img 
					src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2500&auto=format&fit=crop" 
					alt="New Aim Hoodie" 
					class="w-full h-full object-cover opacity-60 mix-blend-multiply bg-green-700 transition-transform duration-700 group-hover:scale-105"
				/>
				<div class="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
					<span class="text-[#4ade80] font-bold text-[10rem] md:text-[14rem] -rotate-12 translate-y-10 tracking-tighter leading-none">newaim</span>
				</div>
			</div>
		</article>

		<!-- Project 3 -->
		<article class="grid grid-cols-1 md:grid-cols-12">
			<div class="col-span-1 md:col-span-9 md:col-start-4 grid grid-cols-1 md:grid-cols-12 mb-3 text-[15px] gap-y-1 items-baseline">
				<div class="col-span-1 md:col-span-4 font-normal">
					AirOxy
				</div>
				<div class="col-span-1 md:col-span-8 text-gray-400 font-normal">
					Brand identity, motion, and collateral for a new innovator in streamlined ecommerce solutions.
				</div>
			</div>
			<div class="col-span-1 md:col-span-9 md:col-start-4 w-full aspect-[16/10] bg-[#2a6b8f] overflow-hidden relative group cursor-pointer">
				<img 
					src="https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?q=80&w=2500&auto=format&fit=crop" 
					alt="AirOxy Sky" 
					class="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
				/>
				<div class="absolute inset-0 flex items-center justify-center pointer-events-none">
					<div class="flex items-center gap-4 text-white">
						<div class="w-10 h-10 md:w-14 md:h-14 border-[5px] border-white rounded-t-full rounded-bl-full rotate-45"></div>
						<span class="font-bold text-5xl md:text-7xl tracking-tighter">AIROXY<sup class="text-2xl md:text-3xl top-[-1.5em]">TM</sup></span>
					</div>
				</div>
			</div>
		</article>

		<div class="grid grid-cols-1 md:grid-cols-12 text-[15px]">
			<div class="col-span-1 md:col-span-2 md:col-start-4">
				<a href="#" class="hover:opacity-60 transition-opacity">More projects</a>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="border-t border-gray-200 pt-6 md:pt-8 text-[13px] leading-relaxed text-gray-400 font-normal">
		<div class="grid grid-cols-1 md:grid-cols-12 gap-y-8">
			<div class="col-span-1 md:col-span-3">
				&copy;Christopher Doyle & Co.
			</div>

			<div class="col-span-1 md:col-span-2 md:col-start-4 flex flex-col gap-0.5">
				<a href="#" class="hover:text-black transition-colors">Instagram</a>
				<a href="#" class="hover:text-black transition-colors">Twitter</a>
				<a href="#" class="hover:text-black transition-colors">LinkedIn</a>
			</div>

			<div class="col-span-1 md:col-span-3 md:col-start-6">
				<p>Suite 405/46 Kippax St.</p>
				<p>Surry Hills</p>
				<p>Sydney 2010</p>
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-12 mt-12 md:mt-24">
			<div class="col-span-1 md:col-span-6 md:col-start-4 text-gray-400">
				<p>
					We acknowledge Aboriginal & Torres Strait Islander peoples as the traditional custodians of country throughout Australia. Our studio sits on the lands of the Gadigal people of the Eora Nation and we pay our respects to their elders past, present, and emerging. Christopher Doyle & Co. is a proudly and intentionally inclusive company and supporter of the LGBTIQ+ community.
				</p>
			</div>
		</div>
	</footer>
</div>

