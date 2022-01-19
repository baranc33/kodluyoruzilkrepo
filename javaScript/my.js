//form submitten verileri local stroge e
let formDom=document.querySelector('#userForm');
formDom.addEventListener('submit',formSubmit);

function formSubmit(event){// burda eventle yukarda belirttiğimiz işlemi
    event.preventDefault();// submit işlemini iptal ettik
    let scoreInputDom=document.querySelector('#score');
// input içindeki value değerini alalım
   localStorage.setItem('score',scoreInputDom.value);
}


