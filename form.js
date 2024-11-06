const form = document.querySelector('form');
const email = document.getElementById('clientmail');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const address = document.getElementById('address');
const province = document.getElementById('province');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  checkInputs();
});

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const isValidPhone = phone => {
    const re = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    return re.test(String(phone));
};

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


const checkInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const phoneValue = phone.value.trim();
    const password2Value = password2.value.trim();
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const addressValue = address.value.trim();
    const provinceValue = province.value.trim();

    if(emailValue === '') {
        setError(email, 'Email cannot be blank');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Email is not valid');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password cannot be blank');
    } else if(passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters');
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Password cannot be blank');
    } else if(password2Value !== passwordValue) {
        setError(password2, 'Passwords do not match');
    } else {
        setSuccess(password2);
    }

    if(firstnameValue === '') {
        setError(firstname, 'First name cannot be blank');
    } else {
        setSuccess(firstname);
    }

    if(lastnameValue === '') {
        setError(lastname, 'Lastname cannot be blank');
    } else {
        setSuccess(lastname);
    }


    if(phoneValue === '') {
        setError(phone, 'Phone cannot be blank');
    } else if (!isValidPhone(phoneValue)) {
        setError(phone, 'Phone number is not valid');
    } else {
        setSuccess(phone);
    }

    if(addressValue === '') {
        setError(address, 'Address cannot be blank');
    } else {
        setSuccess(address);
    }

    if(provinceValue === '') {
        setError(province, 'Province cannot be blank');
    } else {
        setSuccess(province);
    }

    
    if(emailValue !== '' && passwordValue !== '' && phoneValue !== '' && password2Value !== '' && firstnameValue !== '' && lastnameValue !== '' && addressValue !== '' && isValidEmail(emailValue) && isValidPhone(phoneValue) && passwordValue.length >= 8 && password2Value === passwordValue) {
        window.location.href = 'signup-2.html';
    }
    
};
