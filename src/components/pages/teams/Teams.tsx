import React, { useContext, useState } from "react";
import { TeamListWrapper } from "./Teams.style";
import useTeamList from "./hooks/useTeamList";
import { TFilter } from "./types/param";
import usePromotePlaybooks from "./hooks/usePromotePlaybooks";
import Filter from "./components/filter/Filter";
import TeamList from "./components/team-list/TeamList";
import Carousel from "../../common/carousel/Carousel";
import { ThemeContext } from "../../context/ThemeContext";
import Header from "../../common/header/Header";
import { LanguageContext } from "../../context/LanguageContext";
import Button from "../../common/button/Button";

const Teams: React.FC<any> = () => {
  const [filter, setFilter] = useState<TFilter>({});
  const { theme } = useContext(ThemeContext);
  const { t } = useContext(LanguageContext);
  const teamList = useTeamList(filter);
  const promotePlaybooks = usePromotePlaybooks();

  return (
    <TeamListWrapper theme={theme}>
      <Header title={t("pages.teams")}>
        <Button>{t("teams.matching")}</Button>
      </Header>
      {/* <div className="teams-promote-playbook">
        <Carousel
          imageClassName="teams-promote-playbook-carousel"
          sources={promotePlaybooks}
        />
      </div> */}
      <div className="teams-filter">
        <Filter />
      </div>
      <div className="teams-list">
        <TeamList teamList={teamList} />
      </div>
    </TeamListWrapper>
  );
};

export default Teams;
