# Ahui

> UI components, colors, fonts and style for Albatrosses

- Components
- Color
- Fonts
- Reset CSS

## Install

```
npm install @albatrosses/ahui
```

## Usage
Import `@albatrosses/ahui` and `@albatrosses/ahui/styles/index.css` in your root component

```js
import { Language } from "@albatrosses/ahui";

const App: React.FC = () => {
  return (
    <Language languages={languages}>
      <Ahui>
        <App />
      </Ahui>
    </Language>
  );
};
```

Then you can use theme in your scss

```tsx
export const ChatWrapper = styled.div`
  background-color: ${paletteHelper(PaletteToken.ColorActive)};
  ${typographyHelp(TypographyToken.Content)};
  ${contourHelp(ContourToken.Primary)};
  ${radiusHelp(RadiusToken.Large)};
`;
```
