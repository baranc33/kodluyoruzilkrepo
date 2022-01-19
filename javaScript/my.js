// sayı varsa sayı sayı yoksa 0/ couterı number yapmalıyız
let counter= localStorage.getItem('counter')? Number(localStorage.getItem('counter')): 0;
let counterDom=document.querySelector('#counter');
let increaseDom=document.querySelector('#increase');
let decreaseDom=document.querySelector('#decrease');

counterDom.innerHTML=counter;
increaseDom.addEventListener('click',clickEvent);
decreaseDom.addEventListener('click',clickEvent);
function clickEvent() {
    this.id=='increase'?++counter:--counter;
    localStorage.setItem('counter',counter);
    counterDom.innerHTML=counter;
}
