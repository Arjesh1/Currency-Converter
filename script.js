const api = "https://api.exchangerate-api.com/v4/latest/USD";

let ans = document.getElementById("ans");
var fromCurrency = document.getElementById("fromCurrency")
var toCurrency = document.getElementById("toCurrency")
let inputForm = document.getElementById("inputForm")
let convert = document.getElementById("submit")
var finalValue = document.getElementById("toValue");
var resultFrom;
var resultTo;
var inputAmt;


fromCurrency.addEventListener('change', (event) => {
    resultFrom = `${event.target.value}`;
    console.log(resultFrom);

});
  

toCurrency.addEventListener('change', (event) => {
    resultTo = `${event.target.value}`;
    console.log(resultTo);
});

inputForm.addEventListener('input', updateValue);
  

function updateValue(e) {
    inputAmt = e.target.value;
    console.log(inputAmt);
}



convert.addEventListener("click", getResults);
  

function getResults() {
    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        }).then(displayResults);
}
  

function displayResults(currency) {
    if (resultFrom === resultTo){
        alert ("Please select different currencies")
    } else{
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];

    let ans = 
       ((toRate / fromRate) * inputAmt).toFixed(2);
    

    console.log(ans);
}
}
