import "@/common/style/index.css";
import { createRoot } from 'react-dom/client';
import Entry from "./components/Entry";
import React from "react";

createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <Entry />
  </React.StrictMode>,
)