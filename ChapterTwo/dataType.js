// primitive data type 
// 1.Number,
// 2.String,
// 3.backtick
// 4.boolean 
// 5.null
// 6.undefined

//All about Number

var n = 23;
var f = 33.33;
var o = Number('45.34')

console.log(Number.parseInt(o));// 45
console.log(Number.parseFloat(o)); //45.34
console.log(1/0);//infinity
console.log('abec' *3) // NaN

// All about String 
var a = 'a'
var b= "b"
var c = `c`

var number = String(3333)
var string = String('string')
var paiString = String(3.1416)

console.log(number,string,paiString)
// All about boolean
var h3 = true;
var h4 =false;
var h5 = Boolean(true)
var h6 = Boolean(false)

// null and undefine;
var a;
var x = null
console.log(a,x)

const hax= 0xfff;
const oct = 0333;

console.log(hax,oct);