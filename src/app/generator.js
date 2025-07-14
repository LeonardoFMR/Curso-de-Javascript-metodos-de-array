{/* <li class="tarjeta">
    <img class="tarjeta__imagen"
        src="./src/imagenes/Imagens/hipsters-punto-tech/hipsters-punto-tech-techguide.png"
        alt="Hipsters Punto Tech - TechGuide: Storytelling con datos">
        <h3 class="tarjeta__titulo">TechGuide: Storytelling con datos</h3>
        <h4 class="tarjeta__subtitulo">Hipsters Punto Tech</h4>
        <i class="fa-regular fa-star"></i>
</li> */}



const generateCard = (podcast) => {
    const cardElement = document.createElement("li");
    cardElement.classList.add("tarjeta");
    const imgElement = document.createElement("img");
    imgElement.classList.add("tarjeta__imagen");
    imgElement.src = podcast.image;
    imgElement.alt = podcast.title;

    const titleElement = document.createElement("h3");
    titleElement.classList.add("tarjeta__titulo");
    titleElement.textContent = podcast.title;

    const subtitleElement = document.createElement("h4");
    subtitleElement.classList.add("tarjeta__subtitulo");
    subtitleElement.textContent = podcast.subtitle;

    const startElement = document.createElement("i");
    startElement.classList.add("fa-regular", "fa-star");
    podcast.saved === "true" ? startElement.classList.add("fa-solid", "fa-star") : startElement.classList.add("fa-regular", "fa-star");


    cardElement.appendChild(imgElement);
    cardElement.appendChild(titleElement);
    cardElement.appendChild(subtitleElement);
    cardElement.appendChild(startElement);

    return cardElement;

}



{/* 
<a class="tarjeta" href="#">
    <img class="tarjeta__imagen"
        src="./src/imagenes/Imagens/reproducidos recientemente/hipter-fuera-de-control.png"
        alt="Hipsters Fuera de Control">
        <h3 class="tarjeta__titulo">Hipsters Punto Tech</h3>
        <div class="tarjeta__player"></div>
        <form class="tarjeta__boton" action=".">
            <button aria-label="Play Podcast">
                <img src="./src/imagenes/Iconos/boton-play.svg" alt="Icono de Play">
            </button>
        </form>
</a> */}

const generatePlayer = ({ image, subtitle }) => {


    const cardElement = document.createElement('li');

    const anchorElement = document.createElement('a');
    anchorElement.classList.add('tarjeta');
    anchorElement.href = '#';

    const imgElement = document.createElement('img');
    imgElement.classList.add('tarjeta__imagen');
    imgElement.src = image;
    imgElement.alt = subtitle;

    const subtitleElement = document.createElement('h3');
    subtitleElement.classList.add('tarjeta__titulo');
    subtitleElement.textContent = subtitle;

    const playerElement = document.createElement('div');
    playerElement.classList.add('tarjeta__player');

    const formElement = document.createElement('form');
    formElement.classList.add('tarjeta__boton');
    formElement.action = '.';

    const buttonElement = document.createElement('button');
    buttonElement.setAttribute('aria-label', 'Play Podcast');

    const playIconElement = document.createElement('img');
    playIconElement.src = './src/imagenes/Iconos/boton-play.svg';
    playIconElement.alt = 'Icono de Play';

    buttonElement.appendChild(playIconElement);
    formElement.appendChild(buttonElement);
    anchorElement.appendChild(imgElement);
    anchorElement.appendChild(subtitleElement);
    anchorElement.appendChild(playerElement);
    anchorElement.appendChild(formElement);
    cardElement.appendChild(anchorElement);

    return cardElement;
};

export { generateCard, generatePlayer };


