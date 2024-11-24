<script>
	import profile from '$lib/assets/profile.jpg';
	import Button from '../components/Button.svelte';
</script>

<div class="mt-20 flex w-full flex-col items-center gap-20">
	<div
		class={'flex h-16 w-full flex-row items-center justify-center gap-10 overflow-visible bg-gunmetal p-4 text-2xl text-beige'}
	>
		<img alt="profile of Elliot Kemp" src={profile} class="h-40 w-40 rounded-full" />
		<p>This is where I do things</p>
	</div>
	<div class="flex flex-row items-center gap-10">
		<p class="text-2xl text-gunmetal">Why not look at these things?</p>
		<ul class="flex w-32 flex-col items-stretch">
			<li>
				<a href="/blog">
					<Button className="w-full">Blog</Button>
				</a>
			</li>
			<li>
				<a href="https://github.com/E-Kemp" aria-label="Link to my Github page.">
					<Button className="w-full">GitHub</Button>
				</a>
			</li>
			<li>
				<a
					href="https://bsky.app/profile/elliotjordankemp.com"
					aria-label="Link to my Bluesky page"
				>
					<Button className="w-full">BlueSky</Button>
				</a>
			</li>
			<li>
				<a
					href="https://www.linkedin.com/in/elliotjordankemp/"
					aria-label="Link to my LinkedIn profile."
				>
					<Button className="w-full">LinkedIn</Button>
				</a>
			</li>
		</ul>
	</div>
</div>
