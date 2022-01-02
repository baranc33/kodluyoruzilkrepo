// istediğimiz html elemanı istediğimiz gibi yazacağımız bir fonksyon hazırlayalım


function domIdWriteInfo(id,info){
    let domObject=document.querySelector(`#${id}`);
    domObject.innerHTML=info
}

domIdWriteInfo('info','selam')