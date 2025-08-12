import { DashboardWrapper } from "./Dashboard.style";
import Market from "./components/market/Market";

const Dashboard:React.FC = () => {
  return (
    <DashboardWrapper>
      <Market />
    </DashboardWrapper>
  );
}

export default Dashboard;
