import { error } from '@sveltejs/kit';

export const load = async ({ params }: { params: { post: string } }): Promise<any> => {
  try {
    const post = await import(`../../../lib/posts/${params.post}.md`);

    return {
      PostContent: post.default,
      meta: { ...post.metadata, slug: params.post },
    };
  } catch (err: any) {
    throw error(404, err);
  }
};

