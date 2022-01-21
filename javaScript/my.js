let userFormDom=document.querySelector('#userForm');
userFormDom.addEventListener('submit',formHandler);

function formHandler(event){
    event.preventDefault();
    const USER_Name=document.querySelector('#username');// bilgi alacağımız input
    const SCORE=document.querySelector('#score');//bilgi alacağımız input2
    addItem(USER_Name.value,SCORE.value);
}

/*
 <li class="">
A list item
</li>
*/

let userListDom=document.querySelector('#userList');//içine ekliyeceğimiz ul
// normal function yerine arrow function ile ekliyelim
const  addItem =(username,score) =>{
    let liDom=document.createElement('li')
    liDom.innerHTML=`${username}
<span class="badge bg-primary rounded-pill"> ${score}</span>`;// ekliceğimiz bilgi
    // li nin classlarını ekliyelim
    liDom.classList.add('list-group-item','d-flex' ,'justify-content-between', 'align-items-center')
    userListDom.append(liDom);// ekleme işlemi
}

