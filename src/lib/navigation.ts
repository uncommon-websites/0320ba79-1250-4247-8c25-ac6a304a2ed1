/**
 * DO NOT REMOVE THIS COMMENT
 * @remarks
 * Navigation Structure Example:
 *
 * **Product**
 * - Overview
 * - Solutions
 * - Use Cases
 * - Pricing
 * ---
 * **Resources**
 * - Blog
 * - Playbooks
 * - Customer stories
 * - Webinars
 * - Darwin Academy
 * - Documentation
 * - Marketplaces
 * - Community
 * ---
 * **Company**
 * - Careers
 * - About us
 * - News
 * - Legal
 * - Security
 * - Events
 * - Contact
 * - Social media
 */

// Types
export type NavItem = {
	label: string;
	href?: string;
	image?: string;
	target?: string;
	showInNav?: boolean;
	showInFooter?: boolean;

	children?: (Omit<NavItem, "children" | "image"> & {
		image?: string;
		description?: string;
		target?: string;
		showInNav?: boolean;
		showInFooter?: boolean;
	})[];
};

export const cta = {
	label: "Book demo",
	href: "/"
};

export const navigation: NavItem[] = [
	{
		label: "Pricing",
		href: "/pricing",
		showInNav: true,
		showInFooter: false
	},
	{
		label: "Use Cases",
		showInNav: true,
		showInFooter: true,
		children: [
			{
        label: "Find early traction",
        href: "/use-cases/product-market-fit",
        image: "/generated/image-a-diverse-startup-founder-team-collabora.webp",
        description: "Launch messaging and landing pages to validate your idea and get real signal fast.",
        showInNav: true,
        showInFooter: true
      },
      {
        label: "Raise your next round",
        href: "/use-cases/fundraising",
        image: "/generated/image-a-confident-startup-founder-delivering-a.webp",
        description: "Build investor decks that tell a sharp story — clearly, visually and confidently.",
        showInNav: true,
        showInFooter: true
      },
      {
        label: "Attract great talent",
        href: "/use-cases/team-recruiting",
        image: "/generated/image-a-small-tech-team-welcoming-new-hires-in.webp",
        description: "Design branded job pages that help you pitch your mission and convert top candidates.",
        showInNav: true,
        showInFooter: true
      }
		]
	},
	{
		label: "Company",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "About us",
				href: "/about",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Pricing",
				href: "/pricing",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Careers",
				href: "/careers",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Privacy",
				href: "/privacy",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Terms & Conditions",
				href: "/terms",
				showInNav: true,
				showInFooter: false
			}
		]
	},
	{
		label: "More",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "Privacy",
				href: "/legal/privacy",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Terms",
				href: "/terms",
				showInNav: false,
				showInFooter: true
			}
			// Social media might be handled differently, not typically a nav item
		]
	}
];
// .sort((a, b) => (b.children?.length || 0) - (a.children?.length || 0));
