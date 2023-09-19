<script lang="ts">
	import { formatDate } from '$lib/utils.js'

	export let data
</script>

<!-- <pre>
	{JSON.stringify(data, null, 2)}
</pre> -->

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="article" />
	{JSON.stringify(data, null, 2)}
</svelte:head>

<article>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<div class="tags">
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	article {
		max-width: 800px;
		margin-inline: auto;
		padding: 0 1rem;
		max-inline-size: var(--size-content-3);
	}

	h1 {
		margin-block: 0;
		text-transform: capitalize;
	}

	h1 + p {
		margin-block: 0;
		margin-top: var(--size-2);
		color: var(--text-2);
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--size-3);
		margin-block: var(--size-3);
	}

	.tags > span {
		padding: var(--size-1) var(--size-2);
		border-radius: var(--size-1);
		background-color: var(--surface-4);
		color: var(--text-4);
	}
</style>
