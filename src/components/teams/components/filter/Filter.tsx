import { map } from "lodash";
import React, { useContext } from "react";
import { PlaybookType } from "../../../../constants/playbook";
import { LanguageContext } from "../../../common/context/LanguageContext";
import { FilterWrapper } from "./Filter.style";

type TFilterProps = {
  className?: string;
};

const playbookType = [
  PlaybookType.Hardcore,
  PlaybookType.Joy,
  PlaybookType.Emotion,
  PlaybookType.Horror,
  PlaybookType.Other,
];

const Filter: React.FC<TFilterProps> = ({ className }) => {
  const { t } = useContext(LanguageContext);

  return (
    <FilterWrapper className={className}>
      {map(playbookType, (type, key) => (
        <div key={key} className="teams-filter-item">
          {t(`playbook.types.[${type}]`)}
        </div>
      ))}
    </FilterWrapper>
  );
};

export default Filter;
