// script.js


/***************
 TYPING EFFECT
****************/

const text =
"You are the most beautiful part of my life. Every moment with you became a memory I never want to lose ❤️";

let i = 0;

let started = false;

function typeWriter(){

    if(i < text.length){

        document.getElementById("typing-text")
        .innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,50);
    }
}


/********************
 START TYPING ON SCROLL
*********************/

window.addEventListener("scroll", () => {

    const section =
    document.querySelector(".message-section");

    const position =
    section.getBoundingClientRect().top;

    const screenPosition =
    window.innerHeight / 1.3;

    if(position < screenPosition && !started){

        started = true;

        typeWriter();
    }

});


/********************
 SCROLL REVEAL
*********************/

const hiddenSections =
document.querySelectorAll(
".gallery, .message-section"
);

window.addEventListener("scroll", () => {

    hiddenSections.forEach(section => {

        const position =
        section.getBoundingClientRect().top;

        const screenPosition =
        window.innerHeight / 1.2;

        if(position < screenPosition){

            section.classList.add("show");
        }

    });

});
const button =
document.querySelector("button");

button.addEventListener("click", () => {

    document.querySelector(".gallery")
    .scrollIntoView({

        behavior:"smooth"

    });

});
const intro =
document.querySelector(".intro-screen");

intro.addEventListener("click", () => {

    const music =
document.getElementById("bg-music");

music.currentTime = 2;

music.play();

    intro.style.opacity = "0";

    setTimeout(() => {

        intro.style.display = "none";

    },1500);

});
const roleCards =
document.querySelectorAll(".role-card");

window.addEventListener("scroll", () => {

    const trigger =
    document.querySelector(".roles-section")
    .getBoundingClientRect().top;

    if(trigger < window.innerHeight - 350){

        roleCards.forEach((card,index) => {

            setTimeout(() => {

                card.classList.add("show-card");

            }, index * 250);

        });

    }

});
const hearts =
document.querySelector(".hearts");

function createHeart(){

    const heart =
    document.createElement("div");

    heart.classList.add("heart-particle");

    heart.innerHTML = "❤";

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.animationDuration =
    4 + Math.random() * 6 + "s";

    heart.style.fontSize =
    10 + Math.random() * 20 + "px";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },10000);

}

setInterval(createHeart,400);