import { root } from "effector-root";
import { attachLogger } from "effector-logger/attach";

const getConfigLogger = (): LoggerOptions => {
  if (process.env.NODE_ENV === "development") {
    return {
      reduxDevtools: "disabled",
      inspector: "enabled",
      console: "enabled",
    };
  }

  return {
    reduxDevtools: "disabled",
    inspector: "disabled",
    console: "disabled",
  };
};

const attachApiLogger = () => {
  if (process.env.NODE_ENV === "development") {
    localStorage.setItem("api-debug", "true");
  }
  if (process.env.NODE_ENV === "production") {
    localStorage.removeItem("api-debug");
  }
};

export const setLogger = (): void => {
  attachLogger(root, getConfigLogger());
  attachApiLogger();
};
