export interface ProductDetail {
	id: string
	title: string
	price: number
	sold_quantity: number
	condition: string
	pictures: [{ url: string }]
}
