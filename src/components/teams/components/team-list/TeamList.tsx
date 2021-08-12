import { map } from "lodash";
import React, { useContext } from "react";
import Card from "../../../common/card/Card";
import { LanguageContext } from "../../../common/context/LanguageContext";
import { TTeam } from "../../types/param";
import { TeamListWrapper } from "./TeamList.style";

type TTeamListProps = {
  className?: string;
  teamList: TTeam[];
};

const TeamList: React.FC<TTeamListProps> = ({ className, teamList }) => {
  const { t } = useContext(LanguageContext);

  return (
    <TeamListWrapper className={className}>
      {map(
        teamList,
        ({ type, name, image, total, current, reverse, link, joined }) => {
          return (
            <Card
              className="team-detail"
              key={name}
              image={<img src={image} />}
            >
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
            </Card>
          );
        }
      )}
    </TeamListWrapper>
  );
};

export default TeamList;
