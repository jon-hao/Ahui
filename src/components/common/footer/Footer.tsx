import React, { useContext, useState } from "react";
import { PageName, PagePath } from "../../../constants/page";
import { Theme } from "../../../constants/style";
import { FooterWrapper } from "./Footer.style";
import pigeon from "../../../assets/svg/pigeon.svg";
import teams from "../../../assets/svg/teams.svg";
import add from "../../../assets/svg/add.svg";
import playbooks from "../../../assets/svg/playbooks.svg";
import profile from "../../../assets/svg/profile.svg";
import { map } from "lodash";
import { LanguageContext } from "../context/LanguageContext";
import Icon from "../icon/Icon";
import { createBrowserHistory } from "history";
import classnames from "classnames";
import { useHistory, useLocation } from "react-router";

export const history = createBrowserHistory();

const pages = [
  {
    name: PageName.Home,
    path: PagePath.Home,
    icon: pigeon,
  },
  {
    name: PageName.Teams,
    path: PagePath.Teams,
    icon: teams,
  },
  {
    name: PageName.CreateTeam,
    path: PagePath.CreateTeam,
    icon: add,
  },
  {
    name: PageName.Playbooks,
    path: PagePath.Playbooks,
    icon: playbooks,
  },
  {
    name: PageName.Profile,
    path: PagePath.Profile,
    icon: profile,
  },
];

type TFooterProps = {
  className?: string;
  theme?: Theme;
};

const Footer: React.FC<TFooterProps> = ({ className, theme }) => {
  const { t } = useContext(LanguageContext);
  const [pathname, setPathname] = useState(history.location.pathname);

  return (
    <FooterWrapper className={className} theme={theme}>
      {map(pages, ({ name, path, icon }, key) => (
        <div
          key={key}
          className={classnames("footer-item", { active: pathname === path })}
          onClick={() => {
            history.push(path);
            setPathname(path);
          }}
        >
          <Icon className="footer-item-icon" icon={icon} />
          <div className="footer-item-name">{t(`pages.${name}`)}</div>
        </div>
      ))}
    </FooterWrapper>
  );
};

export default Footer;
