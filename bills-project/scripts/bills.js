const today = new Date();

document.getElementById("currentyear").textContent = today.getFullYear();

const lastModif = new Date();

document.getElementById("lastModified").textContent = `Last Modification: ${lastModif}`;

const hamButton = document.querySelector('#menu');
const navi = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navi.classList.toggle('open');
    hamButton.classList.toggle('open');
});