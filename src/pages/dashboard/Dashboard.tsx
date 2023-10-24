import { DashboardWrapper, PlaceHolderWrapper } from "./Dashboard.style";
import Trending from "./components/trending/Trending";

const Dashboard:React.FC = () => {
  return (
    <DashboardWrapper>
      <Trending />
      <PlaceHolderWrapper>PlaceHolderWrapper1</PlaceHolderWrapper>
      <PlaceHolderWrapper>PlaceHolderWrapper2</PlaceHolderWrapper>
      <PlaceHolderWrapper>PlaceHolderWrapper3</PlaceHolderWrapper>
    </DashboardWrapper>
  );
}

export default Dashboard;
