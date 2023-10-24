import { HttpMethod } from "../constants/httpEnum";

export type TQuery = Record<string, string>;

export type TParam = Record<string, string>;

export type THeaders = any;

export type TBody= Record<string, any>;

export type TRequest = {
  method?: HttpMethod;
  query: TQuery;  // http://abc/?query={query}
  param: TParam; // http://abc/{param}/detail
  body: TBody;
  headers: THeaders;
};
