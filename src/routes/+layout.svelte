<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="flex min-h-screen w-full flex-col items-stretch justify-start bg-beige">
	<Header />
	<div class="flex w-full grow flex-col items-center justify-start">
		{@render children()}
	</div>
	<Footer />
</div>
