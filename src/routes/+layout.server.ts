// +layout.server.js or +layout.server.ts
export const prerender = true; // or false, depending on your desired prerendering behavior
export const load = async ({ url }) => {
	try {
		return {
			path: url.pathname
		};
	} catch (err) {
		console.log(err);
	}
};
