const api = "https://api.exchangerate-api.com/v4/latest/USD";

let ans = document.getElementById("ans");
var fromCurrency = document.getElementById("fromCurrency")
var toCurrency = document.getElementById("toCurrency")
let inputForm = document.getElementById("inputForm")
let convert = document.getElementById("submit")
let reset = document.getElementById('reset')
var finalValue = document.getElementById("toValue");
var resultFrom;
var resultTo;
var inputAmt;


fromCurrency.addEventListener('change', (event) => {
    resultFrom = `${event.target.value}`;
    console.log(resultFrom , typeof(resultFrom));
    

});

  

toCurrency.addEventListener('change', (event) => {
    resultTo = `${event.target.value}`;
   
});

inputForm.addEventListener('input', updateValue);
  

function updateValue(e) {
    inputAmt = e.target.value;
    document.getElementById('displayCurrency').innerHTML = inputAmt 
    
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
    }else if(resultFrom === "S" || resultTo === "T"){
        alert ("Please select a currency")
    } else{
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];

    finalValue.innerText = 
       ((toRate / fromRate) * inputAmt).toFixed(2);
    
}
}

