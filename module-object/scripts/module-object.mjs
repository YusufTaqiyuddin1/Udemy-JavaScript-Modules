// Module Object
const firstName = "Yusuf";
const lastName = "Taqiyuddin";

function hello(){
    console.log(`Hello from Yusuf`);
}

class Person{
    constructor(){
        this.name = "Yusuf";
    }

    greet(){
        console.log(`Hello ${this.name}`);
    }
}

export {firstName, lastName, hello, Person};