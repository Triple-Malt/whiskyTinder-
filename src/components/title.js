import { createElement } from "../utils/elements";

export function createTitle() {
  const slogan = createElement("h1", {
    innerHTML: "Matchen, chatten, genießen",
  });
  return slogan;
}
