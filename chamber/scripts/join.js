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

document.querySelector('#timestamp').value = new Date();

const openButton1 = document.querySelector("#openButton1");
const openButton2 = document.querySelector("#openButton2");
const openButton3 = document.querySelector("#openButton3");
const openButton4 = document.querySelector("#openButton4");
const dialogBox = document.querySelector("#membership-box");
const dialogText = document.querySelector("#membership-box div")

//show the dialog
openButton1.addEventListener("click", () => {
    dialogBox.showModal();
    dialogText.innerHTML = `
    <h2>Non Profit Membership Level</h2>
    <p>Receive semanal email with special chamber-news</p>
    <p>5% of discount on events</p>
    `
    closeScreen.addEventListener("click", () => {
        dialogBox.close();
    });
});

openButton2.addEventListener("click", () => {
    dialogBox.showModal();
    dialogText.innerHTML = `
    <h2>Bronze Membership Level</h2>
    <p>Receive semanal email with special chamber-news</p>
    <p>20% of discount on events</p>
    `
    closeScreen.addEventListener("click", () => {
        dialogBox.close();
    });
});

openButton3.addEventListener("click", () => {
    dialogBox.showModal();
    dialogText.innerHTML = `
    <h2>Silver Membership Level</h2>
    <p>Receive semanal email with special chamber-news</p>
    <p>40% of discount on events</p>
    <p>10% of discount eletronic toll tag mensality</p>
    <p>10% discount on food sold by member establishments</p>
    `
    closeScreen.addEventListener("click", () => {
        dialogBox.close();
    });
});
openButton4.addEventListener("click", () => {
    dialogBox.showModal();
    dialogText.innerHTML = `
    <h2>Gold Membership Level</h2>
    <p>Receive semanal email with special chamber-news</p>
    <p>60% of discount on events</p>
    <p>12% of discount eletronic toll tag mensality</p>
    <p>12% discount on food sold by member establishments</p>
    <p>100% of discount on Sesc mensality</p>
    `
    closeScreen.addEventListener("click", () => {
        dialogBox.close();
    });
});
