import "@jon-hao/ahkite/assets/styles/index.css"
import { AhKite } from "@jon-hao/ahkite";
import ReactDOM from "react-dom/client"
import PageFrame from "src/components/pageFrame/PageFrame";
import routes from "./pages/Routes";
import { icons } from "./constants/iconConstant";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <AhKite routes={routes} icons={icons}>
    <PageFrame />
  </AhKite>
)
