import React from "react";
import { Theme } from "../constants/style";
import { LanguageProvider } from "./context/LanguageContext";
import "./Entry.scss";

const languages = {};

const Entry: React.FC<any> = () => {
  return (
    <LanguageProvider languages={languages}>
      <div className={Theme.Light as any}>
        <div className="example">Example</div>
      </div>
    </LanguageProvider>
  );
};

export default Entry;
