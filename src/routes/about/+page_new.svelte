<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import StakeholderGrid from "$lib/components/layout/StakeholderGrid.svelte";
	import Story from "./Story.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";

	// Constants
	const values = [
  {
    title: "Build real things",
    description: "We value practical output over theory. Shipping products that actually help startups win comes first—always."
  },
  {
    title: "Design drives everything",
    description: "We believe great design isn't surface level. It's how our tools work, look, and feel for everyone. Designers, engineers, and founders all shape the product."
  },
  {
    title: "Bias to action",
    description: "We move quickly, experiment openly, and adjust in real time. Good ideas get tested, shipped, and improved—not endlessly debated."
  },
  {
    title: "Collaborate ambitiously",
    description: "Big goals need many perspectives. We work across roles and backgrounds, challenging each other to build tools that redefine what's possible for new companies."
  }
];
</script>

<!-- Story Section -->
<Story
	paragraphs={[
		"Every founder knows the gap. Inside your head: a billion-dollar vision. On your screen: everything looks unfinished. This disconnect kills companies before they start. Customers bounce. Investors pass. Talent goes elsewhere.",
		"Thilo watched this happen too many times. Great companies dying in PowerPoint purgatory while designers took months and founders pivoted twice. The gap wasn't about aesthetics. It was about speed.",
		"Uncommon is your company's instant designer. Feed it your memo, get back everything: website, pitch deck, ads, announcements. Not templates. Real design that understands your market, your competitors, your story."
	]}
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