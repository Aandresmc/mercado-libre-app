import React from 'react'
import { render } from '@testing-library/react'
import { ProductView, Props } from '@/presentation/product/product.view'
import { productDetailMock } from '../../mocks/product-detail.mock'

const productMock: Props = {
	product: {
		...productDetailMock,
	},
}

describe('ProductView Component', function () {
	it('should show properties of product like name , image and price', function () {
		const { getByText, getByTitle } = render(<ProductView product={productMock.product} />)

		expect(getByText(productMock.product.title)).toBeInTheDocument()
		expect(getByTitle('image product')).toBeInTheDocument()
		expect(getByText(`$ ${productMock.product.price}`)).toBeInTheDocument()
	})

	it('should visible and not disabled button buy product', function () {
		const { getByTestId } = render(<ProductView product={productMock.product} />)

		const button = getByTestId('btn-buy')

		expect(button).toHaveAttribute('type', 'button')
		expect(button).not.toHaveAttribute('disabled')
		expect(button).toHaveAccessibleName('Comprar')
	})
})
