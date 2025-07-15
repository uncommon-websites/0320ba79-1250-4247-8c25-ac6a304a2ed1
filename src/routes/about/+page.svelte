<script lang=\"ts\">
\t\/\/ About page with all sections removed
\/\/ imports removed
\/\/ removed

	// Components
	import StakeholderGrid from "$lib/components/layout/StakeholderGrid.svelte";
	import Story from "./Story.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";
	import Summary from "$lib/components/layout/Summary.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Constants
	const values = [
  {
    title: "Build real things",
    description: "We value practical output over theory. Shipping products that actually help startups win comes first—always."
  },
  {
    title: "Design drives everything",
    description: "We believe great design isn’t surface level. It’s how our tools work, look, and feel for everyone. Designers, engineers, and founders all shape the product."
  },
  {
    title: "Bias to action",
    description: "We move quickly, experiment openly, and adjust in real time. Good ideas get tested, shipped, and improved—not endlessly debated."
  },
  {
    title: "Collaborate ambitiously",
    description: "Big goals need many perspectives. We work across roles and backgrounds, challenging each other to build tools that redefine what’s possible for new companies."
  }
];
</script>

<!-- All sections have been removed as requested -->
<Story
	paragraphs={[
		"Startups don’t fail because founders can’t code—they fail because they can’t communicate. In the early days, everything is on your shoulders. You’re building the product, meeting investors, making hires—and somehow also expected to write taglines, design decks, and launch landing pages. Most founders spend weeks trying to look and sound like a real company, when what they really need is something that just works.",
		"That’s why we built Uncommon. After founding and advising multiple startups, Thilo Konzok saw the same problem again and again: visionary founders stuck trying to be designers and marketers. Uncommon is an AI Designer built specifically for startups. It creates your website, pitch deck, job posts, fundraising pages and more—in minutes, not weeks. Just tell Uncommon what your startup does, and it does the rest.",
		"Unlike traditional tools, Uncommon doesn’t start with a blank canvas. It starts with intent: you’re trying to raise, hire, or sell. Then it builds what you need—to win that investor meeting, attract the right candidate, launch with credibility, or explain your vision clearly. What used to take a team now takes a few inputs. It's not about decorating, it's about doing the real work faster—and looking great while you do it."
	]}
/>

<!-- Summary Section -->
<Summary
	title="Our mission"
	text="We believe every startup deserves to look and sound like the company they're becoming, not the company they are today. Uncommon transforms how founders communicate their vision—turning weeks of design work into minutes of focused input. Because when you're building the future, your tools should work as fast as your ideas."
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- StakeholderGrid Section -->
<StakeholderGrid
  stakeholderType="team"
  title="Meet the founder."
  subtitle="Driven by vision, built for founders."
  stakeholders={[
    {
      name: "Thilo Konzok",
      position: "Founder",
      bio: "Founder, designer, and operator building tools for the next generation of startups.",
      image: "/generated/image-a-professional-headshot-of-thilo-konzok-.webp"
    }
  ]}
/>

<!-- Customer and investor proof is highlighted in copy above, no StakeholderGrid needed for investors -->

<!-- CTA Section -->
<CallToAction
  title="Join Uncommon. Build the tools behind tomorrow's startups."
  subtitle="World-class builders, this is your invitation"
  description="Help us shape how startups launch and scale—work on AI, design, and product together. Make an impact from day one. See open roles and join our team."
  callsToAction={[{ href: '/careers', label: 'See open roles', variant: 'primary' }, { href: '/contact', label: 'Get in touch', variant: 'secondary' }]}
/>
