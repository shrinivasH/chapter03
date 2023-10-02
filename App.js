import React from "react";
import ReactDOM from "react-dom/client";

const title = React.createElement(
  "h1",
  { id: "heading", className: "heading" },
  "This is react element"
);

const HeadingComponent = () => {
  return (
    <div>
      {title}
      <h1>Functional Heading component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
