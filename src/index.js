import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DataLayer } from "./store/dataLayer";
import { initialState, reducer } from "./store/reducer";

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);
