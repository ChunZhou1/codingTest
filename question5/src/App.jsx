import React from "react";
import ReactDOM from "react-dom";

import "antd/dist/antd.css";
import "./css/body.css";
import "./css/app.css";

import { Form_container } from "./components/form";

const App = () => {
  return (
    <div className="container">
      <Form_container />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
