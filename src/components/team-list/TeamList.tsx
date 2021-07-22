import React, { useContext, useState } from "react";
import { TeamListWrapper } from "./TeamList.style";
import useTeamList from "./hooks/useTeamList";
import { Filter } from "./types/param";
import { map } from "lodash";
import { LanguageContext } from "../common/LanguageContext";

const TeamList: React.FC<any> = () => {
  const { t } = useContext(LanguageContext);
  const [filter, setFilter] = useState<Filter>({});
  const teamList = useTeamList(filter);

  return (
    <TeamListWrapper>
      <div className="search">Search</div>
      <div className="filter-bar">Filter</div>
      <div className="team-list">
        {map(
          teamList,
          ({ type, name, total, current, reverse, link, joined }) => {
            return (
              <div className="team-detail" key={name}>
                <div className="team-detail-type">
                  {t(`playbook.type.options[${type}]`)}
                </div>
                <div className="team-detail-name">
                  <a href={link}>{name}</a>
                </div>
                <div className="team-detail-people">
                  {`${current[0]}/${total[0]}${t(`gender[0]`)}`}
                  {`${current[1]}/${total[1]}${t(`gender[1]`)}`}
                </div>
                <div className="team-detail-reverse">{reverse}</div>
                <div className="team-detail-button">
                  <button>{t("button.join")}</button>
                </div>
                <div className="team-detail-status">可加入</div>
              </div>
            );
          }
        )}
      </div>
    </TeamListWrapper>
  );
};

export default TeamList;
