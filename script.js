const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
});



const textElement = document.querySelector(".changing-text");

const words = [
    "reliable construction",
    "smart investment",
    "modern living",
    "luxury apartments"
];

let wordIndex = 0;

function changeText(){
    textElement.classList.add("fade-out");

    setTimeout(() => {
        wordIndex++;
        if(wordIndex >= words.length){
            wordIndex = 0;
        }
        textElement.textContent = words[wordIndex];

        textElement.classList.remove("fade-out");
        textElement.classList.add("fade-in");
    }, 500);
}

setInterval(changeText, 3000);


const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab=>{
    tab.addEventListener("click",()=>{
        tabs.forEach(t=>t.classList.remove("active"));
        contents.forEach(c=>c.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(tab.dataset.tab).classList.add("active");
    });
});


/* ===== Common Scroll Animation ===== */

const elements = document.querySelectorAll(".animate-scale");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

elements.forEach(el => observer.observe(el));

/* ===== Preloader ===== */

window.addEventListener("load", function(){
    const preloader = document.querySelector(".preloader");
    setTimeout(() => {
        preloader.classList.add("hide");
    }, 2000); // 1 second delay for smooth effect
});
