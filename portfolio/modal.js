
function validate() {

    const emailRegex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)(.[a-z]+)?$/;
    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/;

    if (emailRegex.test(email)) {
        console.log("Valid");
        console.log(email);
        email_err.classList.remove('err-email');
    
        return true;
    }

    if (!(categoryValue == 'category-default')) {
        err_category.classList.add('err-category');
    
        console.log(categoryValue)
    
        return true;
    }

    if (nameRegex.test(fullname)) {
        console.log("Valid");
        form_feedback.classList.add('form-feedback-show');
    }
    
}

    // FULL NAME VALIDATION

    if (nameRegex.test(fullname)) {
        console.log("Valid");
        form_feedback.classList.add('form-feedback-show');
}
    
    else {
        console.log("Invalid name");
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
    err_category.classList.remove('err-category');

    return false
}

//CATEGORY VALIDATION

if (!(categoryValue == 'category-default')) {
    err_category.classList.remove('err-category');

    console.log(categoryValue)

    return false;
}
else {
    err_category.classList.add('err-category');
    console.log(categoryValue)

    return true;
}