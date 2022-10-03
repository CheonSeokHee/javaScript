'use Strict';

//javaScript is 동기적
// execute the code block by order after hoisting
// hoisting: var, function declaration
 console.log('1'); //동기 1번
 setTimeout(() => console.log('2'), 1000); // 비동기  4번
 console.log('3'); // 동기 2번

 //동기적 callback
function printImmeditately(print){
    print();
}
printImmeditately(() => console.log('hello!')); //동기 3번

//비동기적 callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async delay'), 2000); //비동기 5번