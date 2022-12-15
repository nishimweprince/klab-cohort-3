// <---- MODAL VALIDATION ---->

let open = document.querySelector('.newsletter-btn');
let close = document.querySelector('.newsletter-cancel');
let modal_container = document.querySelector('.modal-container');
let fullname = document.getElementById('fullname').value;
let subscribe = document.querySelector('.newsletter-submit');
let category = document.getElementById('profession');
let categoryValue = category.value;

let noscroll = document.querySelector('.modal-container');

//ERROR LABELS
let email_err = document.getElementById('email-err');
let err_category = document.getElementById('err-category');


// TOGGLE MODAL
open.addEventListener('click', () => {
    modal_container.classList.add('show');
    noscroll.classList.add('fixed-scoll');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
    noscroll.classList.remove('fixed-scroll');
})

// EMAIL VALIDATION
subscribe.addEventListener('click', (e) => {
    e.preventDefault();
    const emailRegex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)(.[a-z]+)?$/
    const email = document.getElementById('email').value;

    if (emailRegex.test(email)) {
        console.log("Valid");
        console.log(email);
        email_err.classList.remove('err-email');

    }
    else {
        console.log("Invalid");
        console.log(email);
        email_err.classList.add('err-email');
    }

})

//CATEGORY VALIDATION
function categoryOnChange() {
    if (categoryValue == 'category-default') {
    err_category.classList.add('err-category');

    console.log(categoryValue)
}
else {
    err_category.classList.remove('err-category');
    console.log(categoryValue)
}
}