
function hello(){
    console.log('Hello');
}
function helloWord(){
    hello();
    console.log(' Word');
}

function writeName(name,lastname){

    console.log(`Merhaba ${name} ${lastname}`)
}

helloWord();
writeName('hakan', 'çakır');