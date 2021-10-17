import React from "react";
import { EntryWrapper } from "./Entry.style";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import zhCN from "../lang/zh-CN";
import { Language } from "../constants/language";
import "../style/variable.scss"
import "./Entry.scss"

const languages = {
  [Language.ZHCN]: zhCN,
};

const Entry: React.FC<any> = () => {
  return (
    <LanguageProvider languages={languages}>
      <ThemeProvider>
        <EntryWrapper className="dark">
          <div>PuJunhao</div>
        </EntryWrapper>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default Entry;
