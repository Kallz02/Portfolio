import { error } from '@sveltejs/kit';

export const load = async ({ params }: { params: { post: string } }): Promise<any> => {
	try {
		const post = await import(`../../../lib/posts/${params.post}.md`);
		const content = post.default;
		const length = content.length;
		return {
			PostContent: post.default,
			meta: { ...post.metadata, slug: params.post },
			length1: length
		};
	} catch (err: any) {
		error(404, err);
	}
};
