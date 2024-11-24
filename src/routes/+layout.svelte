<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';
	import Header from '../components/Header.svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="flex min-h-screen w-full flex-col items-center justify-start bg-beige">
	<Header />
	{@render children()}
</div>
