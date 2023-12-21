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
- Why should i avoid to setState in render logic. [ In fetch or top level of code it makes million re-renders. *useEffect* comes to play. ]

### ✨ Side Effects

- What is effect [ *Interaction between a React component and the world outside the component*].
- What is the differance between _Event Handlers_ and _useEffect_.

#### Event Handlers

- Executed when the _corresponding event_ happens.
- Used to _React_ to an event.
- _Preferred way_ of creating side effects.

#### Use Effect

- Executed after the components mounts( _initial render_ ) And after subsequent re-renders ( _according to dependency array_ ).
- Without dependency array, _React doesn't know_ when to run the effect.
- Every _state variable and prop_ used inside the effect, must be included in dependency array.
- Used to keep a component synchronized with some external system ( _API calls_ )
- useEffect is like an eventlistener that is listening for dependency to change. When a dependency is changes, it will execute the effect again.
- [] Runs only on mount _( initial render )_, [ x,y,z ] mount and re-render triggered _by updating x,y or z_, no dependency array is simply updating on _everytime something change_. ( Usually Bad⛔ )

#### API Calls and Error Handling

- Always wrap API calls into _try and catch blocks_.
- To handle errors and _display them into UI_ use state.
- Conditionally rendering is important at this point. If there is an error, u have to _display meaningful messages_ into UI.
- Always check _response.ok_ property to handle error.

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
- Why we call React is a **Library**.
- What are Frameworks built on top of React. **[ Next.js / Remix / Gatsby ]**

#### 3rd-Party React Libraries 👇

- For Routing ▶ **React Router / React Location**
- HTTP request ▶ **fetch() / Axios**
- Remote State Management ▶ **React Query / SWR / Apollo**
- Global State Management ▶ **Context API / Redux / Zustand**
- Styling ▶ **CSS Modules / Styled Components / Tailwind CSS**
- Form Management ▶ **React Hook Form / Formik**
- Animations - Transitions ▶ **Motion / React Spring**
- UI Components ▶ **Chakra / Mantine**

### Practical Summaries About React <img style="width: 25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207">✍

#### About Components

- A component is like a _blueprint_ for a piece of UI that will eventually exist on the screen.
- When we "use" a component, _React creates a component instance_ containing props, state, and more.
- A component instance, when rendered, will return a _React element_.
- Never declare a _new component inside another_ component! Doing so will re-create the _nested component every time_ the parent component re-renders. React will always see the _nested component as new_.

#### About State

- _Multiple state updates_ inside an event handler function are _batched_, so they happen all at once, causing _only one re-render_. This means we can not access a state variable _immediately after updating_ it. **State updates are asynchronous**. Since React@18, batching also happens in _timeouts, promises and native event handlers_.

#### About Rendering

- Rendering only means _calling component functions_ and calculating what DOM element need to be inserted, deleted or updated. It has _nothing to do with writing to DOM_.
- Each time a component instance is rendered and re-rendered, the _function is called_ again.
- Only the initial app render and state updates can cause a render which happens _entire the application_, not just one single component.
- When a component instance gets re-rendered, _all its children_ will get re-rendered as well. This doesn't mean that all children will get updated in the DOM. Thanks to _reconciliation_, which checks _which elements have actually changed_ between two renders.
- The DOM is updated in the _commit phase_, but not by React! By a _renderer_ called _ReactDOM_. That's why we always need to _include both libraries_ in a React web app project.

#### Render Logic

- The logic that produces JSX output for a component instance is _not allowed to produce any side effects_. [ No API calls, no timers, no object or variable mutations, no state updates ] _Side effects are allowed in event handlers and useEffect_ .

#### Diffing

- Diffing is how React decides which DOM elements need to be _added or modified_. If between renders, a certain React element stays at the _same position_ in the element tree( Fiber Tree ), the corresponding DOM element and component state will stay same. If the element _changed to a different position, or if it's a different element type_, the DOM element and state will be destroyed.

#### Key Prop

- Giving elements a key prop allows React to _distinguish between multiple_ component instances.
- When a key _stays the same_ across renders, the element is kept in the DOM. This is why we need to use keys in _lists_. When we _change the key_ between renders, the DOM element will be destroyed and rebuilt. We use this as a trick to _reset state_.

#### React

- _React is a library, not a framework._ This means that you can assemble your application using your _favourite third-party_ libraries. _The downside_ is that you need to find and _learn all these additional_ libraries.

### ⌨ My **Codesandbox** practices about React ⏬

- <a href="https://t.ly/_9303">📆 Date Counter </a>
- <a href="https://t.ly/qxh5X">📕 Small Exam with State</a>
- <a href="https://t.ly/dq3vf">🃏 User card and List Rendering</a>
- <a href="https://t.ly/wYSUl">📜 Accordions</a>
- <a href="https://t.ly/mkXpt">💰 Bill Calculator </a>
- <a href="https://t.ly/BX59P">🅰 Reusable-Flexible Text Expander Component</a>
- <a href="https://t.ly/H3LuI">💲 Currency-Converter </a>
