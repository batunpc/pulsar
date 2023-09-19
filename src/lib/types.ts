export type Categories = 'sveltekit' | 'svelte'

export type Post = {
	title: string
	slug: string
	description: string
	category: Categories[]
	date: string
	published: boolean
}
