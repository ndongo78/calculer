const screenCal=document.querySelector('.screen')
const buttons=document.querySelectorAll('button')

let toCal=[];
let accumulator;

buttons.forEach(button=>{
  button.addEventListener('click',()=>getvale(button))
})

function getvale (button) {
  const saisi=button.textContent;
  
  
  switch(saisi){
    case 'c':
      toCal=[];
      screenCal.textContent='';
      break;
    case '=':
      screenCal.textContent=eval(accumulator)
      accumulator='';
      toCal=[]
      break;
     case '+/-':
       // code
       break;
     
     default:
       toCal.push(saisi)
       accumulator=toCal.join('')
       screenCal.textContent=accumulator
  }
}