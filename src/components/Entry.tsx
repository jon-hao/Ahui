import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import "./Entry.scss";
import Am from "./mobile";

const languages = {};

const Entry: React.FC<any> = () => {
  return (
    <LanguageProvider languages={languages}>
      <Am.Container title="Ahui">UI components, colors, fonts and style for Albatrosses</Am.Container>
    </LanguageProvider>
  );
};

export default Entry;
