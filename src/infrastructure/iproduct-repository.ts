import { DescriptionProductEntity } from '@/domain/entities/iproduct-description-entity'
import { IProductDetail } from '@/domain/entities/iproduct-detail'
import { ISearchProducts } from '../domain/entities/isearch-products'

export abstract class IProductRepository {
	abstract searchProductsByText(params: ISearchProducts.Params): Promise<ISearchProducts.Response>
	abstract productById(params: IProductDetail.Params): Promise<IProductDetail.Response>
	abstract descriptionProductById(params: IProductDetail.Params): Promise<DescriptionProductEntity>
}
