import { UseCase } from '@/core/use_case'
import { IProductRepository } from '@/infrastructure/iproduct-repository'
import { ProductRepository } from '@/infrastructure/product-repository'
import { IProductDetail } from '../entities/iproduct-detail'

export class GetProductByIdUseCase implements UseCase<IProductDetail.Params, IProductDetail.Response> {
	private readonly _repository: IProductRepository

	constructor(repository: IProductRepository) {
		this._repository = repository
	}

	async call(params: IProductDetail.Params) {
		const product = await this._repository.productById(params)
		const description = await this._repository.descriptionProductById(params)

		return { ...product, ...description }
	}
}

export const getProductByIdUseCase = new GetProductByIdUseCase(new ProductRepository())
