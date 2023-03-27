import { ListProducts } from '@/presentation/products/products.container'
import { useRouter } from 'next/router'

export default function ListProductsPage() {
	const router = useRouter()
	const search = router.query.search as string

	return <ListProducts query={search} />
}
