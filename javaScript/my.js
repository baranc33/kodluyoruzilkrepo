//form submiti
let formDom=document.querySelector('#userForm');
formDom.addEventListener('submit',formSubmit);

function formSubmit(event){// burda eventle yukarda belirttiğimiz işlemi
    event.preventDefault();// submit işlemini iptal ettik

    console.log('işlem gerçekleşti');
}


