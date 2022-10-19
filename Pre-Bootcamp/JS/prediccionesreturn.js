function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');
//hello, dojo//
 

//esta funcion retorna el valor de 15
function hello() {
    console.log('hello');//imprimer "hello"
    return 15; // Retorna el valor de 15
}
var result = hello(); //  result = 15
console.log('result is', result); 
//result is 15 

/* 
variables        valor
result            15

*/

function numPlus(num) {
    console.log('num is', num);// imprime "num is"
    return num+15;//retorna "num+15"

}
var result = numPlus(3);//numPlua=3
console.log('result is', result);
//num is 3 , result is 18

/*
variable          valor 
result             3
*/

var num = 15;
console.log(num);//imprimir 15
function logAndReturn(num2){//logandreturn=num2
   console.log(num2);//imprime "num 2"   
   return num2;
}
var result = logAndReturn(10);//num2=10
console.log(result);
console.log(num);

//[15,10,10,15]

/*
variables          valor
num                 15
num2                10
*/

var num = 15;//num=15
console.log(num);//imprimir 15
function timesTwo(num2){//timestwo=num2
   console.log(num2); //imprimir num2
   return num2*2;//10*2=20
}
var result = timesTwo(10);//num2=10
console.log(result);//imprimir 20
console.log(num);//imprimir 15
//15,10,20,15
