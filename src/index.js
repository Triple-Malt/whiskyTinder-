import "./style.css";
import { createTitle } from "./components/title.js";
import { createLogo } from "./components/logo";

const title = createTitle();
const logo = createLogo();

document.body.append(logo);
document.body.append(title);
