let currency=document.querySelectorAll('.currency')
console.log(currency)


function changeText(event) {
    event.classList.add("currency-clicked");
    console.log(item.className)
}
     currency.forEach((element) => {  
        element.addEventListener('click', changeText);
      });
      

fetch('https://api.exchangerate.host/latest?base=USD&symbols=RUB')
.then(response => response.json())
.then(data =>{
  console.log(data.rates.RUB);
})