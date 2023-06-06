import { PropsWithChildren } from "react";
import { Language } from "./ahui/contexts/LanguageContext";
import { Ahui } from "./ahui";
import "./ahui/styles/index.css";

const App = ({ children }: PropsWithChildren) => {
  return (
    <Language languages={{}}>
      <Ahui>{children}</Ahui>
    </Language>
  );
};

export default App;
