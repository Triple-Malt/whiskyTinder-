import { createElement } from "../utils/elements";
import logoSrc from "../assets/triplemalt.png";

export function createLogo() {
    const logo = createElement("img", { src: logoSrc, alt: "Triple-Malt-Logo" });
    return logo;
}