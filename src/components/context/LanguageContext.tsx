import { get, reduce } from "lodash";
import React, { useState } from "react";
import { Language } from "../../constants/language";

type TLanguages = {
  [key in Language]?: unknown;
};

export const LanguageContext = React.createContext({
  language: Language.ZHCN,
} as any);

export const LanguageProvider: React.FC<{ languages: TLanguages }> = ({
  children,
  languages = {} as TLanguages,
}) => {
  const [language, setLanguage] = useState(Language.ZHCN);

  const t = (path: string, param: any) => {
    const context = get(languages, `${language}.${path}`, "");
    let result = context;
    if (param) {
      result = reduce(
        param,
        (text, value, key) => {
          return text.replaceAll(`{{${key}}}`, value);
        },
        context
      );
    }
    return result;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: (lang: Language) => setLanguage(lang),
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
