import Link from 'next/link'

export function Footer() {
	return (
		<div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8 text-center text-sm">
			<p className="mt-8">
				Made using{' '}
				<Link className="underline" target="_blank" href="https://openai.com/">
					OpenAI
				</Link>{' '}
				API by{' '}
				<Link className="underline" target="_blank" href="https://twitter.com/masonyekta">
					@masonyekta
				</Link>
			</p>
			<p>
				View source code on{' '}
				<Link
					target="_blank"
					className="underline"
					href="https://github.com/masonyekta/nextjs-openai-text-to-color"
				>
					GitHub
				</Link>
			</p>
		</div>
	)
}
