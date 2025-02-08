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

//weather display
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const description = document.querySelector("#description");
const tempHigh = document.querySelector("#high-temp");
const tempLow = document.querySelector("#low-temp");
const humidity = document.querySelector("#humidity");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");

const apiKey = "df91d194eb1e261ac496058bdf6decdc";
const lat = -23.19;
const long = -46.89;
const urlWeatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

async function apiFetch() {
    try {
        const response = await fetch(urlWeatherApi);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", `${data.weather[0].description} icon`);
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    description.innerHTML = data.weather[0].description;
    tempHigh.innerHTML = `High: ${data.main.temp_max}&deg;C`;
    tempLow.innerHTML = `Low: ${data.main.temp_min}&deg;C`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}`;
    //sunrise
    //sunset
};

const foreToday = document.querySelector("#today");
const fore1stday = document.querySelector("#next-day");
const fore2ndday = document.querySelector("#next-day2");

const urlForecastApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

async function apiFetch2() {
    try {
        const response = await fetch(urlForecastApi);
        if (response.ok) {
            const data2 = await response.json();
            console.log(data2);
            displayForecast(data2);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecast(data2) {
    foreToday.innerHTML = `Today: ${data2.list[0].main.temp}&deg;C`;
    fore1stday.innerHTML = `Tomorrow: ${data2.list[8].main.temp}&deg;C`;
    fore2ndday.innerHTML = `Day After Tomorrow: ${data2.list[16].main.temp}&deg;C`;

}

apiFetch();
apiFetch2()

//url where the json object is found
const url = 'https://artemisiaporto.github.io/wdd231/chamber/data/members.json';

//select the part of the html where the cards will be
const spotlightCards = document.querySelector("#spotlights");

//async function that select info from the json object
async function getMemberSpotlight() {
    const response = await fetch(url);
    const data = await response.json();
    const filtered = getRandomMember(data.members, 3);
    //console.table(data.members);
    displaySpotlight(filtered);
}

function getRandomMember(object, num) {
    const shuffled = [...object].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

const displaySpotlight = (members) => {
    spotlightCards.innerHTML = "";

    members.forEach((member) => {

        let card = document.createElement("section");
        let companyName = document.createElement("h2");
        let companyImage = document.createElement("img");
        let address = document.createElement("p");
        let phoneNumber = document.createElement("p");
        let memberLevel = document.createElement("p");
        let website = document.createElement("a");

        companyName.textContent = member.name;

        companyImage.setAttribute("src", `images/${member.image}`);
        companyImage.setAttribute("alt", `image of ${member.name}`);
        companyImage.setAttribute("loading", "lazy");
        companyImage.setAttribute("width", "200");
        //companyImage.setAttribute("height", "auto");

        address.textContent = member.address;

        phoneNumber.textContent = member.phoneNumber;

        website.setAttribute("href", `${member.websiteUrl}`);
        website.setAttribute("target", "_blank");
        website.textContent = "More Information";

        if (member.membershipLevel == 3) {
            memberLevel.textContent = "Level of membership: Gold";
        } else if (member.membershipLevel == 2) {
            memberLevel.textContent = "Level of membership: Silver";
        } else if (member.membershipLevel == 1) {
            memberLevel.textContent = "Level of membership: Gold";
        }

        card.appendChild(companyName);
        card.appendChild(companyImage);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(memberLevel);
        card.appendChild(website);

        spotlightCards.appendChild(card);
    })
};

getMemberSpotlight();