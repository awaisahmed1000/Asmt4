//Declare variable namded greeting with string value "Hello, World!"
let greeting:string = "Hello, World!";
console.log(greeting);
//Define two variables with integer values and calculate their sum, difference, product and quotient
let x = 5;
let y = 2;
let sum = x + y;
let difference = x-y;
let product = x*y;
let quotient = x/y;
console.log(`Sum is ${sum}`);
console.log(`Difference is ${difference}`);
console.log(`Product is ${product}`);
console.log(`Quotient is ${quotient}`);

//Swapping values
let a = 1;
let b = 2;
[a,b] = [b,a];
console.log(`Now new value of a is ${b} and the new value of b is ${a}`)


//Type Annotation (Typescript)
let stringVariable:string;
console.log(`I declared a variable with a string value. When I tried to save a number in it I got this error is VS code 'Type 'number' is not assignable to type 'string'`);

//Modulus operator
let x1 = 5;
let x2 = 3;
let modulus = x1%x2;
console.log(`The modulus of 5 and 3 is ${modulus}`);

//Increment a variable's value using two different methods 
let counter = 0;
counter=+5;
let counter1 = 1;
counter1++;
console.log(`The value 0 is incremented by 5 using counter=+1. Initially it was 0 and now it is ${counter}`);
console.log(`The value 1 is incremented by 1 using counter1++. Initially it was 1 and now it is ${counter1}`);


//Logical Gates 
let a1 = true;
let b1 = false;
let c1 = true;
let orGate = a1 || b1 || c1;
let andGate = a1 && b1 && c1;
let notGateofOrGate = !(orGate);
let notGateofAndGate = !(andGate); 
console.log(`Value for OR Gate is ${orGate}`);
console.log(`Value for AND Gate is ${andGate}`);
console.log(`Value for NOT of OR Gate is ${notGateofOrGate}`);
console.log(`Value for NOT of AND Gate is ${notGateofAndGate }`);


//Compound Assignment

let num = 10;
num+=5;
console.log(`Initially num had value 10. I incremented 5 in it to make it ${num}`);
num-=2;
console.log(`Then I decremented 2 from latest value (15) to make it ${num}`);
num*=2;
console.log(`Then I multiplied latest value (13) with 2 to make it ${num}`);
num/=13;
console.log(`Then I divided latest value (26) with 13 to make it ${num}`);

//Even or odd
let num1 = 3;
let evenOrOdd = 5%2;
console.log(`Since the value of ${evenOrOdd} is other than zero, so 3 is Odd`);


//Voting eligibility
let ageofPerson = 17;
if (ageofPerson >= 18) {
console.log(`The Person is eligible to vote`)
}
else {
console.log(`The person is ineligible to vote`)
};

//Assign a grade based on numerical score
let marks = 90;
if(marks>90) {
console.log(`The grade is A`)    
}
else if (marks>80) {
console.log(`The grade is B`)
}
else if (marks<=80) {
console.log(`The grade is C`)
};

//Max of Three
let number1 = 2;
let number2 = 3;
let number3= 4;
let maxnumber = Math.max(number1, number2, number3);
console.log(`The max num is ${maxnumber}`);

//Leap Year checker

let year1 = 2024;
let leapYearOrNot:boolean = (((year1 % 4 == 0) && (year1 % 100 != 0)) || (year1 % 400 == 0));
console.log(leapYearOrNot);
if (leapYearOrNot == true) {
console.log(`Given year is leap year`)
}
else if (leapYearOrNot == false) {
console.log(`Given Year is not leap year`)
};


//Fahrenheit to celcius converter

function fahrenheittoCelcius(fahrenheit:number){
return ((fahrenheit-32)*(5/9))
};
console.log(`The temp in celcius for 98.6f is ${fahrenheittoCelcius(98.6)}`);

//Positive, negative or zero
let posNegOrZero = -10;
if (posNegOrZero > 0){
console.log(`Number is Positive`)
}
else if (posNegOrZero <0) {
console.log(`Number is Negative`)
}
else {
console.log(`The Number is zero`)    
};


//Multiplication table

for (let count=1;count<=10;count++) {
console.log(`4 * ${count} = ${4*count}`);
};




