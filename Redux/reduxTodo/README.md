## What is Redux?

Redux is a predictable state container for JavaScript applications. It helps you manage the state of your application in a predictable way, making it easier to develop and maintain complex applications, especially those with a lot of dynamic user interfaces.

## Why Redux?

Imagine you have a web application with many components that need to share and update the same state. Without a proper management system, it can become challenging to track and manage the state changes, leading to bugs and inconsistencies.

Redux provides a centralized store that holds the entire state of your application, making it easy to access and modify the state from any component. It also enforces a strict set of rules to ensure that state changes are predictable and traceable, which helps in debugging and testing.

## How to make store?

```html
in src/app/store.js
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({});
```

## Difference between Redux and Redux-Toolkit? 

