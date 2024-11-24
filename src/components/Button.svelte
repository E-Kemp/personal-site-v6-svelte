<script lang="ts">
	import type { Snippet } from 'svelte';

	type ButtonProps = {
		primary?: boolean;
		onClick?: () => void;
		className?: string;
		children: Snippet;
	};

	const { primary = false, onClick, className, children }: ButtonProps = $props();
</script>

<button
	type="button"
	class={`relative text-md group bg-gunmetal text-beige transition ${className}`}
	class:storybook-button--primary={primary}
	class:storybook-button--secondary={!primary}
	onclick={onClick}
>
	<div
		class="absolute left-0 top-0 h-full w-0 bg-bittersweet transition-all ease-out duration-300 group-hover:w-full z-0"
	></div>
	<div class="relative p-3 z-10 text-start">
		{@render children()}
	</div>
</button>
