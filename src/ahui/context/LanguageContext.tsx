import { createContext, useState } from "react";
import { LanguageToken } from "../constants/languageEnum";
import { TLanguage } from "../types/languageType";

type TProps = {
  children: React.ReactNode;
  languages: TLanguage;
};

type TContext = {
  language: LanguageToken;
  setLanguage: (lang: LanguageToken) => void;
  t: (path: string, param: Record<string, string>[]) => string;
};

export const LanguageContext = createContext<TContext>({
  language: LanguageToken.ZHCN,
  setLanguage: () => {},
  t: () => "",
});

export const Language: React.FC<TProps> = ({
  children,
  languages = {} as TLanguage,
}) => {
  const [language, setLanguage] = useState(LanguageToken.ZHCN);

  const t = (path: string, param: Record<string, string>[]) => {
    const context = languages?.[language]?.[path] ?? "";
    let result = context;
    if (param) {
      result = param.reduce((text, value, key) => {
        return text.replaceAll(`{{${key}}}`, value);
      }, context);
    }
    return result;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: (lang: LanguageToken) => setLanguage(lang),
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
