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
const url = 'https://artemisiaporto.github.io/wdd231/chamber/data/members.json';

//select the part of the html where the cards will be
const cards = document.querySelector("#cards");

//async function that select info from the json object
async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.members);
    displayMembers(data.members);
}

const displayMembers = (members) => {
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
        website.textContent = "Visit the Website";

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

        cards.appendChild(card);
    })
};

getMemberData();

const gridButton = document.querySelector("#menu-grid");
const listButton = document.querySelector("#menu-list");
const changeDisplay = document.querySelector('#cards');

gridButton.addEventListener("click", () => {
    changeDisplay.classList.add("grid");
    changeDisplay.classList.remove("list");
});

listButton.addEventListener("click", () => {
    changeDisplay.classList.add("list");
    changeDisplay.classList.remove("grid");
});
