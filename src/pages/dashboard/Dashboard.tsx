import { DashboardWrapper } from "./Dashboard.style";
import Securities from "./components/securities/Securities";
import Trends from "./components/trends/Trends";

const Dashboard:React.FC = () => {
  return (
    <DashboardWrapper>
      <Trends />
      <Securities />
    </DashboardWrapper>
  );
}

export default Dashboard;
