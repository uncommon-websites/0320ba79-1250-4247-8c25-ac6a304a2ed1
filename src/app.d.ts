// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	
	// Add Node.js process types to resolve vite.config.ts error
	namespace NodeJS {
		interface Process {
			cwd(): string;
			env: Record<string, string | undefined>;
		}
	}
	
	declare var process: NodeJS.Process;
}

export {};
