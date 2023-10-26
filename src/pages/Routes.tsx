import Trends from "./trends/Trends";
import Dashboard from "./dashboard/Dashboard";
import { TRoute } from "src/common";

const routes: TRoute[] = [
  {
    name: "Dashboard",
    path: "/",
    component: <Dashboard />
  },
  {
    name: "Trends",
    path: "/trends",
    component: <Trends />
  },
];

export default routes;
