# javaScript
## javaScript_ellieCoding

head+sync == 병렬적 처리, 순서에 의존적이지 않아 단점
head+defer == 선호함, 파싱하는 동안 다운하고 순서대로 실행됨

'use strict'; == 좀 더 안정적인 개발이 가능하다 ECMASript


variable
: let(일반적인 변수 타입added in ES6)(read / write)
 contants(한번 선언하면 값이 바뀌지 않음, 보안성이 좋음)(read only)


variable types
: Immuntable data Types:  primitive, single item: number, string, boolean, null, undefiend, symbol(map)
 Mmutable data Types: object, box container
 function, first-class function



dynamic typing
:let text = 'hello'
 value: hello, dataType: String
 
 text = 1;
 value : 1, dataType : number

 text = '7' + 5;
  value : 75, dataType  : String
 
 text = '8' / '2';
  value : 4, dateType : number


or 연산자는 앞에 값이 T일때 결과값을 바로 출력 그렇기 때문에 함수들은 마지막에 넣는다
and 연산자는 그 값이 F일때 출력


function을 만들때 안에 파라미터를 줘서 만들 수 도 있음
function log(message) {
   console.log(message);
}
log('HELLO');
--> 자바스크립트는 타입의 무의미 하다.

파라미터
: 기본형 타입은 = value
  object 타입은 = reference

default 파라미터
: ES6문법
 function showMessage(message, from = 'unknwon') {

}

rest 파라미터
: ...agrs -> 배열형태
 function printAll(...args)



return 
: early return, early exit의 의미는 if 문안에 로직을 많이 작성하면
  가독성이 떨어지므로 if else 보다는 if가 아닐땐 빠르게 return; 으로 나가게 하기

funtion experssion
: 



callback
: 파라미터 안에 함수를 정의해서 상황에 맞게 호출하게 하는 구조
  function randomQuiz(answer, printYes, printNo){
  if(answer === 'love you') {
   printYes();
} else{
   printNo();
}
}




arrow function
: ==anonymas function
  ex) const simplePrint = function(){
  console.log('simplePrint');
};

--------------아래가 화살표함수--------

const simplePrint = () => console.log('simpePrint');
const add = (a, b) => a + b;




object와 class의 차이점
: class에는 데이터가 존재하지 않고 틀만 존재 즉 정의의 개념
  class를 이용해서 데이터를 넣는 순간 object가 된다.
  
  





