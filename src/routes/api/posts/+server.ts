import { json, type RequestHandler } from '@sveltejs/kit'
import type { Post } from '$lib/types'

async function getPosts() {
	let posts: Post[] = []

	const paths = import.meta.glob('/src/posts/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').pop()?.split('.')[0] ?? ''
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>
			const post = { slug, ...metadata } satisfies Post
			post.published && posts.push(post)
		}
	}

	posts = posts.sort((first, second) => {
		return new Date(second.date).getTime() - new Date(first.date).getTime()
	})

	return posts
}

export const GET: RequestHandler = async () => {
	const posts = await getPosts()
	return json(posts)
}
