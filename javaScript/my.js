let userFormDom=document.querySelector('#userForm');
userFormDom.addEventListener('submit',formHandler);
const alertDom=document.querySelector('#alert');
const AlertFucntion=(title,message,className="warning")=>`
<div class="alert alert-${className} alert-dismissible fade show" row="alert" >
<strong >${title}</strong>${message}
<button type="button" class="btn-close" data-bs-dismiss="alert"></button> 
</div>
`;


function formHandler(event){
    event.preventDefault();
    const USER_Name=document.querySelector('#username');// bilgi alacağımız input
    const SCORE=document.querySelector('#score');//bilgi alacağımız input2
 // gelen bilgileri kontrol edelim
    if(USER_Name.value && SCORE.value){
    addItem(USER_Name.value,SCORE.value);
     USER_Name="";
     SCORE="";
     alertDom.innerHTML="";
    }
    else{
        alertDom.innerHTML=AlertFucntion("Başlık : ",'Eksik Bilgi girdiniz',"danger");
    }
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
    userListDom.append(liDom);//ul ye ekleme işlemi
}

