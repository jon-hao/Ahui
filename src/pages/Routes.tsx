import { createBrowserRouter } from "react-router-dom";
import Trends from "./trends/Trends";

const router = createBrowserRouter([
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
