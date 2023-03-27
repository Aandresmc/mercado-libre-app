import { Product } from '@/presentation/product/product.container'
import { useRouter } from 'next/router'

export default function DetailProductPage() {
	const router = useRouter()
	const id = router.query.id as string

	return id && <Product id={id} />
}
