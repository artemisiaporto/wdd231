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

//Get the url for the thank page
const currentUrl = window.location.href;

//divide url
const everything = currentUrl.split("?");

//get the information submited by the form and break the information into an array
let formData = everything[1].split("&");

//function to display the information
function show(info) {
    formData.forEach((element) => {
        console.log(element)
        if (element.startsWith(info)) {
            result = element.split("=")[1].replace("%40", "@");
        };
    });
    return (result);
};

const originalTimestamp = show("timestamp");
const formattedDate = new Date(decodeURIComponent(originalTimestamp)).toLocaleString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
});

//select the id in the html to display the information details
const showInfo = document.querySelector("#results");
showInfo.innerHTML = `
<p>Application made by ${show("first-name")} ${show("last-name")}</p>
<p><strong>Email:</strong> ${show("email")}</p>
<p><strong>Mobile Number:</strong> ${show("phone-number")}</p>
<p><strong>Business/Organization's Name:</strong> ${show("org-name")}</p>
<p><strong>Submission date and time:</strong> ${formattedDate}`;
