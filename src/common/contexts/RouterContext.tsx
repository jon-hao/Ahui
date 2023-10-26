import React, { useEffect, useState } from "react";
import { createBrowserHistory } from "history";
import UniversalRouter from "universal-router";
import { Nullable, TNavigate, TRoute } from "../constants/routerEnum";

export const history = createBrowserHistory({
  window,
} as any);

const convertRoutes = (routes: TRoute[]) => {
  return routes.map((route) => {
    const result = route;
    if (route.children) {
      result.children = convertRoutes(route.children);
    } else {
      if (!result.action) {
        result.action = (context: any) => ({
          ...route,
          context,
        });
      }
    }
    return result;
  });
};

const findRoutePath = (
  routes: TRoute[],
  name: string,
  initial: string = ""
): string => {
  let path = "";
  routes.forEach((route) => {
    if (route.name === name) {
      path = initial + route.path;
      return false;
    }
    if (route.children) {
      path = findRoutePath(route.children, name, route.path);
    }
  });
  return path;
};

export const RouterContext = React.createContext<{
  pathname: string;
  state: any;
  qs: any;
  param: any;
  route: Nullable<TRoute>;
  routes: TRoute[];
  navigate: (navigateParam: TNavigate) => void | string;
}>({
  pathname: window.location.pathname,
  state: window.history.state,
  qs: Object.fromEntries(new URLSearchParams(window.location.search).entries()),
  param: {},
  route: null,
  routes: [],
  navigate: () => "",
});

type TProps = {
  routes: TRoute[];
  children: any;
};

export const RouterProvider: React.FC<TProps> = ({ routes, children }) => {
  const finalRoutes = convertRoutes(routes);
  const pathname = window.location.pathname;
  const state = window.history.state;
  const qs = Object.fromEntries(
    new URLSearchParams(window.location.search).entries()
  );
  const [route, setRoute] = useState<Nullable<TRoute>>(null);
  const [param, setParam] = useState<any>({});

  const navigate = (navigateParam: TNavigate = {}) => {
    if (typeof navigateParam === "string") {
      const pathname = navigateParam.startsWith("/")
        ? navigateParam
        : findRoutePath(routes, navigateParam);
      history.push(pathname);
      return;
    }
    if (typeof navigateParam === "number") {
      history.go(navigateParam);
      return;
    }
    const defaultState = window.history.state;
    const defaultQs = Object.fromEntries(
      new URLSearchParams(window.location.search).entries()
    );
    const defaultParam = {};
    const {
      name,
      pathname,
      state = defaultState,
      qs = defaultQs,
      param = defaultParam,
    } = navigateParam;
    const curPathname = pathname || findRoutePath(routes, name!);
    const finalPathname = param.reduce(
      (text, value, key) => {
        return text.replace(new RegExp(`:${key}`, "g"), value);
      },
      curPathname
    );
    const search = qs.reduce(
      (curSearch, value, key) => {
        if (!curSearch.includes("?")) {
          return `${curSearch}?${key}=${value}`;
        }
        return `${curSearch}&${key}=${value}`;
      },
      ""
    );
    history.push(finalPathname + search, state);
  };

  useEffect(() => {
    const router = new UniversalRouter(finalRoutes);
    const resolveRoute = async () => {
      const curRoute = await router.resolve(location.pathname);
      if (curRoute?.redirect) {
        navigate(curRoute.redirect);
        return;
      }
      setParam(curRoute?.context?.params || {});
      setRoute(curRoute);
      return;
    };
    resolveRoute();

    history.listen(resolveRoute);
  }, []);

  return (
    <RouterContext.Provider
      value={{
        pathname,
        state: state?.usr || {},
        qs,
        param,
        route,
        routes,
        navigate,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};