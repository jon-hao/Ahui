import React from "react";
import { EntryWrapper } from "./Entry.style";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import language from "../lang/zh-CN";
import { Language } from "../constants/language";

const Entry: React.FC<any> = () => {
  return (
    <LanguageProvider languages={{[Language.ZHCN] : language}}>
      <ThemeProvider>
        <EntryWrapper>
          PuJunhao
        </EntryWrapper>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default Entry;
