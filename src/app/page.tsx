import { ColorText } from '@/components/openai/colortext'

export default function Page() {
	return (
		<>
			<section>
				<div className="mx-auto flex flex-col items-start gap-4 lg:w-[52rem]">
					<h1 className="text-5xl text-center font-bold leading-[1.1] tracking-tighter md:text-7xl">
						Turn a text description into a color.
					</h1>
					<ColorText />
				</div>
			</section>
		</>
	)
}
