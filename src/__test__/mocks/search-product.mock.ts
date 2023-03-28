import { ISearchProducts } from "@/domain/entities/isearch-products";

export const searchProductsMock: ISearchProducts.Data =
    [
        {
            id: 'id',
            title: 'title',
            condition: 'condition',
            buying_mode: 'buying_mode',
            thumbnail: 'thumbnail',
            price: 1000,
            sold_quantity: 10,
            seller_address: {
                comment: 'comment',
                address_line: 'address_line',
                zip_code: 'zip_code',
                id: null,
                latitude: null,
                longitude: null,
                country: {
                    id: 'country id',
                    name: 'country name',
                },
                state: {
                    id: 'state id',
                    name: 'state name',
                },
                city: {
                    id: 'city id',
                    name: 'city name',
                },
            },
        }
    ];

export const searchProductsResponseMock: ISearchProducts.Response = {
    query: 'query',
    results: searchProductsMock,
}