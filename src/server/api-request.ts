/** biome-ignore-all lint/complexity/noUselessCatch: <explanation> */
const api_url = process.env.API_URL;

export interface QueryParams {
  [key: string]: string | number | boolean;
}

export interface RequestOptions {
  page?: number;
  _limit?: number;
  rating_like?: string;
}

export const defaultRequestOptions: RequestOptions = {
  page: 1,
  _limit: 10,
};

export function buildQueryString(params: QueryParams) {
  const query = Object.entries(params)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => [key, encodeURIComponent(String(value))]);
  return `?${new URLSearchParams(Object.fromEntries(query)).toString()}`;
}

export async function ApiRequest(
  endPoint: string,
  query: QueryParams = {},
  options: RequestOptions = {}
) {
  const mergeOptios: RequestOptions = { ...defaultRequestOptions, ...options };

  const queryString: string = buildQueryString({ ...query, ...mergeOptios });

  try {
    const response = await fetch(`${api_url}/${endPoint}/${queryString}`);
    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    const data = response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
