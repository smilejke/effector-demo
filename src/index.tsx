import { createRoot } from 'react-dom/client';

import { setLogger } from "libs/logger";
import { appDomain } from "features/common/model";

import { App } from "./app";

import "./index.css";
import "./init";

/* Initialing logs for events, effects and domains */
/* appDomain - main application domain */
setLogger(appDomain);

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement); // createRoot(container!) if you use TypeScript
root.render(<App />);
