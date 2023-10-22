import 'src/common/assets/styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import router from "./pages/Routes";
import PageFrame from "src/components/pageFrame/PageFrame";
import { AhKite} from 'src/common/contexts/AhKiteContext';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <AhKite>
      <PageFrame>
        <RouterProvider router={router} />
      </PageFrame>
    </AhKite>
  </React.StrictMode>,
)
