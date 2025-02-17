//display last modification
const today = new Date();

document.getElementById("currentyear").textContent = today.getFullYear();

const lastModif = new Date();

document.getElementById("lastModified").textContent = `Last Modification: ${lastModif.toLocaleString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
})}`;

//hamburguer button
const hamButton = document.querySelector('#menu');
const navElement = document.querySelector("#animateme");

hamButton.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamButton.classList.toggle('open');
});

//url where the json object is found
const url = 'https://artemisiaporto.github.io/wdd231/chamber/data/places.json';

//select the part of the html where the cards will be
const placesCards = document.querySelector("#place-cards");

//async function that select info from the json object
async function getPlacesData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.members);
    displayPlaces(data.places);
}

const displayPlaces = (places) => {
    places.forEach((place) => {

        let card = document.createElement("div");
        let placeName = document.createElement("h2");
        let placeImage = document.createElement("img");
        let info = document.createElement("p");
        let website = document.createElement("a");

        placeName.textContent = place.name;

        placeImage.setAttribute("src", `images/${place.image}`);
        placeImage.setAttribute("alt", `image of ${place.name}`);
        placeImage.setAttribute("loading", "lazy");
        placeImage.setAttribute("width", "300");
        placeImage.setAttribute("height", "200");

        info.textContent = place.info;

        website.setAttribute("href", `${place.websiteUrl}`);
        website.setAttribute("target", "_blank");
        website.textContent = "More Info";

        card.appendChild(placeName);
        card.appendChild(placeImage);
        card.appendChild(info);
        card.appendChild(website);

        placesCards.appendChild(card);
    })
};

getPlacesData();