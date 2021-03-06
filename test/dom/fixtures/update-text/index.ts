import { dynamicText, register } from "../../../../dom/index";

import { text } from "../../../../dom/dom";

export const inputs = [
  {
    value: "Dynamic 1"
  },
  {
    value: "Dynamic 2"
  },
  {
    value: "Dynamic 3"
  }
];

const renderer = register(
  __dirname.split("/").pop()!,
  (input: (typeof inputs)[number]) => {
    text("Static ");
    dynamicText(input.value);
  }
);

renderer.input = ["value"];

export default renderer;
