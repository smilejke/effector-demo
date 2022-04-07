import ReactDOM from "react-dom";
import { setLogger } from "libs/logger";
import { App } from "./app";

import { appDomain } from "features/common/model";

import "./index.scss";
import "./init";

setLogger(appDomain);

const root = document.getElementById("root");

ReactDOM.render(<App />, root);
