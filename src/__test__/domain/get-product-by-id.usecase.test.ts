
import { productDetailMock } from "@/__test__/mocks/product-detail.mock";
import { ProductRepositoryMock } from "@/__test__/mocks/product-repository.mock";
import { IProductDetail } from "@/domain/entities/iproduct-detail";
import { GetProductByIdUseCase } from "@/domain/usecases/get-product-by-id.usecase";

const repository = new ProductRepositoryMock();
const useCase = new GetProductByIdUseCase(repository)

describe('GetProductByIdUseCase', () => {

    const params: IProductDetail.Params = { id: '1' }

    it('should call usecase and return product detail', async () => {
        const productDetail = await useCase.call(params)
        expect(productDetail).toEqual(productDetailMock)
    });

});