// all about operator
// + _*  / % ++ -- 
// preINcremental
var a = 12
console.log(++a) // 13  1 +a 
// postIncremental 
console.log(a++) //13  a + 1 
console.log(a) // 14
//
console.log(--a) // 13
console.log(a--) // 13
console.log(a) // 12

//assingment operator
var b=2;
a+=b
console.log(a) //14
a-=b;
console.log(a);//12
a*=b 
console.log(a);//24
a%=b 
console.log(a);//0  24%2 = 0 

//comparison operator
a =20 ; b=10
console.log(a ===b);
console.log(a !== b);
console.log( a < b);
console.log(a > b);
console.log( a >= b);
console.log( a <= b);
var c = '50'; var d = 50;

console.log(c ==d);
console.log( c ===d);
console.log(c !== d);

// logical operator

// && and operator 
// || or operator 
// ! not opearator

// bitwise operator

// type operator
console.log(typeof 10)
