import "./common/style/index.css";
import { createRoot } from 'react-dom/client';
import React from "react";
import { Ahui } from "./common/context/AhuiContext";
import { Language } from "./common/context/LanguageContext";
import Chat from "./pages/Chat";

const languages = {};

const App: React.FC = () => {
  return (
    <Language languages={languages}>
      <Ahui>
        <Chat />
      </Ahui>
    </Language>
  );
};

createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)