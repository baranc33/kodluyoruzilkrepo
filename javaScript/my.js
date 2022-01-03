// event listesi aşşağıdaki linkte
//https://www.w3schools.com/jsref/dom_obj_event.asp

let greeting=document.querySelector('#info');
// greeting.addEventListener('click', function(){
// // bu şekilde direk fonksyon yazılabilir yada aşşağıdaki gibi
// // dışardan belirttiğimiz bir fonksyon yolliyabiliriz
// });


greeting.addEventListener("click",domClick);
// function domClick(){
//     console.log(this.innerHtml="Tıklandığında değişti");
//     this.style.color='red';
// }

// ternar ile bi dğeişiklik yapalım
function domClick(){
    this.style.color=='red'? this.style.color='blue':this.style.color='red';
}