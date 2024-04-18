# React 


## What is useState ?
 useState is a React Hook that allows functional components in React to manage state. It enables you to add state variables to your components without needing to convert them into class components. With useState, you can store and update state within functional components.

 ## Initialization:
 When you call useState within a functional component, you provide an initial value for the state variable. For example:
 ```html
const [count, setCount] = useState(0);
>[IMPORTANT : 

  This argument can be a string, a number, an array, an object, or any other JavaScript data type. useState() returns an array containing two items.

count: is variable
setCount : is method which refer the count
]
```
In this example, count is the state variable initialized to 0, and setCount is the function that allows you to update the value of count.

## Rendering: 
The component re-renders whenever its state changes. React keeps track of the state variables defined using useState and automatically re-renders the component when any of them change.

## Updating State:
 To update the state variable, you call the function returned by useState (in this case, setCount) and pass the new value as an argument. For example:
```html
setCount(count + 1);
```
This updates the value of count to its current value plus 1.

## simple Diagram
```html

                    +---------------------+
  Initial Render    |      Functional     |
+------------------>|      Component      |<-------------------+
                    |                     |                    |
                    |   State: count=0    |                    |
                    |                     |                    |
                    +---------+-----------+                    |
                              |                                |
                              |                                |
                    +---------v-----------+                    |
     State Update   |                     |                    |
+------------------>|     useState()     |<-------------------+
   (setCount)      |                     |
                    +---------+-----------+
                              |
                      +-------v--------+
                      |    React DOM   |
                      +----------------+

```