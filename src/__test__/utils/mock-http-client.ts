import { HttpClient } from '@/core/http-client'

export const httpClientMock = <T>(method: keyof typeof HttpClient, response: T) => {
	const mockHttpClient = jest.spyOn(HttpClient, method)

	mockHttpClient.mockImplementation(() => Promise.resolve(response))
}
