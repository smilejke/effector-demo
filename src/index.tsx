import ReactDOM from "react-dom";

import { setLogger } from "libs/logger";
import { appDomain } from "features/common/model";

import { App } from "./app";

import "./index.scss";
import "./init";

/* Initialing logs for events, effects and domains */
/* appDomain - main application domain */
setLogger(appDomain);

const root = document.getElementById("root");

ReactDOM.render(<App />, root);
