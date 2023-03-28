import { IProductDetail } from '@/domain/entities/iproduct-detail'
import { ISearchProducts } from '@/domain/entities/isearch-products'
import { ProductRepository } from '@/infrastructure/product-repository'
import { productDetailDescriptionMock, productDetailMock } from '../mocks/product-detail.mock'
import { searchProductsMock } from '../mocks/search-product.mock'
import { httpClientMock } from '../utils/mock-http-client'

const repository = new ProductRepository()

describe('ProductRepository', () => {
	const paramsProductById: IProductDetail.Params = { id: '1' }
	const paramsSearchProductsByText: ISearchProducts.Params = { query: 'product name' }

	it('should return product detail by id', async () => {
		httpClientMock('get', productDetailMock)
		const productDetail = await repository.productById(paramsProductById)
		expect(productDetail).toEqual(productDetailMock)
	})

	it('should return list products by text', async () => {
		httpClientMock('get', searchProductsMock)
		const searchProducts = await repository.searchProductsByText(paramsSearchProductsByText)
		expect(searchProducts).toEqual(searchProductsMock)
	})

	it('should return list products by text', async () => {
		httpClientMock('get', productDetailDescriptionMock)
		const descriptionProduct = await repository.descriptionProductById(paramsProductById)
		expect(descriptionProduct).toEqual(productDetailDescriptionMock)
	})
})
