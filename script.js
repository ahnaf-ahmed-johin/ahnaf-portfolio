const text = [
    "Software Engineering Student",
    "Web Developer",
    "Desktop App Developer",
    "Problem Solver"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {

    current = text[i];

    if (!isDeleting) {

        document.getElementById("typing").textContent = current.substring(0, j++);

        if (j > current.length) {

            isDeleting = true;

            setTimeout(type, 1000);

            return;

        }

    } else {

        document.getElementById("typing").textContent = current.substring(0, j--);

        if (j < 0) {

            isDeleting = false;

            i++;

            if (i == text.length)
                i = 0;

        }

    }

    setTimeout(type, isDeleting ? 50 : 100);

}

type();
const menu=document.getElementById("menu");
const nav=document.getElementById("navLinks");

menu.onclick=function(){

nav.classList.toggle("active");

}
window.addEventListener("scroll",()=>{

const totalHeight=
document.documentElement.scrollHeight-
window.innerHeight;

const progress=
(window.pageYOffset/totalHeight)*100;

document.getElementById("progress-bar").style.width=
progress+"%";

});
const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}
const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(sec=>{

const top=window.scrollY;

const offset=sec.offsetTop-200;

const height=sec.offsetHeight;

if(top>=offset && top<offset+height){

current=sec.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }
});
document.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    document.documentElement.style.setProperty("--x", x + "%");
    document.documentElement.style.setProperty("--y", y + "%");

});
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            section.classList.add("active");
        }

    });

});