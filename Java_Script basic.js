//1.typeof variable
var banana = 22;
console.log(typeof banana);
var name = "Rakibul Islam";
console.log(typeof name);
var hot = true;
var rich = false;
console.log(typeof hot);



//2.only 1st time use var & result will be show last input
//not use my_name (use myName this is camel case)
var myName = "Rakibul"
myName = "Eti"
console.log(myName);



//3.all letter show lower case, uppercase search index position & divided word
var id = "My name is Rakibul Islam";
console.log(id.toLowerCase());
console.log(id.toUpperCase());
console.log(id.indexOf("is"));
console.log(id.split("is"));



//4.float,string to parseInt/parseFloat dosomik ar por koto gor jabe seta toFixed(5)
var number1 = .3;
var number2 = ".2";
number2 = parseFloat(number2);
var total = number1 + number1;
total = total.toFixed(5)
console.log(total);



//5.sum of two numbers
var number11 = 25;
var number22 = 35;
var total = number11 + number22;
console.log(total);



//6.subtraction of two numbers
var total = number22 - number11;
console.log(total);



//7.multiplication of two numbers
var total = number22 * number11;
console.log(total);



//8.division of two numbers
var total = number22 / number11;
console.log(total);



//9.reminder/modulus
var total = number22 % number11;
console.log(total);



//10.add to two name
var name1 = "Rakibul";
var name2 = "Eti";
var result = name1 + " " + name2;
console.log(result);



//11.math absolute positive to negative or negative to positive
var number = -45;
var result = Math.abs(number);
console.log(result);



//12. .5 ar besi hole porer digit a jabe ar kom hole same digit a thakbe
var number3 = 32.27;
var result = Math.round(number3);
console.log(result);



//13.nicer ta count
var number4 = 32.67;
var result = Math.floor(number4);
console.log(result);



//14.uporer ta count
var result = Math.ceil(number4);
console.log(result);



//15.ak ak bar ak ak ta show (like lotary)
var result = Math.random(number4) * 100;
console.log(result);



//16.if else condition
var BiscuitsPrice = 14;
if (BiscuitsPrice < 10) {
    console.log("I Shall eat");
} else {
    console.log("I shall not eat")
}



//17.if, else if,else condition orr operator
var job = true;
var salary = 50000;
if (job == true || salary > 200000) {
    console.log("Best boy");
} else if (job = false) {
    console.log("God boy");
} else {
    console.log("Bad boy");
}



//18.if, else if,else condition and operator
var job = true;
var salary = 50000;
if (job == false && salary > 200000) {
    console.log("Best boy");
} else if (job = false) {
    console.log("God boy");
} else {
    console.log("Bad boy");
}



//19.date
var date = new Date('1999-01-21');
console.log(date);



//20.Array
var studentList = [3, 8, 13, 18];
console.log("Student List: " + studentList)

//update value
var RiponAge = studentList[1];
console.log(RiponAge)
studentList[1] = 15;
console.log(studentList)

//position of value jodi na thake tahola -1 dekhabe
var position = studentList.indexOf(12);
console.log(position)

//push value push korle sese add hobe
studentList.push(22);
console.log(studentList)

//length of element
console.log(studentList.length)

//pop korle ses theke delete hobe
studentList.pop();
console.log(studentList)

//after pop
console.log(studentList.length)

//name list
var teaList = ["Jahanggir,Milon,Meherab,Ripon,Tamim"];
console.log(teaList);

//1st a add hobe
teaList.unshift("Jakir");
console.log(teaList)

//1st a add hobe
teaList.shift();
console.log(teaList)

//2 theke suru tai surute 2 & 4 a ses tai sese 4
var part = teaList.slice(2, 4);
console.log(part);



//21.While Loop
var number5 = 7;
while (number5 <= 10) {
    console.log(number5);
    number5 = number5 + 1;
}



//22.For Loop
for (var i = 0; i <= 5; i++) {
    console.log(i)
}

//length of element
var number6 = [93, 97, 99, 11, 14, 8];
console.log("Length is:" + number6.length)

//koto theke koto index cassi seta nirnoy
var number7 = [93,95,97,99,101];
for (var i = 0; i <= 1; i++) {
    var resultOfArray = number7[i];
    console.log(resultOfArray)
}



//23.Switch case
var number8 = 400;
switch (number8) {
    case 100:
        console.log("Rakibul")
        break;
    case 200:
        console.log("Ripon")
        break;
    case 400:
        console.log("Meherab")
        break;
    case 300:
        console.log("Imran")
        break;
    default:
        console.log("Not found")
}



//24.Function
function ID() {
    console.log("212-0172-203")
}
//function call
ID();
//function call korar por o data input kore again function call kora jay
//loop akbare sob kaj kore & function a ja ja dorkar tai kora jay
var myNameIs = "Rakibul";
console.log(myNameIs)
//again function call
ID();

//here num=parameter,
function doubleIt(num) {
    var result = num * 2;
    return result;
}
//call function
//function ar vitor if else,array use kora
var first = doubleIt(4);
var second = doubleIt(3);
console.log(first, second)
var total = first+second;
console.log("Total number is = "+total);



//25.Object
var studentDetails = { Name: "Rakibul", ID: 212, Phone: 1050 };
console.log(studentDetails);
//only phone number show
var phoneNumber = studentDetails.Phone;
console.log(phoneNumber);
//change phone number
studentDetails.Phone = 4008;
console.log(studentDetails);



//26.Function Call(inch to feet)
function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}
var nana = inchToFeet(156);
console.log(nana);
//again
var nani = inchToFeet(144);
console.log(nani);



//27.Use const(change korte na chaile use const)
const namee = "Rakibul";
console.log(namee);

//use let(change korte chaile use let)
let namme = "Rakibul";
namme = "Eti";
console.log(namme);



//28.Leep year
function leepYear(Year) {
    if (Year % 4 == 0) {
        return "This is leapYear"
    } else {
        return "This is not leapYear"
    }
}
var result = leepYear(2022);
console.log(result);



//29.Factorial number use for loop
function factNumber(n) {
    var fact = 1;
    for (var i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}
var result = factNumber(4);
console.log(result);



//30.fibonacci use function
function fibonacci(n){
var fibo= [0,1];
for(var i =2 ;i <=n; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
return fibo;
}
var result = fibonacci(10);
console.log(result);



//31.Prime Number
var number = 19;
for (var i = 2; i < number - 1; i++) {
    if (number % i == 0) {
        console.log("This is not prime number");
        break;
    } else {
        console.log("This is prime number")
    }
}
