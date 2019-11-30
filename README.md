# react-tab-visbility

supports react 15.x and 16.x

use react-tab-visibility for browser tab activity informations.

Get informed on tab change
Get time of inactivity after reactivation

**[Watch Demo](https://fluse.github.io/react-tab-visibility/)**

## Install

```
npm install react-tab-visibility --save
```

## How to use

```jsx

import TabVisibility from 'react-tab-visibility'

class YourComponent extends TabVisibility {
    
    onTabVisibilityChange({ isTabVisible, hiddenTime }) {
        
        this.setState({ isTabVisible })
        
        console.log(isTabVisible, hiddenTime)
    }
}

```

## Development

if you want to add or optimize this component, feel free <3

clone this repository and run install

```
npm install
```

start dev server

```
npm start
```

make your changes and build new es5 friendly version

```
npm run build
```

## Give me a coffee

[![Donate](https://img.shields.io/badge/donate-%20%E2%9D%A4%20-green.svg)](https://www.paypal.me/schauf)

[get in touch?](http://www.holger-schauf.de)
