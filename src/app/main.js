import podcasts from "./datos.js";
import { generateCard, generatePlayer } from "./generator.js";

const parentElement = document.querySelector('[data-indicados]');
const tarjeta = document.querySelector('[data-tarjetas]');
const btnGuardados = document.querySelector('[data-guardados]');




podcasts.forEach((podcast) => {
    const card = generateCard(podcast);
    parentElement.appendChild(card);
});

const players = podcasts.map(({ image, subtitle }) => generatePlayer({ image, subtitle }));
tarjeta.append(...players);

btnGuardados.addEventListener('click', () => {

    parentElement.innerHTML = "";
    const techPodcast = podcasts.filter((podcast) => podcast.saved === "true");

    console.log(techPodcast)
    techPodcast.forEach((podcast) => {
        const card = generateCard(podcast);
        parentElement.appendChild(card);
    });

})