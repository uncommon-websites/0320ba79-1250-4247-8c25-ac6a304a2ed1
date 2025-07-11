const termsData = {
	meta: {
		title: "Terms of Service",
		description: "Our terms of service outline the rules and regulations for using our website."
	},
	content: {
		lastUpdated: new Date().toISOString(),
		sections: [
			{
				title: "Acceptance of Terms",
				body: "By accessing this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site."
			},
			{
				title: "Use License",
				body: "Permission is granted to temporarily download one copy of materials for personal, non-commercial viewing only. This license shall automatically terminate if you violate any of these restrictions."
			},
			{
				title: "Disclaimer",
				body: "The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties including implied warranties of merchantability or fitness for a particular purpose."
			},
			{
				title: "Limitations",
				body: "In no event shall we or our suppliers be liable for any damages arising out of the use or inability to use the materials on our website."
			},
			{
				title: "Revisions",
				body: "We may revise these terms at any time without notice. By using this website, you agree to be bound by the current version of these Terms of Service."
			},
			{
				title: "Governing Law",
				body: "These terms shall be governed by and construed in accordance with the laws, and you submit to the exclusive jurisdiction of the courts in that location."
			}
		]
	}
};

// Types
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	return termsData;
};