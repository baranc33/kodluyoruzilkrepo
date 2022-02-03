// for döngüsü
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Guide/Loops_and_iteration

let user =['hakan','baran','çakır']

let userlistDom=document.querySelector('#userList')

for(let index=0; index<user.length; index++)
{
    const liDom=document.createElement('li')
    liDom.innerHTML=user[index];
    userlistDom.appendChild(liDom);

}
