# Browser Object Storage
This library provides an interface for storing complex js objects in browser
localstorage, while preserving their types. This includes preserving Dates when they are
encoded.


# [Documentation](https://github.com/daniel-brenot/browser-object-storage)

## Getting Started
### Installation
- The Browser Object Storage package is published on the [npm](https://www.npmjs.com/package/browser-object-storage) Registry. 
- Install the package :
    `npm install browser-object-storage`


### Usage
Import `browser-object-storage` into any files that depend on the function
```js
import * as pointInPolygon from 'browser-object-storage';

```

Call the function anywhere you want to use it

```js

import { getValue, setValue } from 'browser-object-storage';


setValue('lastDate', new Date()); //Set date to today
console.log(getValue('lastDate').toString());
//Output: Sun Dec 29 2019 19:14:20 GMT-0500 (Eastern Standard Time)


```

## License
LGPL-3.0 License.
