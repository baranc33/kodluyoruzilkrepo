const LOREM_LIST=["hakan","baran","çakır","test"]

let counter=0;

for(counter;counter<5;counter++){

    if(LOREM_LIST[counter]!='test'){
        continue;
    }
    console.log(LOREM_LIST[counter])
}