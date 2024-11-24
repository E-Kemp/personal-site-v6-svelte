<script lang="ts">
	import Breadcrumbs from '../../components/Breadcrumbs.svelte';
import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="w-full">
    <Breadcrumbs breadcrumbs={[
        { href: '/', label: 'Home'},
        { label: 'Blog' }
    ]} />
	<p>This is the blog!</p>
	<ul>
		{#each data.allPosts as post}
			<a href={`/blog/${post.path}`}>{post.meta.title}</a>
		{/each}
	</ul>
</div>
