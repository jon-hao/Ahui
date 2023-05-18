import { createContext, useState } from "react";

type TLanguages = {
  [key in Language]?: any;
};

export enum Language {
  ZHCN = "zh-CN",
  ENGB = "en-GB",
}

type TProps = {
  children: React.ReactNode;
  languages: TLanguages;
}

export const LanguageContext = createContext({
  language: Language.ZHCN,
} as any);

export const LanguageProvider: React.FC<TProps> = ({
  children,
  languages = {} as TLanguages,
}) => {
  const [language, setLanguage] = useState(Language.ZHCN);

  const t = (path: string, param: Record<string, string>[]) => {
    const context = languages?.[language]?.[path] ?? "";
    let result = context;
    if (param) {
      result = param.reduce(
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
