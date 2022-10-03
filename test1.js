'use Strict';
//1.  make a string out of an array
// join() api 사용  배열을 string 형태로
const fruits = ['apple', 'banana', 'orange'];
const result = fruits.join(' ');
console.log(result)


//Q2. make an array out of a string
// split() api 사용  String을 배열 형태로
const fruits2 = 'a,b,c,d';
const result2 = fruits2.split(',');
console.log(result2);


// Q3. make this array look like this: [5, 4, 3, 2, 1]
// reverse() api 사용 ==> return 되는 배열 자체의 상태를 바꿔준다
const array1 = [1,2,3,4,5];
const result3 = array1.reverse();
console.log(result3);


//Q4. make new array without the first two elements
// slice() api 사용 뒤에 기준은 배제되는 값이라 범위를 잘 정해야함 기존 array2는 변하지 않음
const array2 = [1,2,3,4,5];
// console.log(array.splice(2,array.length-1));  splice는 배열 자체를 변형시킴
const result4 = array2.slice(2,5);
console.log(result4);


class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
    getScore(){
        if(this.score = 90){
            return this.score = score;
        }
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
//find() api 사용 callback 함수를 써서 자신에서 호출해야하는 구조 (조건을 찾을때 사용)
{
    const scoreStu = students.find( (student) =>  student.score === 90);
    console.log(scoreStu);
}

// Q6. make an array of enrolled students
// filter api 사용  원하고자 하는 조건으로 배열을 만들 때 사용
{
   const enrolledStu = students.filter((student) => student.enrolled);
   console.log(enrolledStu);

}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// map api 사용  새로운 조건에 따라 재 배열을 만들때 사용  (student.score * 2) 이런식으로 배열에 조건을 주어 출력가능
{
    const scoreArr = students.map((student) => student.score);
    console.log(scoreArr);
}

// Q8. check if there is a student with the score lower than 50
// return 값이 true가 있는지 확인 some() api (만족하는게 있는지 확인) every는 모든 배열안의 값들이 만족하는게 있는지 확인
{
    const lowerStu = students.some((student) => student.score < 50);
    console.log(lowerStu);
}

// Q9. compute students' average score
// reduce는 우리가 원하는 시작점 부터 배열의 끝까지 돌면서 값을 누적하게 해주는 api  reduceRight는 거꾸로 돈다
//prev는 callback 함수에서 리턴된 값 curr는 범위
{
   const avgStu = students.reduce((prev, curr) => prev + curr.score ,0);
    console.log(avgStu / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const scoreArr1 = students.map((student) => student.score).join();
    console.log(scoreArr1);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const scoreArr1 = students.map((student) => student.score).sort((a,b) => a - b).join();
    console.log(scoreArr1);
}