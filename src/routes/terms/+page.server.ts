const termsData = {
	meta: {
		title: "Terms of Service",
		description: "Our terms of service outline the rules and regulations for using our website."
	}
};

// Types
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	return termsData;
};