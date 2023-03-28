import { useState, useEffect } from 'react'
import { ProductsLayout } from '@/shared/components/layouts/products.layout'
import { ProductView } from './product.view'
import { IProductDetail } from '@/domain/entities/iproduct-detail'
import { getProductByIdUseCase } from '@/domain/usecases/get-product-by-id.usecase'

export interface Props {
	id: string
}
export const Product = ({ id }: Props) => {
	const [product, setProduct] = useState<IProductDetail.Data>()

	useEffect(() => {
		getProductByIdUseCase.call({ id }).then((result) => {
			setProduct(result)
		})
	}, [id])

	return <ProductsLayout children={product && <ProductView product={product} />} />
}
