let age = 32
console.log(Number(age), Boolean(age), String(age));
let login = 'Cheese'
console.log(Number(login), Boolean(login), String(login));
let isHome = true
console.log(Number(isHome), Boolean(isHome), String(isHome));
let cat = null
console.log(Number(cat), Boolean(cat), String(cat));
let pen = undefined
console.log(Number(pen), Boolean(pen), String(pen));
let myObj = {
    color: 'blue'
}
console.log(Number(myObj), Boolean(myObj), String(myObj));
let id = Symbol('id')
console.log(Number(id), Boolean(id), String(id));
let bigInt = 4984531n
console.log(Number(bigInt), Boolean(bigInt), String(bigInt));


console.log(true + false); 
console.log(12 / '6'); 
console.log("number" + 15 + 3);
console.log(15 + 3 + "number");
console.log([1] > null);
console.log("foo" + + "bar");
console.log('true' == true);
console.log(false == 'false');
console.log(null == '');
console.log(!!"false" == !!"true");
// console.log([‘x’] == ‘x’);
console.log([] + null + 1);
console.log(0 || "0" && {});
console.log([1,2,3] == [1,2,3]);
console.log({}+[]+{}+[1]);
console.log(!+[]+[]+![]);
console.log(new Date(0) - 0);
console.log(new Date(0) + 0);
console.log(123 != '456');
console.log(4 > '5');