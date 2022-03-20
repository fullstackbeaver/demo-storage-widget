import App               from "./pages/App/App";
import React             from "react";
import ReactDOM          from "react-dom";
import { StoreProvider } from "./providers/Store";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);