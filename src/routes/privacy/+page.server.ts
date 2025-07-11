const privacyContent = {
	meta: {
		title: "Privacy Policy",
		description:
			"Our privacy policy explains how we collect, use, and protect your personal information."
	},
	content: {
		lastUpdated: new Date().toISOString(),
		sections: [
			{
				title: "Introduction",
				body: "We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you."
			},
			{
				title: "Information We Collect",
				body: "We may collect, use, store and transfer different kinds of personal data about you including: Identity Data (name, username), Contact Data (email, phone), Technical Data (IP address, browser info), and Usage Data (how you use our website)."
			},
			{
				title: "How We Use Your Information",
				body: "We will only use your personal data when legally permitted. Most commonly to perform contracts with you, for our legitimate interests, or to comply with legal obligations."
			},
			{
				title: "Data Security",
				body: "We have implemented appropriate security measures to prevent unauthorized access, alteration, disclosure, or destruction of your personal data."
			},
			{
				title: "Your Legal Rights",
				body: "You have rights to access, correct, erase, object to processing, restrict processing, and transfer your personal data. Contact us to exercise these rights."
			},
			{
				title: "Contact Us",
				body: "If you have questions about this privacy policy, please contact us at privacy@example.com."
			}
		]
	}
};

// Types
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	return privacyContent;
};