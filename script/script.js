let sum = document.querySelector(".js-sum");
let zloty = document.querySelector(".js-zloty");
let formElement = document.querySelector(".js-form");
let result2 = document.querySelector(".result2");
let result1 = document.querySelector(".result1");
let currency = document.querySelector(".currency");

let formEuro = document.querySelector(".js-euro");
let formDolar = document.querySelector(".js-dolar");
let formFrank = document.querySelector(".js-frank");

formEuro = 4.90;
formDolar = 4.48;
formFrank = 4.88;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let result;
    let sumCurrency = sum.value;

    if (document.querySelector(".js-euro").checked == true) {
        result = sumCurrency * formEuro;
        result1.innerText = " Euro ";
    }

    else if (document.querySelector(".js-dolar").checked == true) {
        result = sumCurrency * formDolar;
        result1.innerText = " Dolar ";
    }
    else if (document.querySelector(".js-frank").checked == true) {
        result = sumCurrency * formFrank;
        result1.innerText = " Frank ";
    }

    currency.innerText = sumCurrency;
    result2.innerText = result.toFixed(2);
});