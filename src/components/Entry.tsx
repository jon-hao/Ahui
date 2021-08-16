import React, { useContext } from "react";
import { Route, Router, Switch } from "react-router";
import { EntryWrapper } from "./Entry.style";
import { filter, map } from "lodash";
import pagesConfig from "../config/route";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import Footer from "./common/footer/Footer";
import Header from "./common/header/Header";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const Entry: React.FC<any> = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <EntryWrapper>
          <Router history={history}>
            <Switch>
              {map(
                filter(pagesConfig, "fixtureToggle"),
                ({ name, path, component, exact }: any) => (
                  <Route
                    key={name}
                    path={path}
                    component={component}
                    exact={exact}
                  />
                )
              )}
            </Switch>
          </Router>
        </EntryWrapper>
        <Footer history={history} />
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default Entry;
