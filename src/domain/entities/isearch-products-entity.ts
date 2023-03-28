export interface SearchProductEntity {
	id: string
	title: string
	condition: string
	buying_mode: string
	thumbnail: string
	price: number
	sold_quantity: number
	seller_address: SellerAddress
	shipping: Shipping
}

export interface SellerAddress {
	comment: string
	address_line: string
	zip_code: string
	id: null
	latitude: null
	longitude: null
	country: Location
	state: Location
	city: Location
}

export interface Shipping {
	store_pick_up: boolean
	free_shipping: boolean
	logistic_type: string
	mode: string
	tags: string[]
	promise: null
}

export interface Location {
	id: null | string
	name: string
}
