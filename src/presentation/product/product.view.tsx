import React from 'react'
import Image from 'next/image'
import { IProductDetail } from '@/domain/entities/iproduct-detail'
import styles from './product.view.module.scss'
import { ProductDetail } from './components/product-detail'
import { ProductDescription } from './components/product-description'

export interface Props {
	product: IProductDetail.Data
}
export const ProductView = ({ product }: Props) => (
	<>
		<section className={styles.container_product}>
			<Image
				className={styles.image_product}
				title={'image product'}
				src={product.pictures[0].url}
				alt={`image product ${product.title}`}
				width={'680'} height={'680'}
				priority
			/>
			<ProductDetail product={product} />
		</section>
		<section>
			<ProductDescription product={product} />
		</section>
	</>
)
