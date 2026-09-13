function customRender(element, container) {
  //// Loose way of creating element
  //   const domElement = document.createElement(element.type);
  //   domElement.innerHTML = element.Children;
  //   domElement.setAttribute("href", element.props.href);
  //   domElement.setAttribute("target", element.props.target);
  //   container.appendChild(domElement);

  //// Modular way of creating element
  const domElement = document.createElement(element.type);
  domElement.innerHTML = element.Children;

  for (let [key, value] of Object.entries(element.props)) {
    if (key == "children") continue;

    domElement.setAttribute(key, value);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  Children: "Click me to visit google",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
