import { DashboardWrapper } from "./Dashboard.style";
import Market from "./components/market/Market";
import Securities from "./components/securities/Securities";
import Trends from "./components/trends/Trends";

const Dashboard:React.FC = () => {
  return (
    <DashboardWrapper>
      {/* <Trends />
      <Securities /> */}
      <Market />
    </DashboardWrapper>
  );
}

export default Dashboard;
