<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type ButtonProps = HTMLButtonAttributes & {
		primary?: boolean;
		small?: boolean;
		pill?: boolean;
		className?: string;
		toggle?: boolean;
		children: Snippet;
	};

	const {
		primary = false,
		small = false,
		pill = false,
		className,
		toggle,
		children,
		...rest
	}: ButtonProps = $props();
</script>

<button
	{...rest}
	type="button"
	class={`group relative bg-gunmetal text-beige transition ${className}`}
	class:storybook-button--primary={primary}
	class:storybook-button--secondary={!primary}
>
	<div
		class="absolute left-0 top-0 z-0 h-full w-0 bg-bittersweet transition-all duration-300 ease-out group-hover:w-full group-disabled:group-hover:w-0 data-[toggle]:w-full"
		class:w-full={toggle}
	></div>
	<div
		class="relative z-10 text-start"
		class:p-1={small || pill}
		class:p-3={!small && !pill}
		class:text-md={!pill}
		class:text-sm={pill}
		class:px-2={pill}
	>
		{@render children()}
	</div>
</button>
