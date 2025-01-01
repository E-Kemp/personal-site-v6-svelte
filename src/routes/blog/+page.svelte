<script lang="ts">
	import Breadcrumbs from '../../components/Breadcrumbs.svelte';
	import Button from '../../components/Button.svelte';
	import Chevron from '$lib/assets/icons/chevron.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let showTags = $state(false);
	let filterTags = $state([...data.allTags.map((tag) => ({ tag, enabled: false }))]);
	let filterPosts = $state([...data.allPosts.map((post) => ({ ...post, enabled: true }))]);

	const toggleTag = (target: string) => {
		filterTags.forEach((tag, index) => {
			if (tag.tag === target) filterTags[index].enabled = !filterTags[index].enabled;
		});

		const currentFilters = filterTags.filter((tag) => tag.enabled);
		if (currentFilters.length > 0)
			filterPosts.forEach(
				(post) =>
					(post.enabled = currentFilters.every(({ tag: filter }) =>
						post.meta.tags.includes(filter)
					))
			);
		else filterPosts.forEach((post) => (post.enabled = true));
	};
</script>

<div class="flex w-full flex-col items-center">
	<Breadcrumbs breadcrumbs={[{ href: '/', label: 'Home' }, { label: 'Blog' }]} />
	<div class="flex w-full max-w-xl flex-col items-start">
		<div class="mb-6 flex w-full flex-col items-start gap-2">
			<button
				class="group text-md inline-flex gap-1 font-medium text-gunmetal hover:underline"
				onclick={() => {
					showTags = !showTags;
				}}
                data-show={showTags === true}
				>Show tags<Chevron className="w-6 h-6 group-hover:rotate-180 group-data-[show=true]:rotate-180 transition-all duration-300 ease-in-out" /></button
			>
			{#if showTags}
				<ul class="flex max-w-md flex-row flex-wrap items-start justify-start gap-1">
					{#each filterTags as tag}
						<li>
							<Button pill toggle={tag.enabled} onclick={() => toggleTag(tag.tag)}>{tag.tag}</Button
							>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
		<ul class="flex flex-col gap-6">
			{#each filterPosts as post}
				{#if post.enabled}
					<div class="flex flex-col gap-2">
						<div class="flex flex-row justify-between">
							<a
								class="font-parkinsans text-xl font-semibold text-gunmetal hover:underline"
								href={`/blog/${post.path}`}>{post.meta.title}</a
							>
							<p class="text-md font-semibold text-bittersweet">
								{new Date(post.meta.date).toLocaleDateString()}
							</p>
						</div>
						<ul class="flex flex-row flex-wrap gap-1">
							{#each post.meta.tags as tag}
								<Button disabled pill>{tag}</Button>
							{/each}
						</ul>
					</div>
				{/if}
			{/each}
		</ul>
	</div>
</div>
