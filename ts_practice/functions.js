function getSum(a, b) {
    return a + b;
}
var sum = getSum(10, 15);
console.log('Sum of the two numbers is: ' + sum);
var mySum = function (num1, num2) {
    if (typeof num1 == "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 == "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log(mySum("3", 5));
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + " " + lastName;
}
console.log(getName('John'));
function myVoid() {
    return;
}
