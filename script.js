const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const current =
        +counter.innerText;

        const increment =
        target / 100;

        if(current < target){

            counter.innerText =
            Math.ceil(current + increment);

            setTimeout(updateCounter,20);

        }

        else{

            counter.innerText =
            target;

        }

    };

    updateCounter();

});
const filterButtons =
document.querySelectorAll(".filter-btn");

const menuCards =
document.querySelectorAll(".menu-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter =
        button.getAttribute("data-filter");

        menuCards.forEach(card => {

            if(
                filter === "all" ||
                card.dataset.category === filter
            ){
                card.style.display = "block";
            }
            else{
                card.style.display = "none";
            }

        });

    });

});
const aboutSection = document.querySelector(".about");

window.addEventListener("scroll", () => {

    const sectionTop =
    aboutSection.getBoundingClientRect().top;

    const screenPosition =
    window.innerHeight - 100;

    if(sectionTop < screenPosition){
        aboutSection.classList.add("show");
    }

});
const targetDate =
new Date("june 13, 2026 23:59:59").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days =
    Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
    Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds =
    Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").innerText =
    days;

    document.getElementById("hours").innerText =
    hours;

    document.getElementById("minutes").innerText =
    minutes;

    document.getElementById("seconds").innerText =
    seconds;

}, 1000);
const galleryImages =
document.querySelectorAll(".gallery-container img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = image.src;

    });

});

document
.querySelector(".close-btn")
.addEventListener("click", () => {

    lightbox.style.display = "none";

});
const timelineItems =
document.querySelectorAll(".timeline-item");

window.addEventListener("scroll", () => {

    timelineItems.forEach(item => {

        const itemTop =
        item.getBoundingClientRect().top;

        if(itemTop < window.innerHeight - 100){

            item.classList.add("show");

        }

    });

});
const statusText =
document.getElementById("status");

const currentHour =
new Date().getHours();

if(currentHour >= 9 && currentHour < 22){

    statusText.innerHTML =
    '<i class="fa-solid fa-circle-check"></i>Open Now';

    statusText.style.color = "green";

}
else{

    statusText.innerHTML =
    '<i class="fa-solid fa-circle-xmark"></i>Closed Now';

    statusText.style.color = "red";

}
const testimonials =
document.querySelectorAll(".testimonial");

let currentTestimonial = 0;

function showTestimonial(){

    testimonials.forEach(item => {
        item.classList.remove("active");
    });

    testimonials[currentTestimonial]
    .classList.add("active");

    currentTestinomial++;

    if(currentTestimonial >= testimonials.length){
        currentTestimonial = 0;
    }
}

setInterval(showTestimonial, 3000);
const reservationForm =
document.getElementById("reservationForm");

const formMessage =
document.getElementById("formMessage");

reservationForm.addEventListener(
"submit",
function(event){

    event.preventDefault();

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const phone =
    document.getElementById("phone").value;

    const date =
    document.getElementById("date").value;

    const time =
    document.getElementById("time").value;

    if(
        name === "" ||
        email === "" ||
        phone === "" ||
        date === "" ||
        time === ""
    ){

        formMessage.innerText =
        "Please Complete All Required Fields";

        formMessage.style.color =
        "red";

        return;
    }

    formMessage.innerText =
    "Reservation Confirmed";

    formMessage.style.color =
    "green";

    reservationForm.reset();

});
const newsletterForm =
document.getElementById("newsletterForm");

const newsletterMessage =
document.getElementById("newsletterMessage");

newsletterForm.addEventListener(
"submit",
function(event){

    event.preventDefault();

    const email =
    document.getElementById("newsletterEmail").value;

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        newsletterMessage.innerText =
        "Please Enter A Valid Email Address";

        newsletterMessage.style.color =
        "#fff";

        return;
    }

    newsletterMessage.innerText =
    "Subscription Successful";

    newsletterMessage.style.color =
    "#fff";

    newsletterForm.reset();

});
const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        backToTop.style.display =
        "block";

    }
    else{

        backToTop.style.display =
        "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
const menuToggle =
document.querySelector(".menu-toggle");

const navLinks =
document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});