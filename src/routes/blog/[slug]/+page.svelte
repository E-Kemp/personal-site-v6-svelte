<script lang="ts">
	import Breadcrumbs from '../../../components/Breadcrumbs.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<article class="w-full flex flex-col items-center">
	<Breadcrumbs
		breadcrumbs={[
			{ href: '/', label: 'Home' },
			{ href: '/blog', label: 'Blog' },
			{ label: data.title }
		]}
	/>
	<h1>{data.title}</h1>
	<p>Published: {data.date}</p>
	<div class="prose prose-h2:font-parkinsans">
		<data.content />
	</div>
</article>
