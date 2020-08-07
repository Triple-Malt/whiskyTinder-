import { createElement } from "../utils/elements"

export function createTitle() {
    const title = createElement("h1", { innerHTML: "Matchen, chatten, saufen" });
    return title;
}