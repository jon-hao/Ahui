import { ReactElement } from "react";

export type Nullable<T> = T | null | undefined;

export type TNavigate =
  | {
      name?: string;
      pathname?: string;
      state?: any;
      qs?: any;
      param?: any;
    }
  | string
  | number;

export type TRoute = {
  name: string;
  path: string;
  component?: ReactElement | null;
  redirect?: string;
  hidden?: boolean;
  fullPage?: boolean;
  cache?: boolean;
  children?: TRoute[];
  icon?: any;
  action?: any;
  [key: string]: any;
};