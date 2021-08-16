import React, { useContext, useState } from "react";
import { PageName, PagePath } from "../../../constants/page";
import { FooterWrapper } from "./Footer.style";
import pigeon from "../../../assets/svg/pigeon.svg";
import teams from "../../../assets/svg/teams.svg";
import add from "../../../assets/svg/add.svg";
import playbooks from "../../../assets/svg/playbooks.svg";
import profile from "../../../assets/svg/profile.svg";
import { map } from "lodash";
import { LanguageContext } from "../../context/LanguageContext";
import Icon from "../icon/Icon";
import classnames from "classnames";
import { ThemeContext } from "../../context/ThemeContext";

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
  history?: any;
};

const Footer: React.FC<TFooterProps> = ({ className, history }) => {
  const { t } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
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
