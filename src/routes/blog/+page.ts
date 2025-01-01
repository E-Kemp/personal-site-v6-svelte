import type { SvelteComponent } from 'svelte';

export async function load() {
	const allPostFiles = import.meta.glob<{
		default: SvelteComponent;
		metadata: Record<string, any>;
	}>('/src/content/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allTags = new Array<string>();

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(13, -3);

			metadata.tags.forEach((tag: string) => {
				if (!allTags.includes(tag)) allTags.push(tag);
			});

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	allPosts.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());

	return { allPosts, allTags };
}
