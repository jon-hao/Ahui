import React from "react";
import { TrendsSummaryTitle, TrendsSummaryUpdateDate, TrendsSummaryWrapper } from "./TrendsSummary.style";
import dayjs from 'dayjs';
import { DATE_TIME_FORMAT } from 'src/common/constants/dateEnum';

const TrendsSummary: React.FC = () => {
  return (
    <TrendsSummaryWrapper>
      <TrendsSummaryTitle>Todays Statistics</TrendsSummaryTitle>
      <TrendsSummaryUpdateDate>Update By {dayjs().format(DATE_TIME_FORMAT)}</TrendsSummaryUpdateDate>
    </TrendsSummaryWrapper>
  )
}

export default TrendsSummary;
