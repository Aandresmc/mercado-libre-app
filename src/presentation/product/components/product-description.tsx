import React from 'react'
import { IProductDetail } from '@/domain/entities/iproduct-detail'
import styles from './product.module.scss'
interface Props {
	product: IProductDetail.Data
}

export const ProductDescription = ({ product }: Props) => {
	return (
		<div className={styles.container_description}>
			<h3 className={styles.title_product}>Descripcion</h3>
			<p>{product.plain_text}</p>
		</div>
	)
}
