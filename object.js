//1. Objects  key : value 형태
// Literals and properties
const ob1 = {}; //object Literals syntax
const ob2 = new Object(); //object constructor syntax

function print(person){
console.log(person.name);
console.log(person.age);
}
const abc = {name:'cheon', age: 27};
print(abc);

abc.setJob = true;
console.log(abc.setJob);

delete abc.setJob;
console.log(abc.setJob);



//2. computed properties
//   key should be string
console.log(abc.name);
console.log(abc['name']);
abc['setJob'] = true;
console.log(abc.setJob);

function printValue(obj, key){
    console.log(obj[key]); //obj.key 형식으로 접근하면 undefined
}
printValue(abc, 'name');
printValue(abc, 'age');


//3.Property value shorthand
const person1 = {name: 'peroson1', age: 20};
const person2 = {name: 'peroson2', age: 21};
const person3 = new Person('person3', 22);
console.log(person3);

//4. constructor Function
function Person(name, age) {
//this = {}; 이 생략된 구조
    this.name = name;
    this.age = age;
//return this;
}

//5.in operator
console.log('name' in abc); // abc 오브젝트 안에 key가 존재하는지 확인
console.log('random' in abc); // random은 없는 앖이므로 false 출력

//6. for in
console.clear();
for(key in abc){
    console.log(key)
}
//for out
const array = [1,2,3,4,5];
for(value of array){
    console.log(value);
}

//7.fun cloning
// object.assign(dest, [obj1,obj2,obj3...])

