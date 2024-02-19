//Toggle Menu icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

    if (navbar.classList.contains("slide-in")) {
        navbar.classList.remove("slide-in");
        navbar.classList.add("slide-out");
    } else {
        navbar.classList.remove("slide-out");
        navbar.classList.add("slide-in");
    }
}

//scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');

            });
        }; 
    });

//sticky navbar
let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY>100);

//remove toggle icon & navbar

}

// scroll reveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 150,
});

ScrollReveal().reveal('.home-content,heading,.services-box,.skills i', { origin:'top',
    distance: '20px',
    reset: true
});
ScrollReveal().reveal('.home-img,services-container,.portfolio-box', { origin:'button',
    distance: '20px',
    reset: true
});
ScrollReveal().reveal('.about-img', { origin:'left',
    distance: '20px',
    reset: true
 });
ScrollReveal().reveal('.about-content', { 
    origin:'right',
    distance: '30px',
    reset: true
 });


 //read more function
 function ReadMore() {
    var additionalContent = document.getElementById("extra");
    var readMoreBtn = document.getElementById("read");

    if (additionalContent.style.maxHeight) {
        additionalContent.style.maxHeight = null;
        readMoreBtn.textContent = "Read ++";
    } else {
        additionalContent.style.maxHeight = additionalContent.scrollHeight + "px";
        readMoreBtn.textContent = "Read --";
    }
}

// show Info function
function Info1() {
    var additionalContent = document.getElementById("info-1");
    var readMoreBtn = document.getElementById("read-1");

    if (additionalContent.style.maxHeight) {
        additionalContent.style.maxHeight = null;
        readMoreBtn.textContent = "Info ++";
    } else {
        additionalContent.style.maxHeight = additionalContent.scrollHeight + "px";
        readMoreBtn.textContent = "Info --";
    }
}

function Info2() {
    var additionalContent = document.getElementById("info-2");
    var readMoreBtn = document.getElementById("read-2");

    if (additionalContent.style.maxHeight) {
        additionalContent.style.maxHeight = null;
        readMoreBtn.textContent = "Info ++";
    } else {
        additionalContent.style.maxHeight = additionalContent.scrollHeight + "px";
        readMoreBtn.textContent = "Info --";
    }
}

function Info3() {
    var additionalContent = document.getElementById("info-3");
    var readMoreBtn = document.getElementById("read-3");

    if (additionalContent.style.maxHeight) {
        additionalContent.style.maxHeight = null;
        readMoreBtn.textContent = "Info ++";
    } else {
        additionalContent.style.maxHeight = additionalContent.scrollHeight + "px";
        readMoreBtn.textContent = "Info --";
    }
}