import { PropsWithChildren } from "react";
import { Ahui } from "@albatrosses/ahui";
import { Language } from "./common/context/LanguageContext";

const App = ({ children }: PropsWithChildren) => {
  return (
    <Language languages={{}}>
      <Ahui>{children}</Ahui>
    </Language>
  );
};

export default App;
