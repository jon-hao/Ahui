import '@albatrosses/ahui/lib/styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import router from "./pages/Routes";
import PageFrame from "./components/pageFrame/PageFrame";
import { Ahui } from "@albatrosses/ahui";

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <Ahui>
      <PageFrame>
        <RouterProvider router={router} />
      </PageFrame>
    </Ahui>
  </React.StrictMode>,
)
