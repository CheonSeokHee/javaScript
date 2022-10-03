'use Strict';
// 1.Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

 json = JSON.stringify(['apple', 'banana']);
 console.log(json);

 //callback함수는 json에 포함되지 않고 출력
 const dog = {
     name : 'mongdol',
     color : 'brown',
     size : null,
     birth: new Date()
 };

 json = JSON.stringify(dog);
 console.log(json);

json = JSON.stringify(dog, ['name']);
console.log(json);

json = JSON.stringify(dog , (key , value) => {
    return key === 'name' ? 'zzzz' : value;
});
console.log(json);



//2. JSON to Object
// parse(json)
json = JSON.stringify(dog);
const obj = JSON.parse(json, (key, value) => {
    return key === 'birth' ? new Date() : value;
});
console.log(obj);
console.log(dog.birth.getDate());
console.log(obj.birth);