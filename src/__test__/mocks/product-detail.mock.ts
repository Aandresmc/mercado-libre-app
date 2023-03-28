import { DescriptionProductEntity } from '@/domain/entities/iproduct-description-entity'
import { IProductDetail } from '@/domain/entities/iproduct-detail'

export const productDetailDescriptionMock: DescriptionProductEntity = {
	plain_text: 'description product',
}

export const productDetailMock: IProductDetail.Data = {
	id: '1',
	title: 'product title',
	price: 1000,
	sold_quantity: 1,
	condition: 'new',
	pictures: [{ url: 'http:fake-url-img' }],
	plain_text: 'description product',
}
