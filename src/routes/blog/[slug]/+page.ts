import type { PageLoadEvent } from "./$types";

export async function load({ params }: PageLoadEvent) {
	const post = await import(`../../../content/${params.slug}.md`);
	const { title, date } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date
	};
}
