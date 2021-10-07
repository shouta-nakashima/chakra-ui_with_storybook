This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### install NextJS with typescript

`npx create-next-app {your project name} --typescript`

### install prettier and setting eslint

`npm install -D prettier eslint-config-prettier`

```eslintrc.json
//.eslintrc.json
{
  "extends": ["next", "next/core-web-vitals", "prettier"]
}
```

```//package.json
// package.json
  "prettier": {
    "trailingComma": "all",
    "tabWidth": 2, 
    "semi": false,
    "singleQuote": true,
    "jsxSingleQuote": true,
    "printWidth": 100 
  },
```

``` package.json
  "scripts": {
    "lint": "next lint --dir src",
    "lint:fix": "eslint src --ext .js,jsx,.ts,.tsx --fix",
    "format": "prettier --write --ignore-path .gitignore './**/*.{js,jsx,ts,tsx,json,css}'"
  },
```

### install husky and setup

`npm install -D husky lint-staged`

```
//package.json
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  },
```

#### huskyの有効化
`npx husky install`

```package.json
  "scripts": {
    "prepare": "husky install"
  },
```

`npx husky add .husky/pre-commit "hook"`

### stylelint

`npm install -D stylelint stylelint-scss stylelint-config-recommended-scss prettier stylelint-config-prettier stylelint-prettier`

`npm install sass`

```.stylelintrc
//.stylelintrc
{
  "plugin": [
    "stylelint-scss"
  ],
  "extends": [
    "stylelint-config-recommended-scss",
    "stylelint-prettier/recommended"
  ],
  "ignoreFiles": [
    "**/node_modules/**"
  ],
  "rules": {
    "at-rule-no-unknown": [true, {
      "ignoreAtRules": ["function", "if", "else", "for", "each", "include", "mixin", "content"]
    }]
  }
}
```

```
"scripts": {
    "lint": "stylelint \"src/**/*.scss\"",
    "format": "stylelint --fix \"src/**/*.scss\""
  },
```

### install and setup Chakra UI

`@chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4`

```_app.tsx
//_app.tsx

import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

const MyApp = ({ Component, pageProps }: AppProps) =>  {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
```
