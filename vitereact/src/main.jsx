// import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App | Ajay Kumar</h1>
//     </div>
//   );
// }

// //////// If we directly paas this then React will not understand it and gives error
// // const AnchorElement = {
// //   type: "a",
// //   props: {
// //     href: "https://google.com",
// //     target: "_blank",
// //   },
// //   Children: "Click me to visit google",
// // };

// const ReactElement = React.createElement(
//   "a",
//   {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   "Click me to visit google",
// );

// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     Visit Google
//   </a>
// );

// createRoot(document.getElementById("root")).render(ReactElement);

createRoot(document.getElementById("root")).render(<App />);
