function creatCounter(){
    let count=0;
     return function (){
        ++count;
        return count
    }   
}

let counter=creatCounter();
console.log(counter())
console.log(counter())