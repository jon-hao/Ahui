import "src/common/assets/styles/index.css"
import { AhKite} from "src/common";
import ReactDOM from "react-dom/client"
import PageFrame from "src/components/pageFrame/PageFrame";
import routes from "./pages/Routes";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <AhKite routes={routes}>
    <PageFrame />
  </AhKite>
)
