let inputLeft=document.querySelector('.left-input')
let inputRight=document.querySelector('.right-input')
let mezenneLeft=document.querySelector('.text2-left')
let mezenneRight=document.querySelector('.text2-right')
let currencyLeft=document.querySelectorAll('.currency-left')
let currencyRight=document.querySelectorAll('.currency-right')
console.log(currencyLeft)
console.log(currencyRight)
let left = 'RUB', right = 'USD';


console.log(inputRight.value)

function func(){
  fetch(`https://api.exchangerate.host/latest?base=${left}&symbols=${right}`)
  .then(response => response.json())
  .then(data =>{
    console.log(data.rates[right]);
    console.log(left , right);

    mezenneLeft.innerText=`1 ${left} = ${data.rates[right]} ${right}`;

    inputLeft.addEventListener('keyup', () => {
      console.log(inputLeft.value);
      inputRight.value=Number(inputLeft.value)*Number(data.rates[right])
    })
    
})
.catch( error =>{
  alert('İnternet qoşulu deyil!')
  console.log('İnternet qoşulu deyil!')
})

}




function func2(){
  fetch(`https://api.exchangerate.host/latest?base=${right}&symbols=${left}`)
  .then(response => response.json())
  .then(data =>{
    console.log(data.rates[left]);
    console.log(left , right);

    mezenneRight.innerText=`1 ${right} = ${data.rates[left]} ${left}`;

    inputRight.addEventListener('keyup', () => {
      console.log(inputRight.value);
      inputLeft.value=Number(inputRight.value)*Number(data.rates[left])
    });
})
.catch( error =>{
  alert('İnternet qoşulu deyil!')
  console.log('İnternet qoşulu deyil!')
})
}


currencyLeft.forEach((item)=>{
  item.addEventListener('click',(e)=>{
    left = e.target.innerText;
    
    func();
    func2();
    
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
    func2();
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
func2();