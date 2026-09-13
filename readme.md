# React

a. React-Dom ---> Used for Web Application
b. Recat-Native ---> Used for mobile development

### UI Updation

React handle the UI updation part.
Basically it has virtual DOM. He decide when and where the UI updation happens.

### Reconciliation

- It is an algorithm React uses to Differentiate one tree with another to determine which part to be changed.
- When ever any update happens in the states immidiately react identify and update it. Sometime it is unnecessary.
- A change in the data used to render a react app. Usually the result of `setState`. Eventually results in a re-render.
- Reconciliation is the algorithim behind what is popularly understood as the `Virtual DOM`.

### Fiber

- To update the DOM, React use fiber. Its a core algorithm of react
- Although the fiber is ground-up rewrite of reconciler, the high-level algorithim.
  - Diffing of the lists is performed using key. Keys should be stable, predictable and unique.
- Now it is not necessary for every update to applied immediately. Doing this can be wasteful, causing the frames to drop
  and degrade the used experience.
- Different type of updates having different priorities, Like an animation update having more priority rather than say and update
  from a data store.

  a. We can pause work and come back to it later.
  b. Assign priority to different types of works.
  c. Reuse previously completed work.
  d. Abort work if it is no longer needed.
