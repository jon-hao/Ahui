import { LanguageProvider } from "../common/context/LanguageContext";

const languages = {};

const Entry: React.FC<any> = () => {
  return (
    <LanguageProvider languages={languages}>
      {"UI components, colors, fonts and style for Albatrosses"}
    </LanguageProvider>
  );
};

export default Entry;
