import { postsPerPage } from '$lib/config';
import fetchPosts from '$lib/assets/js/fetchPosts';
import { json } from '@sveltejs/kit';

export const prerender: boolean = true;

export const GET = async ({ params }: { params: { page: number } }): Promise<any> => {
	const { page = 1 } = params;

	const options = {
		offset: (page - 1) * postsPerPage,
		limit: postsPerPage
	};

	const { posts } = await fetchPosts(options);

	return json(posts);
};
