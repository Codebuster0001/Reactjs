## useCallback

It's used primarily for performance optimization, especially in scenarios where you need to pass callbacks to child components.

In Simple way the required part of method of a function is used and other remain same as its.

```html
const memoizedCallback = useCallback(
  (function) => {
    // Callback logic
  },
  [dependencies]
);
```
## Example

```html
const passwordGenerator = useCallback(() => {
  
  }, [length, numberAllowed, charAllowed, setPassword])
  
```

## useEffect 


 It runs after every render by default, but you can control when it runs by specifying dependencies. It can be used to manage data fetching, subscriptions, timers, and other side effects in a declarative way.



useEffect takes two arguments: a function containing the side effect logic and an optional dependencies array.

The function passed to useEffect is the side effect you want to perform. This function will run after every render by default.

If you want to run the effect only once after the initial render, you can pass an empty dependencies array ([]).

If you want the effect to run whenever certain values change, you can specify those values in the dependencies array. React will compare the current and previous values of the dependencies and re-run the effect if any of them have changed.

```html
  useEffect(() => {
    // Effect logic here
    return () => {
      // Cleanup logic here (optional)
    };
  }, [dependencies]);
```

## useRef

Its is simple it is used for take referance of any html element or handle event by taking referance of particular by using useRef 
and you what to add >[!Important:][!ref="referance element name "] in the html tage Element.

```html

                    +--------------+
                    |  useRef()    |
                    +------+-------+
                           |
                           |            +---------------+
                           +----------->|  .current     |
                                        |     property  |
                                        +---------------+
                                                     |
                                                     |
                           +-------------------------+-------------------------+
                           |                         |                         |
                           |                         |                         |
                           |                         |                         |
                    +------v-------+        +--------v-------+         +--------v-------+
                    | Component   |        |  Component    |         |  Component    |
                    |   Render    |        |   Render      |         |   Render      |
                    |             |        |               |         |               |
                    +-------------+        +---------------+         +---------------+
```