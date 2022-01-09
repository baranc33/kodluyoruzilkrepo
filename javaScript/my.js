let userFormDom=document.querySelector('#userForm');
userFormDom.addEventListener('submit',formHandler);

function formHandler(event){
    event.preventDefault();
    let scoreInputDom=document.querySelector('#score');

   localStorage.setItem('score',scoreInputDom.value);
}


