import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Counter from "./components/counter";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Counter />
  </StrictMode>,
  rootElement
);
