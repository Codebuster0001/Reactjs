### Theory

## What is the Virtual DOM?
The Virtual DOM is a lightweight, in-memory representation of the actual DOM (Document Object Model) tree.
It's a virtual copy of the real DOM and exists entirely in memory.
React uses the Virtual DOM to optimize and speed up the process of updating the UI.

## How Does it Work?
When a React component's state or props change, React constructs a new Virtual DOM tree representing the updated UI.
React then compares this new Virtual DOM tree with the previous one (diffing process).
It identifies the differences (changes) between the two trees.
Finally, React updates only the parts of the real DOM that have changed, minimizing the number of actual DOM manipulations required.


```html
        Real DOM                      Virtual DOM

    +--------------+             +------------------+
    |    Element   |             |    Element       |     Note: Each    element in the Virtual DOM represents a component or an HTML element.
    +--------------+             +------------------+
           |                               |
           |                               |
    +--------------+             +------------------+    Note: The Virtual DOM is a lightweight, in-memory representation of the real DOM.
    |    Element   |             |    Element       |
    +--------------+             +------------------+
           |                               |
           |                               |
    +--------------+             +------------------+    Note: When state or props change, React constructs a new Virtual DOM tree.
    |    Element   |             |    Element       |
    +--------------+             +------------------+
           |                               |
           |                               |
    +--------------+             +------------------+    Note: React then compares the new Virtual DOM with the previous one (diffing process).
    |    Element   |             |    Element       |
    +--------------+             +------------------+
           |                               |
           |                               |
    +--------------+             +------------------+    Note: React identifies the differences (changes) between the two trees.
    |    Element   |             |    Element       |
    +--------------+             +------------------+
           |                               |
           |                               |
    +--------------+             +------------------+    Note: React updates only the parts of the real DOM that have changed, minimizing DOM manipulations.
    |    Element   |             |    Element       |
    +--------------+             +------------------+

```

## [](https://github.com/acdlite/react-fiber-architecture) Fibre