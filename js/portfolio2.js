const texts = [
  "I love turning ideas into interactive designs.",
  " I'm focused on growth, impact, and clean code."
];

const speeds = 70;
const pauseAfterAll = 2000;

let textIndex = 0;
let charIndex = 0;
let output = "";

function typeEffect() {
  const el = document.getElementById("typeText");

  if (charIndex < texts[textIndex].length) {
    output += texts[textIndex].charAt(charIndex);
    el.innerHTML = output;
    charIndex++;
    setTimeout(typeEffect, speeds);
  } 
  else {
    output += "<br>";
    el.innerHTML = output;

    textIndex++;
    charIndex = 0;

    if (textIndex === texts.length) {
      setTimeout(() => {
        output = "";
        textIndex = 0;
        el.innerHTML = "";
        typeEffect();
      }, pauseAfterAll);
    } else {
      setTimeout(typeEffect, speeds);
    }
  }
}

typeEffect();