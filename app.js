let labels = document.querySelectorAll(".labels"); 
let slides = document.querySelectorAll(".slide"); 
let rightButton = document.querySelector(".right-button")
let leftButton = document.querySelector(".left-button")
let nav = document.querySelector("nav"); 
let hero = document.querySelector(".hero"); 


labels.forEach((label, index) => {
    label.addEventListener("click", () => {
        slides.forEach((slide) => {
            slide.firstElementChild.classList.remove("text-rise"); 
        }); 
        if (slides[index].classList.contains("shown")) {
            return
        } else if (index === 1) {
            slides[0].style.animation = "slide-out-from-left ease-in-out 250ms forwards"; 
            slides[index].style.animation = "slide-in-from-right ease-in-out 250ms forwards";
            slides[index].firstElementChild.classList.add("text-rise"); 
            slides.forEach((slide) => {
                slide.classList.toggle("shown"); 
            }) 
            labels.forEach((label) => {
                label.classList.toggle("picked"); 
            }) 
        } else if (index === 0) {
            slides[1].style.animation = "slide-out-from-right ease-in-out 250ms forwards"; 
            slides[index].style.animation = "slide-in-from-left ease-in-out 250ms forwards"; 
            slides[index].firstElementChild.classList.add("text-rise"); 
            slides.forEach((slide) => {
                slide.classList.toggle("shown"); 
            })
            labels.forEach((label) => {
                label.classList.toggle("picked"); 
            })
        }
    })
}); 

rightButton.addEventListener("click", function() {
    slides.forEach((slide) => {
        slide.firstElementChild.classList.remove("text-rise"); 
    }); 
    let shown = document.querySelector(".slide.shown"); 
    shown.style.animation = "slide-out-from-right ease-in-out 250ms forwards"; 
    shown.classList.remove("shown"); 
    if (shown.nextElementSibling) {
        shown.nextElementSibling.style.animation = "slide-in-from-left ease-in-out 250ms forwards"; 
        shown.nextElementSibling.classList.add("shown")
        shown.nextElementSibling.firstElementChild.classList.add("text-rise"); 
    } else if (shown.previousElementSibling) {
        shown.previousElementSibling.style.animation = "slide-in-from-left ease-in-out 250ms forwards";
        shown.previousElementSibling.classList.add("shown");
        shown.previousElementSibling.firstElementChild.classList.add("text-rise"); 
    }
    labels.forEach((label) => {
        label.classList.toggle("picked"); 
    })
}); 

leftButton.addEventListener("click", function() {
    slides.forEach((slide) => {
        slide.firstElementChild.classList.remove("text-rise"); 
    }); 
    let shown = document.querySelector(".slide.shown"); 
    shown.style.animation = "slide-out-from-left ease-in-out 250ms forwards"; 
    shown.classList.remove("shown"); 
    if (shown.nextElementSibling) {
        shown.nextElementSibling.style.animation = "slide-in-from-right ease-in-out 250ms forwards"; 
        shown.nextElementSibling.classList.add("shown")
        shown.nextElementSibling.firstElementChild.classList.add("text-rise")
    } else if (shown.previousElementSibling) {
        shown.previousElementSibling.style.animation = "slide-in-from-right ease-in-out 250ms forwards";
        shown.previousElementSibling.classList.add("shown"); 
        shown.previousElementSibling.firstElementChild.classList.add("text-rise")
    }
    labels.forEach((label) => {
        label.classList.toggle("picked"); 
    })
}); 

const options = {
    threshold: .75, 
}

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach((entry) => {
        if (window.innerWidth > 1000 && !entry.isIntersecting) {
            nav.classList.add("fixed"); 
            console.log("not intersected"); 
        } else {
            nav.classList.remove("fixed"); 
            console.log("is intersected"); 
        }
    })
}, options)

observer.observe(hero); 