import "./style.css";
import { createTitle } from "./components/title.js";
import { createLogo } from "./components/logo";
import { createCard } from "./components/card";

const title = createTitle();
const logo = createLogo();
const card = createCard();

document.body.append(logo);
document.body.append(title);
document.body.append(card);
