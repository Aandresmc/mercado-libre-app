export interface SearchProductEntity {
    id: string;
    title: string;
    condition: string;
    buying_mode: string;
    thumbnail: string;
    price: number;
    sold_quantity: number;
    seller_address: SellerAddress;
}

export interface SellerAddress {
    comment: string;
    address_line: string;
    zip_code: string;
    id: null;
    latitude: null;
    longitude: null;
    country: Location;
    state: Location;
    city: Location;
}

export interface Location {
    id: null | string;
    name: string;
}