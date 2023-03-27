import { UseCase } from "@/core/use_case";
import { IProductRepository } from "@/infrastructure/iproduct-repository";
import { ProductRepository } from "@/infrastructure/product-repository";
import { ISearchProducts } from "../entities/isearch-products";



export class GetProductsByQueryUseCase implements UseCase<ISearchProducts.Params, ISearchProducts.Response>{
  private readonly _repository: IProductRepository;

  constructor(repository: IProductRepository) {
    this._repository = repository;
  }


  call(params: ISearchProducts.Params) {
    return this._repository.searchProductsByText(params);
  }
}

export const getProductsByQueryUseCase = new GetProductsByQueryUseCase(new ProductRepository())
