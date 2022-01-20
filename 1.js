//Datatypes problem solving

var a = 1 + 3;
var a = 4;  
typeof a;  //Perform arthmetic operation.
"number"


var b = "1" + 3;
console.log(b);  //In this case, first value is string then after + operator so, + operator can also be  used to concatenate string.
var b = '13';
typeof b;
"string"


var c = "Strong" + "Engineer";
console.log(c);          //Here Both the values are string, + operator concatenate both the string values.
var c = 'StrongEngineer';
typeof c;
"string"


var d = "Strong" + true;
console.log(d);       
var d = 'Strongtrue';
typeof d;
"string"


var d = "false" + false;
console.log(d);
var d = 'falsefalse';
typeof d;
"string"


var e = "1" + true - true;
var e = "1" + true;  // Firstly calling concatenation property then it returns string , - operator only works on number that's why it returns NaN.
console.log(e);
'1true'
var e = '1true' - true;
console.log(e);
NaN
typeof e;
"number"


var f = "10" - false - false - true + 2;
var f = "10" - false // "10" - 0
var f = 10 - false // 10 - 0
var f = 10 - true // 10 -1
var f = 9 + 2;
console.log(f);
var f = 11;
typeof f;
"number"


var e = "Arun" + 10.1 + 20 - 98 + true;
var e = "Arun" + 10.1;
var e = 'Arun10.1'+20;
var e = 'Arun10.120' - 98; // Can't perform subtraction with string
NaN
typeof e;
"number"



var f = "-" + 1;
console.log(f);
var f = '-1'; //Calling concatenation property
typeof f; 
"string"


var g = Number("32") + 2;
console.log(g); // Here number is a method that converts a value to a number.
var g = 34;
typeof g;
"number"


var h = 2 + parseInt("ankit");
console.log(h); // parseInt parses a value as a string & returns in integer.But in this case under string is a character so it returns NaN.
NaN
typeof h;
"number"


var i = "ankit" + 2 + parseInt(2) + parseFloat(33.98);
var i = "ankit" + 2;
var i = 'ankit2'+parseInt(2);
var i = 'ankit22' + parseFloat(33.98);
var i = 'ankit2233.98';
typeof a 
"string"

var j = "10" - 2;
console.log(j);
var j = 8;
typeof j;
"number"

var k = "100" + -20;
console.log(k);  // calling concatenation property
var k = '100-20';
typeof k;
"string"


var l = "100" + 10 + "20" - "20" + true + true + false + -true;
var l = "10010" + "20" // concatenation property
var l = "1001020" - "20" // concatenation property
var l = 1001000 //perform arithmetic operation using - operator
var l = 1001000 + 1; //true is consider as 1
var l = 1001001 + 1 ;
var l = 1001002 + 0; //false is consider as 0
var l = 1001002 + - true;
var l = 1001001
typeof l;
"number"



// Loop problem solving questions

// Print 1 to 10

for(var i=1;i<=10;i++)
{
    console.log(i);
}

// Print 4 to 30

for(var i=4;i<=30;i++)
{
    console.log(i);
}

// Print 5 to 1

for(var i=5;i>=1;i--)
{
    console.log(i);
}

// Print even number from 1 to 100

for(var i=1;i<=100;i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
}

// Print odd numbers from 1 to 100

for(var i=1;i<=100;i++)
{
    if(i%2!=0)
    {
        console.log(i);
    }
}

// Write factorial of 10

var fact=1;
for(var i=1;i<=10;i++)
{
    var fact = fact*i;
    //console.log(fact);
}
console.log(fact);
