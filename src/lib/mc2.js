const c = (obj, attrs, content, children) => {
  const element =
    (typeof obj === "string" && document.createElement(obj)) || obj;
  for (let attr in attrs) {
    (attr.substr(0, 2) === "on" &&
      element.addEventListener(attr.substr(2), attrs[attr])) ||
      element.setAttribute(attr, attrs[attr]);
  }
  if (content) element.textContent = content;
  if (typeof children === "object") {
    children.forEach(child => element.appendChild(c(child)));
  }
  return element;
};
module.exports = c;
