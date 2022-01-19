
let counter= localStorage.getItem('counter');
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
