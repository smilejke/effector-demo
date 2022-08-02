import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { routes } from "pages/routes";
import "antd/dist/antd.css";

export const history = createBrowserHistory();

export const App = () => {
  return (
    <Router history={history}>
      {routes.map((route) => (
        <Route {...route} key={route.path} />
      ))}
    </Router>
  );
};
