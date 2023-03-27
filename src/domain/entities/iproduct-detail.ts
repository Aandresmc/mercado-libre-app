import { ProductDetail } from "./iproduct-detail-entity";
import { DescriptionProductEntity } from './iproduct-description-entity';

export namespace IProductDetail {
    export type Params = {
        id: string;
    };
    export type Response = Data;
    export type Data = ProductDetail & DescriptionProductEntity;
}
