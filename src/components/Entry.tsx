import React, { useContext } from "react";
import { Redirect, Route, Router, Switch } from "react-router";
import { EntryWrapper } from "./Entry.style";
import { PagePath } from "../constants/page";
import { filter, map } from "lodash";
import pagesConfig from "../config/route";
import { LanguageProvider } from "./common/context/LanguageContext";
import { ThemeContext, ThemeProvider } from "./common/context/ThemeContext";
import Footer from "./common/footer/Footer";
import { history } from "../components/common/footer/Footer";

const Entry: React.FC<any> = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <LanguageProvider>
      <ThemeProvider>
        <EntryWrapper theme={theme}>
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
        <Footer theme={theme} />
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default Entry;
