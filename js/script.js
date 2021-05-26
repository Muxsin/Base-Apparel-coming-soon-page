const heroImgEl = document.querySelector('[data-id="img-elem"]');
const leftEl = document.querySelector('.left');
const rightEl = document.querySelector('.right');
const emailForm = document.querySelector('.email-form');
const emailField = document.querySelector('.email-field');
const errorExcIcon = document.querySelector('.error-exclamation-icon');
const errorEl = document.querySelector('.error');
const mobileHeader = document.querySelector('.mobile-header');
const desctopHeader = document.querySelector('.desctop-header');

function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

setInterval(() => {
    if(detectMob()) {
        heroImgEl.src = "./images/hero-mobile.jpg";
        mobileHeader.style.display = "block";
        desctopHeader.style.display = "none";
        leftEl.style.order = 2;
        rightEl.style.order = 1;
    } else {
        heroImgEl.src = "./images/hero-desktop.jpg";
        mobileHeader.style.display = "none";
        desctopHeader.style.display = "block";
        leftEl.style.order = 1;
        rightEl.style.order = 2;
    }
}, 0);

function validateEmail(email) {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(String(email).toLowerCase());
}

emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (emailField.value === "") {
        errorExcIcon.style.opacity = 1;
        errorEl.textContent = "Fild can't be empty!";
    } else if (!validateEmail(emailField.value)) {
        errorExcIcon.style.opacity = 1;
        errorEl.textContent = "Please provide a valid email!";
    } else {
        errorExcIcon.style.opacity = 0;
        errorEl.textContent = "";
    }
})