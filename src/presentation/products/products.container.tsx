import { useEffect, useState, Suspense } from 'react'

import { ProductsLayout } from '@/shared/components/layouts/products.layout'
import { ListProductsView } from './products.view'
import { getProductsByQueryUseCase } from '../../domain/usecases/get-products-by-query.usecase'
import { ISearchProducts } from '@/domain/entities/isearch-products'

interface Props {
	query: string
}

export const ListProducts = ({ query }: Props) => {
	const [products, setProducts] = useState<ISearchProducts.Data>()

	useEffect(() => {
		getProductsByQueryUseCase.call({ query }).then((result) => {
			setProducts(result.results)
		})
	}, [query])

	return <ProductsLayout querySearch={query} children={products && <ListProductsView products={products} />} />
}
