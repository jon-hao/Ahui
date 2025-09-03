import Trends from "./trends/Trends";
import Dashboard from "./dashboard/Dashboard";
import { Icon, TRoute } from "@jon-hao/ahkite";

const routes: TRoute[] = [
  {
    name: "Dashboard",
    path: "/",
    component: <Dashboard />,
    icon: <Icon iconName="dashboard" />
  },
  {
    name: "Trends",
    path: "/trends",
    component: <Trends />,
    icon: <Icon iconName="trends" />
  },
];

export default routes;
