import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../src/app/App";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);

/* import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// import App from "./app/App";
import store from "./app/store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Provider store={store}>
    </Provider>,
    document.getElementById("root")
);
 */
