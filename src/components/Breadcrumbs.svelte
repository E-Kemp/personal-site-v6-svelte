<script lang="ts">
	import Button from './Button.svelte';

	type BreadcrumbsProps = {
		breadcrumbs: {
			label: string;
			href?: string;
		}[];
	};

	const { breadcrumbs }: BreadcrumbsProps = $props();
</script>

<nav
	class="mb-6 flex h-16 w-full flex-row items-center justify-center bg-gunmetal text-2xl text-beige"
>
	<ul class="inline-flex gap-4">
		{#each breadcrumbs as crumb, index}
			<li class="inline-flex gap-4 items-center">
				{#if index !== 0}
					<p class={!crumb.href ? 'text-bittersweet' : undefined}>{'/'}</p>
				{/if}
				{#if crumb.href}
					<a href={crumb.href}><Button small>{crumb.label}</Button></a>
				{:else}
					<p class="text-bittersweet">{crumb.label}</p>
				{/if}
			</li>
		{/each}
	</ul>
</nav>
