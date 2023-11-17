const pianoKeys = document.querySelectorAll(".piano-veys .key");

let audio = new Audio("tunes/a.wav");

const playtune = (key) => {};

pianoKeys.forEach((key) => {
    console.log(key.dataset.key);
    key.addEventListener("click", () => playtune(key.dataset.key))
});