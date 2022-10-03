'use Strict';

//promise is a javaScript object for 비동기적
// state : pending -> fulfilled or rejected
//producer vs consumer

//1.prodcuer
//가장 먼저 실행하는 함수이다.
//새로운 promise가 만들어질때는  우리가 전달한 excutor 같은 함수가 자동적을 실행됨
const promise = new Promise((resolve, reject) => {
    //doing some heavy work(network, read files)
    console.log('doing something');
    setTimeout(() => {
        resolve('cheon'); //성공시
       // reject(new Error('no network')) // 실패시
    }, 2000);
});

//2. consumer: then, catch, finally
promise
.then(value => {                                    //성공적일시
    console.log(value);
})          //then 에서 리턴된 값으로 catch문 입장
.catch(error => {                                   //에러 시 
    console.log(error);
})
.finally(() => {
    console.log('finally'); //무조건 호출
})

//3.promise 연결하기
const fetchNum = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 2000);
});
fetchNum
    .then(num => num*2)
    .then(num => num*3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num-1), 1000);
        });
    })
    .then(num => console.log(num));


//4. error handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000);
    });

const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('달걀'), 1000);
    });

const cook = egg =>
     new Promise((resolve, reject) => {
         setTimeout(() => resolve('요리완성'), 1000);
     });
getHen()
    .then(getEgg)
    .then(cook)
    .then(console.log)
  

