import { TRequest } from "../types/httpType";

export const fetchData = async <T = any>(
  uri: string,
  options: Partial<TRequest> = {}
): Promise<T> => {
  try {
    let url = uri;
    const fetchOption: RequestInit = {};
    if (options.method) {
      fetchOption.method = options.method
    }
    if (options.headers) {
      fetchOption.headers = options.headers as HeadersInit
    }
    if (options.body) {
      fetchOption.body = options.body as BodyInit
    }
    if (options.query) {
      const query = Object.keys(options.query).reduce((curQuery, key) => {
        const value = options.query[key];
        if (!curQuery.includes("?")) {
          return `${curQuery}?${key}=${value}`;
        }
        return `${curQuery}&${key}=${value}`;
      },
      "");
      url = url + query;
    }
    if (options.param) {
      url = Object.keys(options.param).reduce(
        (text, key) => {
          const value = options.param[key];
          return text.replace(new RegExp(`{:${key}}`, "g"), value);
        },
        url
      ); 
    }
    const result = await fetch(url, fetchOption);

    return result.json();
  } catch (e) {
    throw e;
  }
};