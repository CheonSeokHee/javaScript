'use Strict';
//Array

//배열을 출력하는 방법

const array = ['banana', 'apple'];
//1. forloop
for(i = 0; i<array.length; i ++){
   //console.log(array[i]);
}
//2.for of
for(value of array){
    //console.log(value);
}
//3.forEach api 이용 -- callback함수 호출 
// 이름이 없는 함수일떄는 화살표 함수를 이용하기
array.forEach((array) => console.log(array));

//4. indexof, includes, splice(추가 삭제 할 수있는 api)