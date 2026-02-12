// Text variables (Dutch)
let titleNL = "De Appel";
let subtitleNL = "Een smakelijke vrucht";
let textNL = "De appel is een populaire vrucht die groeit aan appelbomen. Appels zijn rijk aan vezels en vitamine C. Ze komen voor in duizenden variëteiten en kleuren, van groen en geel tot dieprood.";

// Text variables (French)
let titleFR = "La Pomme";
let subtitleFR = "Un fruit délicieux";
let textFR = "La pomme est un fruit comestible produit par un pommier. Les pommes sont riches en fibres et en vitamine C. Il existe des milliers de variétés, allant du vert et jaune au rouge foncé.";

// 1. Select text elements
let text = document.querySelector("#text");
let subtitle = document.querySelector("#subtitle");
let title = document.querySelector("#title");
let btn_nl = document.querySelector("#btn-nl");
let btn_fr = document.querySelector("#btn-fr");

//2. Set initial content on load
title.innerHTML=titleNL;
subtitle.innerHTML=subtitleNL;
text.innerHTML=textNL;

//3. Select buttons
btn_nl.disabled = true;

//4. Add event listeners
btn_fr.addEventListener("click", () => {
    title.innerHTML=titleFR;
    subtitle.innerHTML=subtitleFR;
    text.innerHTML=textFR;
    btn_fr.disabled = true;
    btn_nl.disabled = false;
});
btn_nl.addEventListener("click", () => {
    title.innerHTML=titleNL;
    subtitle.innerHTML=subtitleNL;
    text.innerHTML=textNL;
    btn_nl.disabled = true;
    btn_fr.disabled = false;
});

//5. Create, configure and append image
let img = document.createElement("img");
img.src = "appel.jpg";
img.alt = "An apple";
subtitle.parentNode.insertBefore(img, subtitle);