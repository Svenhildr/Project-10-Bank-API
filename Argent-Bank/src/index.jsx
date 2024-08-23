import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "../src/app/App";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
        ,
    </StrictMode>
);

/* import React from "react";
import { createRoot } from "react-dom/client";
// import App from "./app/App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    document.getElementById("root")
);
 */
