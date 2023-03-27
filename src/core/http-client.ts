

export const HttpClient = {
    get: <TResponse>(url: string = '') => request<TResponse>(url),

    // Using `extends` to set a type constraint:
    post: <TBody extends BodyInit, TResponse>(url: string, body: TBody) =>
        request<TResponse>(url, { method: 'POST', body }),
}


async function request<T>(
    url: string,
    config: RequestInit = {}
): Promise<T> {
    try {
        const response = await fetch(url, config);
        return await response.json();
    }
    catch (error) {
        console.error(error);
        throw new Error('error http ' + url)
    }
}
