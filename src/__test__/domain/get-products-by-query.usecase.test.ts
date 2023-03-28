import { ProductRepositoryMock } from '@/__test__/mocks/product-repository.mock'
import { ISearchProducts } from '@/domain/entities/isearch-products'
import { GetProductsByQueryUseCase } from '@/domain/usecases/get-products-by-query.usecase'
import { searchProductsResponseMock } from '../mocks/search-product.mock'

const repository = new ProductRepositoryMock()
const useCase = new GetProductsByQueryUseCase(repository)

describe('GetProductsByQueryUseCase', () => {
	const params: ISearchProducts.Params = { query: 'product name' }

	it('should call usecase and return list products', async () => {
		const products = await useCase.call(params)
		expect(products).toEqual(searchProductsResponseMock)
	})
})
