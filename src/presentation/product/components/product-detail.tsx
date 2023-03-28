import React from 'react'
import { IProductDetail } from '@/domain/entities/iproduct-detail'
import { ProductButton } from './product-button'
import styles from './product.module.scss'

interface Props {
	product: IProductDetail.Data
}

export const ProductDetail = ({ product }: Props) => {
	return (
		<div className={styles.container_detail}>
			<p>
				{product.condition == 'new' ? 'Nuevo' : 'Buen estado'} - {product.sold_quantity} vendidos
			</p>
			<h1 className={styles.title_product}>{product.title}</h1>
			<h1 className={styles.price_product}>$ {product.price}</h1>
			<ProductButton />
		</div>
	)
}
