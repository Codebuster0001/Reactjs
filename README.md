# Reactjs
React Js Introduction - By Deepak Kushwaha

## What is ReactJs and Why it is Introduced ?


1. ReactJS is a JavaScript library primarily used for building user interfaces for web applications. 

2. It was introduced to make it easier and more efficient to create dynamic, interactive, and reusable UI components.

3. React helps developers build complex UIs by breaking them down into smaller, manageable pieces called components. These components can be reused throughout the application, which simplifies development and maintenance.

4. React also efficiently updates and renders UI components when data changes, thanks to its virtual DOM (Document Object Model) technology. Overall, ReactJS was introduced to streamline web development, enhance performance, and improve the user experience.

> IMPORTANT

## Installation Process for ReactJS.
[Step 1.]() 
### Install Node.js:
ReactJS relies on Node.js for package management and running JavaScript on the server side. Download and install Node.js from [nodejs.org](https://nodejs.org/en/download/).

[Step 2.]() 
### Create React App:
React provides a convenient tool for setting up new projects called create-react-app. Open your terminal and run the following command to install it globally:
```html
npm install -g create-react-app
```
[Step 3.]() 
### Create a New React App:
Once create-react-app is installed, you can use it to generate a new React application. Navigate to the directory where you want to create the app and run
```html
npx create-react-app my-app

```

[Step 4.]() 
### Navigate to the Project Directory:
Move into the newly created project directory:
```html
cd my-app
```

[Step 5.]() 
### Start the Development Server:
You can start the development server to see your React app in action. Run:
```html
npm start
```

## What is npm and why it used ?
  Npm, stands for "Node Package Manager," is a package manager for JavaScript.

  Okay, imagine you have a big box of Lego pieces. Each piece is like a little tool or part of a program that helps you build something cool, like a spaceship or a castle. Now, sometimes you want to build something new, but you don't have all the pieces you need in your box.

Here's where npm comes in. npm is like a huge store where you can find all sorts of Lego pieces, but instead of Lego, they're little bits of code that programmers have made. These bits of code can help you do all kinds of things, like making a website, creating a game, or even building a robot!

## What is render?

Rendering in web development is the process of turning data and instructions into something visible and interactive on the user's screen, usually through the use of HTML, CSS, and JavaScript. It's what allows us to create dynamic and engaging experiences on the web.


## What is State and How it is used ?
 
  State is a dynamic data storage that provides a mechanism for components to manage, keep track of changing data, and trigger re-rendering when it is updated.
  ```html

          +----------------+
          |                |
          |    Component   |
          |                |
          +--------+-------+
                   |
                   | (#Initial render)
                   |
                   V
          +--------+-------+
          |                |
          |  #Initial State |
          |                |
          +--------+-------+
                   |
                   | (State update)
                   |
                   V
          +--------+-------+
          |                |
          |   Updated      |
          |    State       |
          |                |
          +--------+-------+
                   |
                   | (Re-render)
                   |
                   V
          +--------+-------+
          |                |
          |   Updated UI   |
          |                |
          +----------------+

```
## What are Hooks and how many are there?

  
Hooks are a feature introduced in React 16.8 that allow you to use state and other React features in functional components. They provide a way to reuse stateful logic across different components without needing to use class components or higher-order components.

There are several built-in hooks provided by React:

1. useState: Allows functional components to have state. It returns a stateful value and a function to update that value.

```html 
Syntax:
const [state, setState] = useState(initialState);
```

2. useEffect: Allows performing side effects in functional components.  It replaces lifecycle methods like componentDidMount componentDidUpdate, and componentWillUnmount.

```html 
Syntax:
useEffect(() => {
  // Side effect code here
}, [dependencies]);
```
3. useContext: Allows functional components to access the context provided by a Context.Provider component.

```html 
Syntax:
const value = useContext(MyContext);
```
4. useReducer: A more powerful alternative to useState. It is used for managing complex state logic and actions.

```html 
Syntax:
const [state, dispatch] = useReducer(reducer, initialState);
```
5. useCallback: Memoizes a function, preventing it from being recreated on every render.

```html 
Syntax:
const memoizedCallback = useCallback(() => {
  // Callback function code here
}, [dependencies]);
```
6. useMemo: Memoizes a value, preventing it from being recomputed on every render.
```html 
Syntax:

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

7.useRef: Allows functional components to hold mutable values that persist across renders.
```html 
Syntax:
const refContainer = useRef(initialValue);
```

8. useImperativeHandle: Customizes the instance value that is exposed when using ref with forwardRef.
```html 
Syntax:

useImperativeHandle(ref, () => ({
  // Exposed instance methods or properties
}));
```

9. useLayoutEffect: Similar to useEffect, but fires synchronously after all DOM mutations.
```html 
Syntax:
useLayoutEffect(() => {
  // Side effect code here
}, [dependencies]);
```

10. useDebugValue: Adds a label to custom hooks in React DevTools.
```html 
Syntax:

useDebugValue(value);
```