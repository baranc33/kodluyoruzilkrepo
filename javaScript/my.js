// event listesi aşşağıdaki linkte
//https://www.w3schools.com/jsref/dom_obj_event.asp

let greeting=document.querySelector('#info');
greeting.addEventListener("mouseover",domClick);

function domClick(){
    this.style.color=='red'? this.style.color='blue':this.style.color='red';
}