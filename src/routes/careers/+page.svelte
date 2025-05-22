<script lang="ts">
	// Types

	// Components
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Card from "$lib/components/ui/Card.svelte";
	import JobList, { type JobOpening } from "./JobList.svelte";

	// Icons
	import IconBriefcase from "~icons/lucide/briefcase";
	import IconUsers from "~icons/lucide/users";
	import IconHeart from "~icons/lucide/heart";
	import IconGlobe from "~icons/lucide/globe";

	// Constants
	const SECTION_BASE_CLASSES = "section-py section-px container mx-auto";
	const GRADIENT_BG_CLASSES =
		"bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800";
	const ICON_CONTAINER_CLASSES =
		"bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400 flex items-center justify-center rounded-full";

	const benefits = [
  {
    title: "Have an outsized impact",
    description: "Help shape how the next generation of startups build, launch, and grow—your work will be seen and used by ambitious founders every day.",
    icon: IconBriefcase
  },
  {
    title: "Grow faster than you thought possible",
    description: "Work directly with experienced builders, top founders, and see the outcome of your work in the wild. You’ll learn more in a year here than anywhere else.",
    icon: IconUsers
  },
  {
    title: "Join early and help set the culture",
    description: "You’re not just joining a company—you’re helping define the standards, practices, and DNA of a new category. Credit, ownership, and real responsibility included.",
    icon: IconHeart
  }
];

	const openings: JobOpening[] = [
		// Engineering
		{
			title: "Senior Frontend Developer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Backend Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Design Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Design
		{
			title: "UX/UI Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Product
		{
			title: "Product Manager",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Analyst",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Marketing
		{
			title: "Marketing Specialist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Content Strategist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Social Media Manager",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		}
	];

	const employeeTestimonials = [
  {
    name: "Michael Chen",
    position: "Software Developer",
    company: "Engineering Team",
    quote:
      "The culture makes you want to bring your best every day. I always feel supported by my team, and we’re encouraged to try bold ideas. Collaboration here feels natural and energizing.",
    image: "/generated/image-an-asian-male-software-developer-smiling.webp"
  },
  {
    name: "Priya Sharma",
    position: "Lead Product Designer",
    company: "Design Team",
    quote:
      "I get real ownership of my work — and the chance to help shape the product. Growth isn’t just encouraged, it’s expected. I came for the challenge and stayed for the inspiration.",
    image: "/generated/image-a-south-asian-female-senior-designer-wit.webp"
  },
  {
    name: "Imani Davis",
    position: "Marketing Coordinator",
    company: "Marketing Team",
    quote:
      "From day one, I felt welcome and valued. I’ve learned so much and know I can grow quickly here—everyone actually wants you to succeed. Our team celebrates wins and lifts each other up.",
    image: "/generated/image-a-black-female-junior-marketing-speciali.webp"
  }
];

	const processSteps = [
  {
    step: 1,
    title: "Short application",
    description:
      "Send a quick intro and share your work (link to portfolio, repo, or whatever shows your craft — no long forms needed)."
  },
  {
    step: 2,
    title: "Async task or portfolio review",
    description:
      "If there’s a fit, we’ll either review your work or send a short async challenge tailored to what you’d do here."
  },
  {
    step: 3,
    title: "Quick chat with founder/team",
    description:
      "A conversation to dive deeper into your approach, strengths, and what you’re excited about." 
  },
  {
    step: 4,
    title: "Paid trial or jam session",
    description:
      "Work with us on a scoped project or problem — see how we work together, and get paid for your time."
  },
  {
    step: 5,
    title: "Offer",
    description:
      "If it’s a match, you’ll receive an offer right away. We keep things clear and fast every step of the way."
  },
];

	const values = [
  {
    icon: IconHeart,
    title: "Bias for action",
    description: "Move fast, stay focused, and prioritize what’s needed today over future hypotheticals. We believe in sharp execution and constant momentum."
  },
  {
    icon: IconUsers,
    title: "Clear is kind",
    description: "We value direct feedback, clear writing, and transparency—so everyone can do their best work without second-guessing."
  },
  {
    icon: IconGlobe,
    title: "Ownership at every level",
    description: "No permission needed. Everyone is trusted to lead, try bold ideas, and push the company forward."
  }
];
</script>

<!-- Hero Section -->

<SecondaryHero
  title="Build the future for founders"
  subtitle="Grow fast. Build together. Make impact."
  image="/generated/image-a-diverse-group-of-young-professionals-e.webp"
/>

<!-- Why Join Us Section -->
<section class={SECTION_BASE_CLASSES}>
	<SectionHeader title="Why join us?" subtitle="Build your career while making an impact" />

	<div class="mt-16 grid gap-4 md:grid-cols-3">
		{#each benefits as benefit}
			<Card {...benefit} />
		{/each}
	</div>
</section>

<!-- Culture Section -->
<Culture {values} />

<Testimonials testimonials={employeeTestimonials} />

<!-- Application Process -->
<section class={SECTION_BASE_CLASSES}>
	<div class="mx-auto">
		<h2 class="text-title1 mb-16">Our application process</h2>

		<div class="grid gap-12 md:grid-cols-3">
			{#each processSteps as { step, title, description }, i}
				<div class="flex flex-col">
					<div class="{ICON_CONTAINER_CLASSES} mb-6 size-11">
						<span class="text-headline">{step}</span>
					</div>
					<h3 class="text-headline mb-3">{title}</h3>
					<p class="text-body text-emphasis-low">{description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
<!-- Current Openings Section -->
<section class={GRADIENT_BG_CLASSES}>
	<div class="section-px section-py container mx-auto grid w-full items-start lg:grid-cols-2">
		<SectionHeader title="Current openings" subtitle="Find your perfect role" />

		<JobList {openings} />
	</div>
</section>
