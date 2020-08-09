import "./card.css";
import { createElement } from "../utils/elements";

export function createCard(props) {
    const title = createElement("h2", { innerText: props.title });
    const imgUrl = createElement("p", { innerText: props.imgUrl });
    const region = createElement("p", { innerText: props.region });
    const card = createElement(
        "div",
        {
            className: "card",
        }[(title, imgUrl, region)]
    );
    return card;
}