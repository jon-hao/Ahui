import React, { useContext, useState } from "react";
import { TeamListWrapper } from "./Teams.style";
import useTeamList from "./hooks/useTeamList";
import { TFilter } from "./types/param";
import { map } from "lodash";
import { LanguageContext } from "../common/context/LanguageContext";
import Card from "../common/card/Card";
import Carousel from "../common/carousel/Carousel";
import usePromotePlaybooks from "./hooks/usePromotePlaybooks";
import Filter from "./components/filter/Filter";

const TeamList: React.FC<any> = () => {
  const { t } = useContext(LanguageContext);
  const [filter, setFilter] = useState<TFilter>({});
  const teamList = useTeamList(filter);
  const promotePlaybooks = usePromotePlaybooks();

  return (
    <TeamListWrapper>
      <div className="teams-nav">
        <div className="teams-nav-title">{t("teams.title")}</div>
      </div>
      <div className="teams-promote-playbook">
        <Carousel
          imageClassName="teams-promote-playbook-carousel"
          sources={promotePlaybooks}
        />
      </div>
      <div className="teams-promote-playbook">
        <Filter />
      </div>
      <div className="team-list">
        <TeamList teamList={teamList} />
      </div>
    </TeamListWrapper>
  );
};

export default TeamList;
