import '@albatrosses/ah-kite/lib/styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import router from "./pages/Routes";
import PageFrame from "./components/pageFrame/PageFrame";
import * as Test from "@albatrosses/ah-kite";

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <Test.AhKite>
      <PageFrame>
        <RouterProvider router={router} />
      </PageFrame>
    </Test.AhKite>
  </React.StrictMode>,
)
