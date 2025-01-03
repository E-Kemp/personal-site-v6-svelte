<script lang="ts">
	import Button from './Button.svelte';

    const currentYear = new Date().getFullYear()
</script>

<footer
	class="flex h-16 w-full flex-row items-center justify-end gap-6 bg-gunmetal px-4 text-beige"
>
	<p>&copy; {currentYear} elliotjordankemp.com</p>
	<span>&bull;</span>
	<a href="https://github.com/E-Kemp/personal-site-v6-svelte"
		><Button small>Check out the code!</Button></a
	>
</footer>
