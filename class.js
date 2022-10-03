'use Strict';
// 1. class 선언
class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log( '${this.name}: hello!');
    }
}

const abc = new Person('cheon' , 27);
console.log(abc.age);
console.log(abc.name);
abc.speak()


//2.getter, setter
class User{
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    //this.age가 호출될때 get 메소드 실행
    get age(){
        return this.age = _age;
    }
    // this.age = age 에서 뒤에 age값이 새롭게 value로 세팅할때 이 set 메소드 안에서 계속 돌기때문에 사이즈가 다 찼다는 에러 발생
    // 그렇기 때문에 안에 age이름을 조금 다르게 해주어야함 ==_age와 age의 차이
    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}
const User1 = new User('cheon', 'seokHee', '-1')
console.log(User1);


//3.Inheritance
class Shape{
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log('drarwing ${this.color} color of');
    }
    getArea(){
        return this.width * this.height;
    }
}
class Rectangle extends Shape{}
class Triangle extends Shape{
    getArea() {
        return (super.getArea())/2;
    }
}
const rectangle = new Rectangle('20', '20', 'red');
console.log(rectangle.getArea());
const triangle = new Triangle('20', '20', 'blue');
console.log(triangle.getArea());




//4.class Checking : Instance of  왼쪽의 오브젝트가 instance of 클래스를 이용해 만들어진건지 checking

