import { PropsWithChildren } from "react";
import { Language } from "./ahui/context/LanguageContext";
import { Ahui } from "./ahui";

const App = ({ children }: PropsWithChildren) => {
  return (
    <Language languages={{}}>
      <Ahui>{children}</Ahui>
    </Language>
  );
};

export default App;
