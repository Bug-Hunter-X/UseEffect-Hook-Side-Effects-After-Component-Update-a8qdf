# React useEffect Hook Side Effects After Component Update

This repository demonstrates a common issue with the React `useEffect` hook: unintended side effects after component updates when using an empty dependency array (`[]`).

## The Bug

The `bug.js` file contains a simple component that increments a counter.  The `useEffect` hook logs 'Mounted!' only on initial render.  However, if the component re-renders (e.g., due to props change), the side effect will not run again. This might lead to issues if the side effect needs to execute upon each render or state change.