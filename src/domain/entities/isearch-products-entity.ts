export interface SearchProductEntity {
    id: string;
    title: string;
    condition: string;
    thumbnail_id: string;
    catalog_product_id: null;
    listing_type_id: string;
    permalink: string;
    buying_mode: string;
    site_id: string;
    category_id: string;
    domain_id: string;
    thumbnail: string;
    currency_id: string;
    order_backend: number;
    price: number;
    original_price: null;
    sale_price: null;
    sold_quantity: number;
    available_quantity: number;
    official_store_id: number;
    official_store_name: string;
    use_thumbnail_id: boolean;
    accepts_mercadopago: boolean;
    tags: string[];
    shipping: Shipping;
    stop_time: Date;
    seller: Seller;
    seller_address: SellerAddress;
    address: Address;
    attributes: Attribute[];
    installments: Installments;
    winner_item_id: null;
    discounts: null;
    promotions: any[];
    inventory_id: string;
}

export interface Address {
    state_id: string;
    state_name: string;
    city_id: null;
    city_name: string;
}

export interface Attribute {
}

export interface Installments {
    quantity: number;
    amount: number;
    rate: number;
    currency_id: string;
}

export interface Seller {
    id: number;
    nickname: string;
    car_dealer: boolean;
    real_estate_agency: boolean;
    _: boolean;
    registration_date: Date;
    tags: string[];
    car_dealer_logo: string;
    permalink: string;
    seller_reputation: SellerReputation;
    eshop: Eshop;
}

export interface Eshop {
    eshop_id: number;
    seller: number;
    nick_name: string;
    eshop_status_id: number;
    site_id: string;
    eshop_experience: number;
    eshop_rubro: null;
    eshop_locations: any[];
    eshop_logo_url: string;
}

export interface SellerReputation {
    level_id: string;
    power_seller_status: string;
    transactions: Transactions;
    metrics: Metrics;
}

export interface Metrics {
    sales: Attribute;
    claims: Attribute;
    delayed_handling_time: Attribute;
    cancellations: Attribute;
}

export interface Transactions {
    canceled: number;
    completed: number;
    period: string;
    ratings: Attribute;
    total: number;
}

export interface SellerAddress {
    comment: string;
    address_line: string;
    zip_code: string;
    id: null;
    latitude: null;
    longitude: null;
    country: City;
    state: City;
    city: City;
}

export interface City {
    id: null | string;
    name: string;
}

export interface Shipping {
    store_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: string;
    mode: string;
    tags: string[];
    promise: null;
}