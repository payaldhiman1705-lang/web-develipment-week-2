const typingBox = document.getElementById("typing-box");

const text = ["Web Developer", "UI/UX Designer", "Freelancer"];

let i = 0;
let j = 0;

function typing() {
    if (j < text[i].length) {
        typingBox.innerHTML += text[i][j];
        j++;
        setTimeout(typing, 100);
    } else {
        setTimeout(() => {
            typingBox.innerHTML = "";
            j = 0;
            i = (i + 1) % text.length;
            typing();
        }, 1000);
    }
}

typing();

const links =
document.querySelectorAll("nav a");
links.forEach(function(link){
    link.addEventListener("click",function(e){
        e.preventDefault();

        const section =
        DocumentFragment.querySelector(link.getAttribute("href"));

        section.scrollIntoView({
            behavior:"smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    // Hamburger button par click karte hi list dikhegi/hupayegi
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });

    // Kisi link par click karte hi menu apne aap band ho jaye
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
        });
    });
});
 