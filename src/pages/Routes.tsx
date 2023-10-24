import { createBrowserRouter } from "react-router-dom";
import Trends from "./trends/Trends";
import Dashboard from "./dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/trends",
    element: <Trends />,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
]);

export default router;
