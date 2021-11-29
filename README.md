# Ahui

> 自用UI组件、色彩、字体以及样式库

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

```js
import { LanguageProvider, Theme } from "@albatrosses/ahui"
import "@albatrosses/ahui/style/index.css"

const languages = {
  [Language.ZHCN]: zhCN
};

const Entry: React.FC<any> = () => {
  return (
    <LanguageProvider languages={languages}>
      <EntryWrapper className={Theme.Light}>
        <div>Do Something</div>
      </EntryWrapper>
    </LanguageProvider>
  );
};
```

As well, you can use theme in your scss

```scss
body {
  @include theme($theme-content) {
    box-shadow: themed('shadow-primary');
  }
}
```
