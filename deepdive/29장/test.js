//V8의 기준.

//Array로 선언했을 경우 속도
const arr = [];

console.time('if else test');

const flag = true;
let a = 0;

for (let i = 0; i < 10000000; i++){
    if (flag) {
        a = 10;        
    } else {
        a = 5;
    }
}

console.timeEnd('if else test');

console.time('삼항 연산자 test');
const flag2 = true;
let a2 = 0;
for(let i =0; i< 10000000; i++){
    a2 = flag2 ? 10 : 5;
}
console.timeEnd('삼항 연산자 test');


console.time('단축 평가 test');
const flag3 = true;
let a3 = 0;
for (let i = 0; i < 10000000; i++){
    a3 = '' || !flag3
}
console.timeEnd('단축 평가 test');






//object로 선언했을 경우 속도
const obj = {};

console.time('Object Performance Test');

for(let i =0; i< 10000000; i++){
    obj[i] = i;
}

console.timeEnd('Object Performance Test');


//배열에 프로퍼티를 작성하는 경우
const arr2 = new Array();

console.time('arr2 Performance Test');

for(let i =0; i< 10000000; i++){
    arr2[i] = i;
}
arr2.check = "test";

console.timeEnd('arr2 Performance Test');


//문자열의 경우
console.log(Object.getOwnPropertyDescriptors('test'));


//객체의 경우
console.log(Object.getOwnPropertyDescriptors({1: 11,2: 22,3: 33}));



//배열의 경우 
console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));
[1, 2, 3].toString();


console.log(Array.from("test"));

console.time("V8 ArrayTest");
a = new Array();
for (var b = 0; b < 10; b++) {
    a[0] |= b;  // 안 좋아요!
}

console.timeEnd("V8 ArrayTest");

//vs.

console.time("V82 ArrayTest");
a = new Array();
a[0] = 0;
for (var b = 0; b < 10; b++) {
    a[0] |= b;  // 훨씬 좋습니다. 2배 더 빨라요.
}
console.timeEnd("V82 ArrayTest");
