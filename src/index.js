import "./style.css";
import { createTitle } from "./components/title.js";
import { createLogo } from "./components/logo";
import { createCard } from "./components/card";
import { createElement } from "./utils/elements";
import { getWhisky } from "./api/whisky";

const slogan = createTitle();
const logo = createLogo();

const fetchButton = createElement("button", {
  innerHTML: "FETCH ME A WHISKY",
});

fetchButton.addEventListener("click", async () => {
  const whisky = await getWhisky();
  const card = createCard({
    title: whisky.title,
    img_url: whisky.image_url,
    region: whisky.region,
  });
  document.body.append(card);
  console.log(whisky);
});

document.body.append(logo);
document.body.append(slogan);
document.body.append(fetchButton);
