# <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="30" height="30" /> REACT

In this repository, I keep all my work done with "React" in bulk.

## 🖊 What have I learned so far ?

### ⚒ Setup

- How to install and use **Create-React-App** [ In real projects always use **Vite <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/410px-Vitejs-logo.svg.png" style="width: 25px">** for better performance and comminity support, but for learning Create-React-App is still ok ].

### 💻 Rendering

- What is a **Component** and how could i declare it.
- What is **JSX** and how can i use.
- What is **conditional rendering** and how can i use [ **Ternary Operator**, **Short Circuiting** ].
- How to render multiple components at once using loops. [ .map() forexample ]
- What is **React fragment** and how can i use [ Instead of element blocks like "Div" simply use <> and </> ].
- What is **component composition** and how i can use. [ { children } to make component reusable. And also fix **Prop Drilling** ]
- What is the difference between **Component**, **Instance** and the **Element**.
- When u have multiple child elements of the same type always use **Key** prop for rendering performance. So they are not recreated by **Diffing Algorithm**.
- What is **SideEffect** and why i should avoid it on rendering. [ Examples Mutating external variable, HTTP requests, writing to DOM ]
- What is **Pure Function**and why it has no **Side Effects**. [ Does not change any variable outside its scope, given the same input returns same input. ]
- What is the **Rules of Render Logic**. [ Components must be pure, no side effects ]

#### 🔴 So in render logic;

- Do NOT perform network request. ( API Calls )
- Do NOT start timers.
- Do NOT directly use the DOM API.
- Do NOT mutate objects or variables.
- Do NOT update state ( or refs ): [ This will create an infinite loop ]
- Side effects are allowed in **Event Handler Functions** [ Also a special hook to register side effects **useEffect**]

### ℹ Props

- What is **props** and how can i use [ For DRY prensiple immediately **destructure** props object ].
- Why props are **immutable** [ Readonly ].
- What is **children** props, and how can i use them.
- What is **prop drilling**, and how could i do that. [ Passing data through parent components nested components ]
- How to **passing elements** as a prop [ Alternative to children prop ]
- How to make a component really reusable, creating **external state** and more flexible components for **consumers**.
- What is **propTypes** and how can i implement it to my components. [ To do this use TypeScript instead of JavaScript ]
- What is **Key** prop and what it does. [ Special prop that i use to tell the **Diffing Algorithm** that element is unique ]
- When should i use **Key** prop. [ In lists to keep state without destroyed, and the reset state ]

### ♦ State

- What is **useState()** and how to use it.
- Why should i use a **callback function** into useState setter function.
- What is **React Hooks** and how to use them. [ Forexample useState, useReducer, useEffect ]
- One component has one state and isolated from other components.
- What is **Controlled Elements**, why and how i gonna use them. [ When working with forms ]
- What is State Management **[ Deciding when to create state, types of state and how data flows through the App]**
- When should i derive a state. **[ Local or Global State ]**
- What is **State Lifting** and when should i use it.
- Whats the difference between **Local and Global** state, and why i need to always start with **Local State**
- What is **State Update Batching**, and why it is important. [ Grouping setStates into one function and only rendering one time for performance. "Available on React@18" ]

### 🖊 Information & Behind The Scenes

- What is the difference between **Imperetive** and **Declarative**. [ Vanilla JS vs React ]
- What are React frameworks. **[ NextJS, Remix ]**
- Why does React use **one-way** data flow. [ Also Angular has **two-way** data flow. ]
- What is **SSR [ Server-Side Rendering ]**, **CSR [ Client-Side Rendering ]** and **SPA [ Single-Page Application ]**.
- What is **React Dev Tools** and how can i use.
- What is the **Thinking in React** [ Break UI into components, component tree, build static version (without state), think about state and establish data flow. ]
- What is **Redux** and when i need to use it. [ Global State Management ]
- Why should I organize my files into **one file** for **each component**. [ To avoid a big mess ]
- How components are displayed on the screen and how renders are triggered. [ Initial render of app and when state is updated ]
- What is **Reconciler [ Fiber ]** and how does it work. [ Simply comparing last state and updated state of DOM, then applying renders on only changes. ]
- What is the difference between **React Element Tree [ Called Virtual DOM aswell ] ** and **Fiber Tree**.
- What is **Event Propagation and Event Delegation**.
- How React handles events behind the scenes. **[ Capturing Phase and Bubbling Phase ]**
- What is **Synthetic Events**.
- What is the differance about **Event Handlers** between Vanilla JS and React.

### ⌨ My **Codesandbox** practices about React ⏬

- <a href="https://t.ly/_9303">📆 Date Counter </a>
- <a href="https://t.ly/qxh5X">📕 Small Exam with State</a>
- <a href="https://t.ly/dq3vf">🃏 User card and List Rendering</a>
- <a href="https://t.ly/wYSUl">📜 Accordions</a>
- <a href="https://t.ly/mkXpt">💰 Bill Calculator </a>
- <a href="https://t.ly/BX59P">🅰 Reusable-Flexible Text Expander Component</a>
