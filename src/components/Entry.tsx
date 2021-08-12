import React from "react";
import { createBrowserHistory } from "history";
import { Redirect, Route, Router, Switch } from "react-router";
import { EntryWrapper } from "./Entry.style";
import { PagePath } from "../constants/page";
import { filter, map } from "lodash";
import pagesConfig from "../config/route";
import { LanguageProvider } from "./common/context/LanguageContext";

const history = createBrowserHistory();

const Entry: React.FC<any> = () => {
  return (
    <EntryWrapper>
      <LanguageProvider>
        <Router history={history}>
          <Switch>
            <Redirect exact from="/" to={PagePath.Home} />
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
      </LanguageProvider>
    </EntryWrapper>
  );
};

export default Entry;
