import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./index.css";

const colors = {
  brand: {
    darkGray: "#1b1d1f",
    black: "#111315",
    gray: "#6f757c",
    deepGray: "#4d5562",
    lightGreen: "#bee3cc",
    white: "#fef7ee",
    yellow: "#f6c768",
    salmon: "#ed735d",
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: `'DM Sans', sans-serif`,
    body: `'DM Sans', sans-serif`,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
