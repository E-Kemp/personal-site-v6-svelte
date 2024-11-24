import type { SvelteComponent } from 'svelte';

export async function load() {
	const allPostFiles = import.meta.glob<{
		default: SvelteComponent;
		metadata: Record<string, any>;
	}>('/src/content/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(13, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return { allPosts };
}
