let counter=0;
let counterDom=document.querySelector('#counter');
let increaseDom=document.querySelector('#increase');
let decreaseDom=document.querySelector('#decrease');


counterDom.innerHTML=counter;

increaseDom.addEventListener('click',clickEvent);
decreaseDom.addEventListener('click',clickEvent);

function clickEvent() {
    console.log();
    if(this.id=='increase')// burdaki id butonun etiketi
    {
        counter++;
    }
    else if(this.id=='decrease')
    {
        counter--;
    }
}