import { SearchProductEntity } from "./isearch-products-entity";

export namespace ISearchProducts {
    export type Params = {
        query: string;
    };
    export type Response = {
        query: string;
        results: Data;
    };
    export type Data = SearchProductEntity[];
}



