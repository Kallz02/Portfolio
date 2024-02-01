declare global {
	namespace App {
		interface Error { }
		interface Locals { }
		interface PageData { }
		interface Platform { }
		interface Global {
			__myModule: typeof import('$lib/pics/*');
		}
	}
}

declare module '$lib/pics/*' {
	const meta: Object[];
	export default meta;
}

global.__myModule = require('$lib/pics/*');

export { };
