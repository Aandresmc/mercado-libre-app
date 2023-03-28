import React from 'react'
import { SearchProductEntity } from '@/domain/entities/isearch-products-entity'
import { ProductItem } from './components/product-item'
interface Props {
	products: SearchProductEntity[]
}

export const ListProductsView = ({ products }: Props) => {
	return (
		<>
			<section>
				{products.map((product) => (
					<ProductItem product={product} key={product.id} />
				))}
			</section>
		</>
	)
}
