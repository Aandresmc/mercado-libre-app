import Image from 'next/image'
import { IProductDetail } from '@/domain/entities/iproduct-detail'
import styles from './product.view.module.scss'
import { ProductDetail } from './components/product-detail'
import { ProductDescription } from './components/product-description'

interface Props {
	product: IProductDetail.Data
}
export const ProductView = ({ product }: Props) => (
	<>
		<section className={styles.container_product}>
			<Image src={product.pictures[0].url} alt={`image product ${product.title}`} width="680" height="680" />
			<ProductDetail product={product} />
		</section>
		<section>
			<ProductDescription product={product} />
		</section>
	</>
)
