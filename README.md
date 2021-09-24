# ahui

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
import { Button } from "@albatrosses/ahui"
import { LanguageProvider } from "@albatrosses/ahui"
import { BackgroundColor } from "@albatrosses/ahui"
import "@albatrosses/ahui/style/index.css"

const Case = () => {
  <LanguageProvider>
    <Button style={"background-color" : BackgroundColor.Light1} />
  </LanguageProvider>
}
```