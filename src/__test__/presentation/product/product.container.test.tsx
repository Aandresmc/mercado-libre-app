import React from 'react'

import { act, cleanup, render } from '@testing-library/react'
import { Product, Props } from '@/presentation/product/product.container'
import { productDetailMock } from '../../mocks/product-detail.mock'
import mockNextRouter from '../../utils/mock-router'
import { GetProductByIdUseCase } from '@/domain/usecases/get-product-by-id.usecase'

const props: Props = {
	id: '1',
}

const mockGetProductByIdUseCase = jest.spyOn(GetProductByIdUseCase.prototype, 'call')
mockGetProductByIdUseCase.mockImplementation(() => Promise.resolve(productDetailMock))

describe('ProductContainer Component', function () {
	beforeEach(() => {
		mockNextRouter({
			pathname: '/items',
			query: {
				id: props.id,
			},
		})

		jest.clearAllMocks()
	})

	it('should mounted component', () => {
		const { container } = render(<Product id={props.id} />)
		expect(container).toMatchSnapshot()
	})

	it('should have name and price product', async function () {
		const { getByText, asFragment } = await act(async () => render(<Product id={props.id} />))

		expect(asFragment()).toMatchSnapshot()
		expect(getByText(productDetailMock.title)).toBeInTheDocument()
		expect(getByText(`$ ${productDetailMock.price}`)).toBeInTheDocument()

		cleanup()
	})
})
