import { createBrowserRouter } from "react-router-dom";
import Economy from "./Economy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Economy />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

export default router;
