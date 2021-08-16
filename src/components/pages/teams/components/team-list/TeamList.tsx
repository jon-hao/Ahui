import { map } from "lodash";
import React, { useContext } from "react";
import { ReactSVG } from "react-svg";
import { TTeam } from "../../types/param";
import { TeamListWrapper } from "./TeamList.style";
import applyTeam from "../../../../../assets/svg/apply-team.svg";
import Card from "../../../../common/card/Card";
import { LanguageContext } from "../../../../context/LanguageContext";
import { ThemeContext } from "../../../../context/ThemeContext";

type TTeamListProps = {
  className?: string;
  teamList: TTeam[];
};

const TeamList: React.FC<TTeamListProps> = ({ className, teamList }) => {
  const { t } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  return (
    <TeamListWrapper className={className} theme={theme}>
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
                {t(`playbook.types.[${type}]`)}
              </div>
              <div className="team-detail-name">{name}</div>
              <div className="team-detail-people">
                {t("teams.people")}
                {`${t(`gender[0]`)} ${current[0]}/${total[0]}`}{" "}
                {`${t(`gender[1]`)} ${current[1]}/${total[1]}`}
              </div>
              <div className="team-detail-reverse">
                {t("teams.reverse")}
                {reverse ? "是" : "否"}
              </div>
              <div className="team-detail-button">
                <ReactSVG src={applyTeam} />
              </div>
            </Card>
          );
        }
      )}
    </TeamListWrapper>
  );
};

export default TeamList;
