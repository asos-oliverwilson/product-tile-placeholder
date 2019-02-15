import React from "react";
import ReactDOM from "react-dom";
import Picture from "./Picture";
import "./styles.css";

const App = () => {
  const src =
    "https://images.asos-media.com/products/pullbear-faux-suede-bomber-in-khaki/11036786-1-khaki?$XL$?$XXL$&wid=300&fmt=jpeg&qlt=80,0&op_sharpen=0&resMode=sharp2&op_usm=1,0.4,6,1&iccEmbed=0&printRes=72";
  return (
    <div className="App">
      <Picture src={src} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
