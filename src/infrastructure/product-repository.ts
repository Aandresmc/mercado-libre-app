import { ISearchProducts } from '../domain/entities/isearch-products';
import { IProductRepository } from './iproduct-repository';
import { HttpClient } from '@/core/http-client';
import { IProductDetail } from '@/domain/entities/iproduct-detail';
import { DescriptionProductEntity } from '@/domain/entities/iproduct-description-entity';

const LIMIT_RESULT = 4;

export class ProductRepository implements IProductRepository {

    searchProductsByText(params: ISearchProducts.Params): Promise<ISearchProducts.Response> {
        const URL = `${process.env.NEXT_PUBLIC_API_SEARCH_PRODUCTS}?q=${params.query}&limit=${LIMIT_RESULT}`;
        return HttpClient.get<ISearchProducts.Response>(URL)
    }

    productById(params: IProductDetail.Params): Promise<IProductDetail.Response> {
        const URL = `${process.env.NEXT_PUBLIC_API_PRODUCT_DETAIL}${params.id}`;
        return HttpClient.get<IProductDetail.Response>(URL)
    }

    descriptionProductById(params: IProductDetail.Params): Promise<DescriptionProductEntity> {
        const URL = `${process.env.NEXT_PUBLIC_API_PRODUCT_DETAIL}${params.id}/description`;
        return HttpClient.get<DescriptionProductEntity>(URL)
    }

}