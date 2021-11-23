import React from "react";
import { EntryWrapper } from "./Entry.style";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import zhCN from "../lang/zh-CN";
import { Language } from "../constants/language";
import "./Entry.scss"
import { Theme } from "..";

const languages = {
  [Language.ZHCN]: zhCN,
};

const Entry: React.FC<any> = () => {
  return (
    <LanguageProvider languages={languages}>
      <ThemeProvider>
        <EntryWrapper className={Theme.Light}>
          <div className="example">Example</div>
        </EntryWrapper>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default Entry;
