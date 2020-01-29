function getSum(a: number, b: number) { 
    return a + b; 
} 
let sum = getSum(10,15) 
console.log('Sum of the two numbers is: ' +sum); 

let mySum = function(num1:any, num2:any) {
    if(typeof num1 == "string"){
        num1 = parseInt(num1);
    }  
    if(typeof num2 == "string"){
        num2 = parseInt(num2);
    }

    return num1 + num2;
}

console.log(mySum("3",5));

function getName(firstName:string, lastName?:string){
    if(lastName == undefined){
        return firstName;
    }
    return firstName+" "+ lastName; 
}

console.log(getName('John' ));

function myVoid(): void{
    return;
}