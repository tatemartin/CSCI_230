let checkVal;
let colorVal;
let timeVal;
let emailVal;
let fileVal;
let imageVal;
let icecreamVal;
let passwordVal;
let battVal;
let phoneVal;
let petVal;
let sleepVal;
let urlVal;


const checkF = function() {
    const element = document.getElementById('checkbox');

    checkVal = element.checked;
}

document.getElementById("checkbox").addEventListener("change", checkF);

const colorF = function() {
    const element = document.getElementById('color');

    colorVal = element.value;
}

document.getElementById("color").addEventListener("change", colorF);

const timeF = function() {
    const element = document.getElementById('time');

    timeVal = element.value;
}

document.getElementById("time").addEventListener("change", timeF);

const emailF = function() {
    const element = document.getElementById('email');

    emailVal = element.value;
}

document.getElementById("email").addEventListener("change", emailF);

const fileF = function() {
    const element = document.getElementById('file');

    fileVal = element.value;
}

document.getElementById("file").addEventListener("change", fileF);

const imageF = function() {
    const element = document.getElementById('image');

    imageVal = element.value;
}

document.getElementById("image").addEventListener("click", imageF);

const icecreamF = function() {
    const element = document.getElementById('icecream');

    icecreamVal = element.value;
}

document.getElementById("icecream").addEventListener("change", icecreamF);

const passwordF = function() {
    const element = document.getElementById('password');

    passwordVal = element.value;
}

document.getElementById("password").addEventListener("change", passwordF);

const battF = function() {
    const element = document.getElementById('batt');

    battVal = element.value;
}

document.getElementById("batt").addEventListener("input", battF);

const phoneF = function() {
    const element = document.getElementById('phone');

    phoneVal = element.value;
}

document.getElementById("phone").addEventListener("change", phoneF);

const petF = function() {
    const element = document.getElementById('pet');

    petVal = element.value;
}

document.getElementById("pet").addEventListener("change", petF);

const sleepF = function() {
    const element = document.getElementById('sleep');

    sleepVal = element.value;
}

document.getElementById("sleep").addEventListener("change", sleepF);

const urlF = function() {
    const element = document.getElementById('url');

    urlVal = element.value;
}

document.getElementById("url").addEventListener("change", urlF);

const submitForm = function(event) {
    event.preventDefault();
    bottom();
}

document.getElementById("form").addEventListener("submit", submitForm);

const bottom = function() {
    document.getElementById("bottomOfPage").insertAdjacentHTML('beforeend', `
    <p> Checked: ${checkVal} </p>
    <p> Checked: ${colorVal} </p>
    <p> Checked: ${timeVal} </p>
    <p> Checked: ${emailVal} </p>
    <p> Checked: ${fileVal} </p>
    <p> Checked: ${imageVal} </p>
    <p> Checked: ${icecreamVal} </p>
    <p> Checked: ${passwordVal} </p>
    <p> Checked: ${battVal} </p>
    <p> Checked: ${phoneVal} </p>
    <p> Checked: ${petVal} </p>
    <p> Checked: ${sleepVal} </p>
    <p> Checked: ${urlVal} </p>
    `);
}