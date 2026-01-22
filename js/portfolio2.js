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

//THE CODE BELOW ALLOWS THE HAMBURGER OPEN THE DROPDOWN WHEN CLICKED
let burgImage = document.getElementById('hamburger_div');
burgImage.addEventListener('click', function(){
    dropdown_sec.style.display = 'flex'
})

// THE CODE BELOW CLOSES THE DROPDOWN WHEN THE 'X' SIGN IS CLICKED
let closeIcon = document.getElementById('exittt');
closeIcon.addEventListener('click',function(){
    dropdown_sec.style.display = 'none';
})