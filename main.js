let inputLeft=document.querySelector('.left-input')
let inputRight=document.querySelector('.right-input')
let mezenneLeft=document.querySelector('.text2-left')
let mezenneRight=document.querySelector('.text2-right')
let currencyLeft=document.querySelectorAll('.currency-left')
let currencyRight=document.querySelectorAll('.currency-right')
console.log(currencyLeft)
console.log(currencyRight)
let left = 'RUB', right = 'USD';

// function changeText(event) {
//     event.class = 'currency-clicked';

//     console.log(item.className)
// }
//      currency.forEach((element) => {  
//         element.addEventListener('click', changeText);
//       });


console.log(inputRight.value)

function func(){
  fetch(`https://api.exchangerate.host/latest?base=${left}&symbols=${right}`)
  .then(response => response.json())
  .then(data =>{
    console.log(data.rates[right]);
    console.log(left , right);

    mezenneLeft.innerText=`1 ${left} = ${data.rates[right]} ${right}`;
    mezenneRight.innerText=`1 ${right} = ${1/data.rates[right]} ${left}`;

    inputLeft.addEventListener('click', () => {
      console.log(inputLeft.value);
      inputRight.value=Number(inputLeft.value)*Number(data.rates[right])
    });
})

}

currencyLeft.forEach((item)=>{
  item.addEventListener('click',(e)=>{
    left = e.target.innerText;
    func();
    
    if(e.target){
          e.target.class = 'active';
    let noButton = document.querySelectorAll('.currency-left:not(.active)');
    noButton.forEach((a)=>{
      a.style.background = 'white';
      a.style.border= '1px solid #E5E5E5';
      a.style.color = '#C6C6C6';
    })
    
    }
    e.target.style.background = '#833AE0';
    e.target.style.border= '1px solid #833AE0';
    e.target.style.color = 'white';
  })
})

currencyRight.forEach((item)=>{
  item.addEventListener('click',(e)=>{
    right = e.target.innerText;
    func();
    if(e.target){
          e.target.class = 'active';
    let noButton = document.querySelectorAll('.currency-right:not(.active)');
    noButton.forEach((a)=>{
      a.style.background = 'white';
      a.style.border= '1px solid #E5E5E5';
      a.style.color = '#C6C6C6';
    })
    
    }
    e.target.style.background = '#833AE0';
    e.target.style.border= '1px solid #833AE0';
    e.target.style.color = 'white';
  })
})

func();