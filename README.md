# Ahui

> UI components, colors, fonts and style for Albatrosses

- Components
- Color
- Font
- Reset CSS

## Install

```
npm install @albatrosses/ahui

or

yarn add @albatrosses/ahui
```

## Usage
Import `@albatrosses/ahui` and `@albatrosses/ahui/style/index.css` in your root component

```js
import { LanguageProvider, Theme, Language } from "@albatrosses/ahui"
import "@albatrosses/ahui/style/index.css"

const languages = {
  [Language.ZHCN]: {
    test: "测试"
  }
};

const Entry: React.FC<any> = () => {
  return (
    <LanguageProvider languages={languages}>
      <div className={Theme.Light as any}>
        <div className="example">Example</div>
      </div>
    </LanguageProvider>
  );
};
```

Then you can use theme in your scss

```scss
@import "./src/assets/style/index.scss";

.example {
  @include theme($theme-content) {
    box-shadow: themed("shadow-primary");
    background-color: themed("color-success");
  }
}
```

As well, you can import `index.scss` within global config

```typescript
css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/style/index.scss";
        `
      }
    }
  },
```
