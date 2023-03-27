import React, { ReactNode, Suspense } from 'react'
import Head from 'next/head'
import Header from '../header/header'
import { SearchBarFormProps } from '../controls'
import { Loading } from '../loading/loading'

type Props = {
	children?: ReactNode
	title?: string
	search: SearchBarFormProps
}

const Layout = ({ children, title = 'Mercado libre', search }: Props) => (
	<>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="description" content="Mercado libre app" />
			<meta name="author" content="Andres Mora Castro" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Header {...search} />
		<Suspense fallback={<Loading />}>
			<main>{children}</main>
		</Suspense>
	</>
)

export default Layout
