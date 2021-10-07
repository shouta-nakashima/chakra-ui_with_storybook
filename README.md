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
