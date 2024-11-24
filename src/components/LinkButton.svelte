<script lang="ts">
	import type { Snippet } from 'svelte';
	import Button from './Button.svelte';

	type ButtonProps = {
		primary?: boolean;
		href: string;
        className: string
		children: Snippet;
	};

	const { primary = false, href, className, children }: ButtonProps = $props();
</script>

<a {href}>
	<Button {primary} {className}>
		{@render children()}
	</Button>
</a>
