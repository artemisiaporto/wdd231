//Get the url for the thank page
const currentUrl = window.location.href;

//divide url
const everything = currentUrl.split("?");

//get the information submited by the form and break the information into an array

let formData = everything[1].split("&");

//function to display the information
function show(cup) {
    formData.forEach((element) => {
        if (element.startsWith(cup)) {
            result = element.split("=")[1].replace("%40", "@");
        };
    });
    return (result);
};

//select the id in the html to display the information details
const showInfo = document.querySelector("#results");
showInfo.innerHTML = `
<p>Appointment for ${show("first")} ${show("last")}</p>
<p>Proxy ${show("ordinance")} on ${show("fecha")} in the ${show("location")} temple.</p>
<p>Your Phone: ${show("phone")}</p>
<p>Your Email: <a href="#">${show("email")}</a></p>`;