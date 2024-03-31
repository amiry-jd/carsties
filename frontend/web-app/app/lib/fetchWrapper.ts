import { getTokenWorkaround } from "@/app/actions/authActions";

const baseUrl = process.env.API_URL;

const get = async (url: string) => await handleRequest(url);

const post = async (url: string, body: {}) => await handleRequest(url, 'POST', body);

const put = async (url: string, body: {}) => await handleRequest(url, 'PUT', body);

async function del(url: string) {
    return await handleRequest(url, 'DELETE');
}

async function handleRequest(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
    body?: {} | undefined) {

    const requestOptions = {
        method: method,
        headers: await getHeaders(),
    } as any;

    if (body && (method === 'POST' || method === 'PUT')) {
        requestOptions.body = JSON.stringify(body);
    }

    console.log(requestOptions);
    const response = await fetch(baseUrl + url, requestOptions);
    return await handleResponse(response);
}

async function getHeaders() {
    const token = await getTokenWorkaround();
    const headers = { 'Content-Type': 'application/json' } as any;
    if (token) {
        headers.Authorization = 'Bearer ' + token.access_token;
    }
    return headers;
}

async function handleResponse(response: Response) {
    const text = await response.text();
    let data;
    try {
        data = JSON.parse(text);
    } catch (error) {
        data = text;
    }

    if (response.ok) {
        return data || response.statusText;
    } else {
        const error = {
            status: response.status,
            message: typeof data === 'string' ? data : response.statusText,
        };
        return { error };
    }
}

export const fetchWrapper = {
    get,
    post,
    put,
    del,
};