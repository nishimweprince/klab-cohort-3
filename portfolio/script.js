// <---- MODAL VALIDATION ---->

let open = document.querySelector('.newsletter-btn');
let close = document.querySelector('.newsletter-cancel');
let modal_container = document.querySelector('.modal-container');
let subscribe = document.querySelector('.newsletter-submit');


//FEEDBACK LABELS
let email_err = document.getElementById('email-err');
let err_category = document.getElementById('err-category');
let err_fullname = document.getElementById('err-fullname');
let form_feedback = document.querySelector('.form-feedback');


// TOGGLE MODAL
open.addEventListener('click', () => {
    modal_container.classList.add('show');
    document.body.classList.add('fixed-scroll');
});


close.addEventListener('click', () => {
    modal_container.classList.remove('show');
    document.body.classList.remove('fixed-scroll');
})

// FORM VALIDATION
subscribe.addEventListener('click', (e) => {
    e.preventDefault();

    const emailRegex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)(.[a-z]+)?$/;
    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/;

    const email = document.getElementById('email').value;
    let category = document.getElementById('profession');
    let categoryValue = category.value;
    let fullname = document.getElementById('fullname').value;

    if ((nameRegex.test(fullname))
        && (!(categoryValue == 'category-default'))
        && (emailRegex.test(email))
    ) {
        form_feedback.classList.add("form-feedback-show");
        return true;
    }


    // FULL NAME VALIDATION

    if (nameRegex.test(fullname)) {
        console.log("Valid");
        err_fullname.classList.remove('err-fullname');
}
    
    else {
        console.log("Invalid name");
        err_fullname.classList.add('err-fullname');
}

   // EMAIL VALIDATION

if (emailRegex.test(email)) {
    console.log("Valid");
    console.log(email);
    email_err.classList.remove('err-email');

    return true;
}

else {
    console.log("Invalid");

    email_err.classList.add('err-email');
    form_feedback.classList.remove("form-feedback-show");

    return false
}

//CATEGORY VALIDATION

    if (categoryValue == 'category-default') {
    
        err_category.classList.add('err-category');
        form_feedback.classList.remove("form-feedback-show");

    return false;
}
else {
    err_category.classList.remove('err-category');
    console.log(categoryValue);

    return true;
    }
    

})