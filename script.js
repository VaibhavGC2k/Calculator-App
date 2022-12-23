const disp = document.querySelector('#display');
const buttons = document.querySelectorAll('.btn1');
const clear = document.querySelector('#clear');
const evaluate = document.querySelector('evaluate');
const del = document.querySelector('#del');

buttons.forEach(function(button)
{
  button.addEventListener('click',onclick=()=>
  {
    disp.innerHTML += button.value;
  })
})

disp.addEventListener('click',onclick=(event)=>
{
  let button = event.target;
  if (button.tagName === 'BUTTON')
  {
    if (button.id === 'evaluate')
      {
        val = disp.innerHTML;
        disp.innerHTML = eval(val);
      }
    else if (button.id === 'clear')
      {
        disp.innerHTML = "";
      }
    else if(button.id === 'del')
      {
        disp.innerHTML =  disp.innerHTML.slice(0,-1);
      }
  }
})