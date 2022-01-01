
//kosullarla calismak egzersiz
/*
1- prompt ile aldigin bilgiye göre assagidaki yapiya kulanarak notun bilgisni infoda yazdır
AA  90-100
BA  85 89
BB  80 84
CB  75-79
CC  70-74
DC  65-69
DD  60-64
FD  50-59
FF  00-49

2- KLLANICININ GİRDİĞİ VERİNİN İSTEDİĞİMİZ aralıkta olup olmadığını kotnrol edin
3- ff bilgisinde üzgün surat ikonu çıkart, diğerlerinde gülücük
4-ff class bilgisi text-danger,diğerleri ise text-primary olsun

*/
const SMILE=`:)  `;

let examGraade=prompt("puanı girin");
let textInfo; 
if(examGraade>0&&examGraade<100){
    textInfo=SMILE;
    if(examGraade>=90){
        textInfo +='AA';
        }
        else if(examGraade>=85){
            textInfo+='BA';
        }
        else if(examGraade>=80){
            textInfo+='BB';
        }
        else if(examGraade>=75){
            textInfo+='CB';
        }
        else if(examGraade>=70){
            textInfo+='CC';
        }
        else if(examGraade>=65){
            textInfo+='DC';
        }
        else if(examGraade>=60){
            textInfo+='DD';
        }
        else if(examGraade>=50){
            textInfo +='FD';
        }
        else {
            textInfo =':(  50';
        }
        
}
else{
    textInfo='Hatalı giriş';
}



let info=document.querySelector('#info');

info.innerHTML=`${textInfo} -> ${examGraade}`;
console.log(textInfo);