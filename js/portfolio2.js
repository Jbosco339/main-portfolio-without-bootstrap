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
// THE CODE BELOW CLOSES THE DROPDOWN WHEN THE ANCHOR TAGS ARE CLICKED
let anchorClose = document.getElementById('dropdown_ul');
anchorClose.addEventListener('click',function(){
    dropdown_sec.style.display = 'none';
})

// pre loader
// ===== PRELOADER =====
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");

    // small delay for smooth UX
    setTimeout(() => {
        preloader.classList.add("hide");

        // completely remove from DOM after animation
        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);

    }, 700);
});


// custom cursor
// ===== CUSTOM CURSOR =====

const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

// track mouse
document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
});

// smooth follow effect
function animateCursor() {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;

    outline.style.left = outlineX + "px";
    outline.style.top = outlineY + "px";

    requestAnimationFrame(animateCursor);
}

animateCursor();

// hover effect on clickable elements
const hoverElements = document.querySelectorAll("a, button");

hoverElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
        outline.classList.add("hover");
    });

    el.addEventListener("mouseleave", () => {
        outline.classList.remove("hover");
    });
});

// testimonial slider
// ===== PREMIUM TESTIMONIAL =====

const track = document.querySelector(".testimonial_track");
const cards = document.querySelectorAll(".testimonial_card");
const next = document.querySelector(".arrow.right");
const prev = document.querySelector(".arrow.left");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;

// create dots
cards.forEach((_, i) => {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
        currentIndex = i;
        updateSlider();
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots span");

// update slider
function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach(d => d.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

// next
next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateSlider();
});

// prev
prev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateSlider();
});

// auto slide
setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateSlider();
}, 5000);

// swipe support (mobile)
let startX = 0;

track.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

track.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
        currentIndex = (currentIndex + 1) % cards.length;
    } else if (endX - startX > 50) {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    }

    updateSlider();
});


// what am currently learning section

const projects = document.querySelectorAll(".project");
const card = document.getElementById("glassCard");

/* ===== Scroll Animation ===== */
const animateProjects = () => {
  projects.forEach(project => {
    const bar = project.querySelector(".progress");
    const percentText = project.querySelector(".percent");

    if (bar.classList.contains("animated")) return;

    const rect = project.getBoundingClientRect();

    if (rect.top < window.innerHeight - 40) {
      const target = parseInt(bar.getAttribute("data-width"));

      bar.style.width = target + "%";

      let count = 0;
      const interval = setInterval(() => {
        if (count >= target) {
          clearInterval(interval);
        } else {
          count++;
          percentText.textContent = count + "%";
        }
      }, 15);

      bar.classList.add("animated");
    }
  });
};

window.addEventListener("scroll", animateProjects);
window.addEventListener("load", animateProjects);

/* ===== Mouse Glow (Desktop Only) ===== */
if (window.innerWidth > 768) {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `
      radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.08), rgba(255,255,255,0.02))
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "rgba(255, 255, 255, 0.04)";
  });
}




