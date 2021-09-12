import React from "react";
import ReactDOM from "react-dom";
import { setLogger } from "libs/logger";
import { App } from "./app";

import "./index.css";
import "./init";

setLogger();

const root = document.getElementById("root");

ReactDOM.render(<App />, root);
