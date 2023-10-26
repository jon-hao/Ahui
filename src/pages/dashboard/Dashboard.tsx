import { DashboardWrapper, PlaceHolderWrapper } from "./Dashboard.style";
import Trends from "./components/trends/Trends";

const Dashboard:React.FC = () => {
  return (
    <DashboardWrapper>
      <Trends />
      <PlaceHolderWrapper>PlaceHolderWrapper1</PlaceHolderWrapper>
      <PlaceHolderWrapper>PlaceHolderWrapper2</PlaceHolderWrapper>
      <PlaceHolderWrapper>PlaceHolderWrapper3</PlaceHolderWrapper>
    </DashboardWrapper>
  );
}

export default Dashboard;
