import React, { ReactNode, useState } from 'react'
import Layout from '@/shared/components/layouts/Layout'
import { useRouter } from 'next/router'

interface Props {
	querySearch?: string
	children?: ReactNode
}

export const ProductsLayout = ({ children, querySearch }: Props) => {
	const router = useRouter()

	const [query, setQuery] = useState<string>(querySearch || '')
	const [errorText, setErrorText] = useState<string>('')

	const onChange = (event: any) => {
		const title: string = event.target.value

		setQuery(title)
	}

	const onSubmit = async (event: any) => {
		event.preventDefault()

		try {
			setErrorText('')

			if (query != '') {
				try {
					await router.push(`/items?search=${query}`)
				} catch (error) {
					console.log('error redirect', error)
				}
			}
		} catch (error: any) {
			setErrorText(error.message)
		}
	}

	return (
		<Layout
			search={{
				onSubmit,
				query,
				onChange,
				errorText,
			}}
			children={children}
		></Layout>
	)
}
