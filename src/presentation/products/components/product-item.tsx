import React from 'react'
import { SearchProductEntity } from '@/domain/entities/isearch-products-entity'
import Image from 'next/image'
import Link from 'next/link'
import styles from './product-item.module.scss'
interface Props {
	product: SearchProductEntity
}

export const ProductItem = ({ product }: Props) => {
	return (
		<Link href={`items/${product.id}`}>
			<div className={styles.container}>
				<Image src={product.thumbnail} alt={`image product ${product.title}`} width="180" height="180" />
				<section className={styles.product_description}>
					<h5>
						$ {product.price}
						{product.shipping.free_shipping && (
							<span className={styles.free_shipping}>
								<i className={'bi bi-cart'}></i>
							</span>
						)}
					</h5>
					<p>{product.title}</p>
				</section>
				<section className={styles.seller_zone}>
					<span>{product.seller_address.city.name}</span>
				</section>
			</div>
		</Link>
	)
}
