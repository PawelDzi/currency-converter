{
    let result;

    const calculateResult = () => {
        const currency = document.querySelector(".currency");
        const result1 = document.querySelector(".result1");

        const sum = document.querySelector(".js-sum");
        const sumCurrency = sum.value;

        const formEuro = 4.90;
        const formDolar = 4.48;
        const formFrank = 4.88;

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
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const result2 = document.querySelector(".result2");

        calculateResult();
        result2.innerText = result.toFixed(2);
    };
    
    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}