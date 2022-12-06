'use client'

import React from 'react'

export const ColorText = () => {
	const [value, setValue] = React.useState<string>('')
	const [prompt, setPrompt] = React.useState<string>('')
	const [color, setColor] = React.useState<string>('')

	const handleInput = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}, [])

	const handleKeyDown = React.useCallback(
		async (e: React.KeyboardEvent<HTMLInputElement>) => {
			if (e.key === 'Enter') {
				setPrompt(value)
				setColor('Loading...')
				const response = await fetch('/api/openai', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ text: value }),
				})
				const data = await response.json()
				setValue('')
				setColor(`#${data.result.choices[0].text}`)
			}
		},
		[value]
	)

	React.useEffect(() => {
		// change background color
		if (color) {
			document.body.style.background = color
		}
	})

	return (
		<>
			<div className="text-center w-full mt-14">
				<div>
					<div className="mt-1 relative flex items-center">
						<input
							aria-label="Enter your text description and hit enter to get the color code."
							value={value}
							onChange={handleInput}
							onKeyDown={handleKeyDown}
							type="text"
							name="description"
							className="transition ease-in-out delay-75 duration-300
							appearance-none block w-full px-3 py-4 
							border-2 rounded-md border-neutral-900
							sm:text-sm 
							focus:outline-none focus:border-neutral-800 focus:ring-neutral-800"
							placeholder="Enter Your Text Description"
						/>
						<div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
							<kbd className="inline-flex items-center border border-gray-800 rounded px-2 text-sm font-sans font-medium text-gray-800">
								↵ Return
							</kbd>
						</div>
					</div>
				</div>
				<div className="mt-6 h-16">
					{prompt && (
						<div>
							<h2 className="inline-block font-bold mr-2">Description:</h2>
							{prompt}
						</div>
					)}
					{color && (
						<div>
							<h2 className="inline-block font-bold mr-2">Color Code:</h2>
							{color}
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default ColorText
