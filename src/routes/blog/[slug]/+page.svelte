<script lang="ts">
	import Breadcrumbs from '../../../components/Breadcrumbs.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<article class="w-full flex flex-col items-center gap-6">
	<Breadcrumbs
		breadcrumbs={[
			{ href: '/', label: 'Home' },
			{ href: '/blog', label: 'Blog' },
			{ label: data.title }
		]}
	/>
	<h1 class="text-3xl text-gunmetal font-parkinsans font-semibold">{data.title}</h1>
	<p class="max-w-xl w-full text-right text-md font-open_sans text-bittersweet font-semibold">{new Date(data.date).toLocaleDateString()}</p>
	<div class="prose max-w-xl prose-headings:font-parkinsans prose-headings:text-gunmetal prose-headings:font-semibold text-gunmetal mb-6">
		<data.content />
	</div>
</article>
