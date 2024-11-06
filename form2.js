const form = document.querySelector('form');
const income = document.getElementById('income');
const goals = document.getElementById('investgoals');
const experience = document.getElementById('experience');
const risk = document.getElementById('risk');
const ccn = document.getElementById('ccn');
const cvv = document.getElementById('cvv');
const expiry = document.getElementById('expiry');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    checkInputs();
  });

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
    const incomeValue = income.value.trim();
    const goalsValue = goals.value.trim();
    const experienceValue = experience.value.trim();
    const riskValue = risk.value.trim();
    const ccnValue = ccn.value.trim();
    const cvvValue = cvv.value.trim();
    const expiryValue = expiry.value.trim();

    if(incomeValue === '') {
        setError(income, 'Income cannot be blank');
    } else {
        setSuccess(income);
    }

    if(goalsValue === '') {
        setError(goals, 'Investment goals cannot be blank');
    } else {
        setSuccess(goals);
    }

    if(experienceValue === '') {
        setError(experience, 'Investment experience cannot be blank');
    } else {
        setSuccess(experience);
    }

    if(riskValue === '') {
        setError(risk, 'Risk tolerance cannot be blank');
    } else {
        setSuccess(risk);
    }

    if(ccnValue === '') {
        setError(ccn, 'Credit card number cannot be blank');
    } else {
        setSuccess(ccn);
    }

    if(cvvValue === '') {
        setError(cvv, 'CVV cannot be blank');
    } else {
        setSuccess(cvv);
    }

    if(expiryValue === '') {
        setError(expiry, 'Expiry date cannot be blank');
    } else {
        setSuccess(expiry);
    }



};