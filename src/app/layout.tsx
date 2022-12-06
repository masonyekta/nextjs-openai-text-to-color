import { Inter as FontSans } from '@next/font/google'
import React from 'react'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'
import { Footer } from '@/components/footer'

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-inter',
})

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" className={cn('font-sans antialiased', fontSans.variable)}>
			<head />
			<body className="min-h-screen bg-gray-100">
				<div className="h-screen container grid items-center justify-center gap-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:pt-16 lg:pb-24">
					{children}
					<Footer />
				</div>
			</body>
		</html>
	)
}
