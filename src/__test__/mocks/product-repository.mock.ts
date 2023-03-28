import { DescriptionProductEntity } from "@/domain/entities/iproduct-description-entity";
import { IProductDetail } from "@/domain/entities/iproduct-detail";
import { ISearchProducts } from "@/domain/entities/isearch-products";
import { IProductRepository } from "@/infrastructure/iproduct-repository";
import { productDetailDescriptionMock, productDetailMock } from "./product-detail.mock";
import { searchProductsResponseMock } from "./search-product.mock";


export class ProductRepositoryMock implements IProductRepository {
    async searchProductsByText(params: ISearchProducts.Params): Promise<ISearchProducts.Response> {
        return searchProductsResponseMock;
    }
    async productById(params: IProductDetail.Params): Promise<IProductDetail.Data> {
        return productDetailMock;
    }
    async descriptionProductById(params: IProductDetail.Params): Promise<DescriptionProductEntity> {
        return productDetailDescriptionMock;
    }

}