import React from "react";
import { createRoot } from "react-dom/client";
import { Form } from "./components/Form";
import { Critter } from "./components/Critter";

const pageStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "6rem",
};

const Exercise = () => {
  return (
    <div style={pageStyles}>
      <Form />
      <Critter />
    </div>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<Exercise />);
