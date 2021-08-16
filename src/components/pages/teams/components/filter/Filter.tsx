import { map } from "lodash";
import React, { useContext } from "react";
import {
  PlaybookDifficulty,
  PlaybookModus,
  PlaybookType,
  PlaybookWorldView,
} from "../../../../../constants/playbook";
import Select from "../../../../common/select/Select";
import { LanguageContext } from "../../../../context/LanguageContext";
import { FilterWrapper } from "./Filter.style";

type TFilterProps = {
  className?: string;
};

const playbookTypes = [
  PlaybookType.Hardcore,
  PlaybookType.Joy,
  PlaybookType.Emotion,
  PlaybookType.Horror,
];

const playbookDifficulty = [
  PlaybookDifficulty.Rookie,
  PlaybookDifficulty.Advanced,
  PlaybookDifficulty.Intense,
];

const playbookWorldView = [
  PlaybookWorldView.PureDetective,
  PlaybookWorldView.MysteryStory,
  PlaybookWorldView.NewPureDetective,
];

const playbookModus = [
  PlaybookModus.Boxed,
  PlaybookModus.CityLimit,
  PlaybookModus.Exclusive,
];

const peopleCount = [5, 6, 7, 8, 9, 10];

const Filter: React.FC<TFilterProps> = ({ className }) => {
  const { t } = useContext(LanguageContext);

  const playbookTypeOptions = map(playbookTypes, (type) => ({
    name: t(`playbook.types.[${type}]`),
    value: type,
  }));

  const playbookDifficultyOptions = map(playbookDifficulty, (difficulty) => ({
    name: t(`playbook.difficulty.[${difficulty}]`),
    value: difficulty,
  }));

  const playbookWorldViewOptions = map(playbookWorldView, (worldView) => ({
    name: t(`playbook.worldView.[${worldView}]`),
    value: worldView,
  }));

  const playbookModusOptions = map(playbookModus, (modus) => ({
    name: t(`playbook.modus.[${modus}]`),
    value: modus,
  }));

  const peopleCountOptions = map(peopleCount, (count) => ({
    name: count.toString(),
    value: count,
  }));

  return (
    <FilterWrapper className={className}>
      {/* {map(playbookType, (type, key) => (
        <div key={key} className="teams-filter-item">
          {t(`playbook.types.[${type}]`)}
        </div>
      ))} */}
      <div className="teams-filter-item">
        <Select
          text={t("teams.filter.type")}
          options={playbookTypeOptions}
          onSelect={() => null}
        />
      </div>
      <div className="teams-filter-item">
        <Select
          text={t("teams.filter.difficulty")}
          options={playbookDifficultyOptions}
          onSelect={() => null}
        />
      </div>
      <div className="teams-filter-item">
        <Select
          text={t("teams.filter.worldView")}
          options={playbookWorldViewOptions}
          onSelect={() => null}
        />
      </div>
      <div className="teams-filter-item">
        <Select
          text={t("teams.filter.modus")}
          options={playbookModusOptions}
          onSelect={() => null}
        />
      </div>
      <div className="teams-filter-item">
        <Select
          text={t("teams.filter.people")}
          options={peopleCountOptions}
          onSelect={() => null}
        />
      </div>
    </FilterWrapper>
  );
};

export default Filter;
